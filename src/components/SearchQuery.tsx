import { Search } from "lucide-react";
import { useSearchParams } from "react-router-dom";

function SearchQuery() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("searchQuery") || "";

  function handleQuery(e: React.ChangeEvent<HTMLInputElement>) {
    searchParams.set("searchQuery", e.target.value.toLowerCase());
    setSearchParams(searchParams);
  }

  return (
    <div className="relative hidden text-sm text-slate-500 md:block">
      <input
        value={query}
        onChange={handleQuery}
        type="text"
        className="py-1 pl-8"
        placeholder="Search..."
      />
      <Search size={18} className="absolute left-2 top-1/2 -translate-y-1/2" />
    </div>
  );
}

export default SearchQuery;
