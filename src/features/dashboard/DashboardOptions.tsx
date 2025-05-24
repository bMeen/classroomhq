import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { useOutsideClick } from "../../lib/useOutsideClick";
import { Options } from "../../types";

const className = "h-3 w-3";

function DashboardOptions({ options }: { options: Options[] }) {
  const [selected, setSelected] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(false);

  function handleSelect(option: Options) {
    setSelected(option);
    setIsOpen(false);
  }

  const close = () => setIsOpen(false);
  const ref = useOutsideClick<HTMLUListElement>(close);

  return (
    <div className="relative ml-auto w-full space-y-1 text-xs md:w-40 md:text-[15px]">
      <div className="flex cursor-pointer items-center justify-between rounded bg-slate-50 px-2 py-1 capitalize">
        <p>
          {selected.label}: {selected.value}
        </p>

        <div onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <ChevronUp className={className} />
          ) : (
            <ChevronDown className={className} />
          )}
        </div>
      </div>
      {isOpen && (
        <ul
          ref={ref}
          className="absolute bottom-10 z-50 max-h-36 w-full space-y-1 overflow-y-scroll bg-slate-50 px-1 py-2 shadow md:w-40"
        >
          {options.map((option) => (
            <li
              key={option.label}
              className="flex cursor-pointer items-center justify-between px-2 py-1 capitalize hover:bg-slate-100"
              onClick={() => handleSelect(option)}
            >
              <span>{option.label}</span>
              <span>{option.value}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DashboardOptions;
