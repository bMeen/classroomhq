import { ColumnDef } from "@tanstack/react-table";
import { DynamicSubject, Grade } from "../../types";
import { UserPen } from "lucide-react";

export function useCustomColumns(
  subjects: DynamicSubject[],
): ColumnDef<Grade>[] {
  return [
    {
      accessorKey: "sn",
      header: "S/N",
    },
    {
      accessorKey: "name",
      header: "Student Name",
    },
    ...subjects.map((subject) => ({
      header: subject,
      id: subject,
      accessorFn: (row: Grade) => row.grades[subject],
      //cell: ({ getValue }) => <span>{getValue()}</span>,
    })),
    {
      accessorKey: "average_score",
      header: "Average Score",
    },
    {
      id: "actions",
      cell: ({ row }) => (
        <div>
          <UserPen className="text-blue-600" />
        </div>
      ),
    },
  ];
}
