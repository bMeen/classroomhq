import { ColumnDef } from "@tanstack/react-table";
import { DynamicSubject, Grade } from "../../types";
import { UserPen } from "lucide-react";
import Modal from "../../components/Modal";
import EditGrade from "./EditGrade";

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
      header: () => <span className="capitalize">{subject}</span>,
      id: subject,
      accessorFn: (row: Grade) => row.grades[subject],
    })),
    {
      accessorKey: "average_score",
      header: "Average Score",
    },
    {
      id: "actions",
      cell: ({ row }) => (
        <div>
          <Modal>
            <Modal.Open opens="edit-grade">
              <UserPen className="text-blue-600" />
            </Modal.Open>
            <Modal.Window name="edit-grade">
              <EditGrade id={row.original.id} />
            </Modal.Window>
          </Modal>
        </div>
      ),
    },
  ];
}
