import { ColumnDef } from "@tanstack/react-table";
import { Student } from "../../types";
import Actions from "./Actions";

export const columns: ColumnDef<Student>[] = [
  {
    accessorKey: "fullName",
    header: "Name",
    enableSorting: false,
  },
  {
    accessorKey: "guardianName",
    header: "Guardian",
    enableSorting: false,
  },

  {
    accessorKey: "age",
    header: "Age",
  },
  {
    accessorKey: "gender",
    enableSorting: false,
    header: "Gender",
    cell: ({ getValue }) => {
      const value = getValue<string>();
      return <span className="capitalize">{value}</span>;
    },
  },
  {
    id: "actions",
    enableSorting: false,
    cell: ({ row }) => <Actions id={row.original.id} />,
  },
];
