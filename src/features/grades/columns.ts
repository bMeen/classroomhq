import { ColumnDef } from "@tanstack/react-table";
import { Grade } from "../../types";

export const columns: ColumnDef<Grade>[] = [
  {
    accessorKey: "sn",
    header: "S/N",
  },
  {
    accessorKey: "name",
    header: "Student Name",
  },
  {
    accessorKey: "Math",
    header: " Math",
  },
  {
    accessorKey: "English",
    header: " English",
  },
  {
    accessorKey: "Science",
    header: " Science",
  },
  {
    accessorKey: "History",
    header: "History ",
  },
  {
    accessorKey: "Arts",
    header: "Arts",
  },
  {
    accessorKey: "average_score",
    header: "Average Score",
  },
  {
    id: "actions",
    enableHiding: false,
  },
];
