import { ColumnDef } from "@tanstack/react-table";
import { Attendance } from "../../types";
import CurrentStatus from "./CurrentStatus";
import Actions from "./Actions";

export const columns: ColumnDef<Attendance>[] = [
  {
    accessorKey: "name",
    header: "Student Name",
    enableSorting: false,
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
  {
    accessorKey: "status",
    header: "Status",
    enableSorting: false,
    cell: ({ row }) => <CurrentStatus status={row.original.status} />,
  },
  {
    id: "actions",
    enableSorting: false,
    cell: ({ row }) => <Actions id={row.original.id} />,
  },
];
