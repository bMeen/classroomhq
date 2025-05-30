import { useSearchParams } from "react-router-dom";
import { Options } from "../types";

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
        <button
          className={`rounded-md px-3 py-1 transition-all duration-75 ${currentField === value ? "text-text-primary cursor-not-allowed bg-primary" : "cursor-pointer bg-none text-primary"}`}
          key={value}
          onClick={() => handleFilter(value as string)}
          disabled={currentField === value}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export default Filter;

/*     if (searchParams.get("page")) searchParams.set("page", 1); */
