import { useSearchParams } from "react-router-dom";
import { Gender, Status } from "../types";

type Field = "gender" | "status";

type FilterQuery = Gender | Status | "all";

type Filter = {
  gender?: Gender;
  status?: Status | "";
  fullName?: string;
};

export default function useFilter<T extends Filter>(data: T[], field: Field) {
  const [searchParams] = useSearchParams();
  const filter = (searchParams.get(field) as FilterQuery) || "all";
  const query = searchParams.get("searchQuery") || "";

  let filtered;

  filtered = data.filter((data) => {
    if (filter === "all") return true;
    return data[field] === filter;
  });

  if (query && query.length > 3) {
    filtered = data.filter((data) =>
      data.fullName?.toLowerCase().includes(query),
    );
  }

  return { filtered };
}
