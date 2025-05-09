import { ColumnDef } from "@tanstack/react-table";
import { Student } from "../../types";
import Actions from "./Actions";

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
    accessorKey: "age",
    header: "Age",
  },
  {
    accessorKey: "gender",
    header: "Gender",
    cell: ({ getValue }) => {
      const value = getValue<string>();
      return <span className="capitalize">{value}</span>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => <Actions id={row.original.id} />,
  },
];
