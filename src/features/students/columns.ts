import { ColumnDef } from "@tanstack/react-table";
import { Student } from "../../types";

export const columns: ColumnDef<Student>[] = [
  {
    accessorKey: "sn",
    header: "S/N",
  },
  {
    accessorKey: "fullName",
    header: "Name",
  },
  {
    accessorKey: "guardianName",
    header: "Guardian",
  },
  {
    accessorKey: "guardianEmail",
    header: "Phone Number",
  },
  {
    accessorKey: "age",
    header: "Age",
  },
  {
    accessorKey: "gender",
    header: "Gender",
  },
  {
    id: "actions",
    enableHiding: false,
  },
];
