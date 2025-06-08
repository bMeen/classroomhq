import { useSearchParams } from "react-router-dom";
import { Options } from "../types";
import { motion } from "motion/react";

function Filter({ field, options }: { field: string; options: Options[] }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentField = searchParams.get(field) || options[0].value;

  function handleFilter(value: string) {
    searchParams.set(field, value);
    setSearchParams(searchParams);
  }

  return (
    <div className="my-3 inline-flex gap-1 rounded-md border-[1px] border-primary p-1">
      {options.map(({ label, value }) => (
        <motion.button
          animate={{
            backgroundColor:
              currentField === value ? "var(--primary)" : "transparent",
            color:
              currentField === value ? "var(--text-primary)" : "var(--primary)",
          }}
          className={`rounded-md px-3 py-1 text-sm md:text-base ${currentField === value ? "cursor-not-allowed" : "cursor-pointer"}`}
          transition={{ type: "tween", duration: 0.3 }}
          whileTap={{ scale: 0.95 }}
          key={value}
          onClick={() => handleFilter(value as string)}
          disabled={currentField === value}
        >
          {label}
        </motion.button>
      ))}
    </div>
  );
}

export default Filter;
