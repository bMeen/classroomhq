import { ColumnDef } from "@tanstack/react-table";
import { Attendance } from "../../types";

export const columns: ColumnDef<Attendance>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Student Name",
  },
  {
    accessorKey: "present",
    header: "Present",
  },
  {
    accessorKey: "late",
    header: "Late",
  },
  {
    accessorKey: "absent",
    header: "Absent",
  },
];
