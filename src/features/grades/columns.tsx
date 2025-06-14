import { ColumnDef } from "@tanstack/react-table";
import { DynamicSubject, Grade } from "../../types";
import { UserPen } from "lucide-react";
import Modal from "../../components/Modal";
import EditGrade from "./EditGrade";
import GradeHeader from "./gradeHeader";

export function useCustomColumns(
  subjects: DynamicSubject[],
): ColumnDef<Grade>[] {
  return [
    {
      accessorKey: "name",
      header: "Name",
    },
    ...subjects.map((subject) => ({
      //header: () => <span className="capitalize">{subject}</span>,
      header: () => <GradeHeader subject={subject} />,
      id: subject,
      accessorFn: (row: Grade) => row.grades[subject],
    })),
    {
      accessorKey: "average_score",
      header: "Average Score",
    },
    {
      id: "actions",
      enableSorting: false,
      cell: ({ row }) => (
        <div>
          <Modal>
            <Modal.Open opens="edit-grade">
              <UserPen className="text-color-late" />
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
