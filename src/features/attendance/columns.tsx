import { ColumnDef } from "@tanstack/react-table";
import { Attendance } from "../../types";
import CurrentStatus from "./CurrentStatus";
import Actions from "./Actions";

export const columns: ColumnDef<Attendance>[] = [
  {
    accessorKey: "sn",
    header: "S/N",
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
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => <CurrentStatus status={row.original.status} />,
  },
  {
    id: "actions",
    cell: ({ row }) => <Actions id={row.original.id} />,
  },
];
