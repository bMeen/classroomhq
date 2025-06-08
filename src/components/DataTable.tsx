import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  PaginationState,
  SortingState,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table";
import Button from "./Button";
import {
  ArrowDown01,
  ArrowUp10,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

type TableProps<T> = {
  columns: ColumnDef<T>[];
  data: T[];
  hideColumns?: VisibilityState;
};

function DataTable<T>({ columns, data, hideColumns }: TableProps<T>) {
  const [searchParams] = useSearchParams();
  const filter = searchParams.toString();
  const [sorting, setSorting] = useState<SortingState>([]);
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>(
    hideColumns ?? {},
  );

  useEffect(() => {
    const totalPages = Math.ceil(data.length / pagination.pageSize);

    if (pagination.pageIndex >= totalPages && totalPages > 0) {
      setPagination((prev) => ({
        ...prev,
        pageIndex: totalPages - 1,
      }));
    }
  }, [data.length, pagination]);

  useEffect(() => {
    setPagination((prev) => ({
      ...prev,
      pageIndex: 0,
    }));
  }, [filter]);

  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    autoResetPageIndex: false,
    state: {
      sorting,
      pagination,
      columnVisibility,
    },
    onColumnVisibilityChange: setColumnVisibility,
    onSortingChange: setSorting,
    onPaginationChange: setPagination,
  });

  const { pageIndex: page, pageSize: per_page } = pagination;

  return (
    <>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => {
            return (
              <tr key={headerGroup.id}>
                <th>S/N</th>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    colSpan={header.colSpan}
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
                    {{
                      asc: <ArrowDown01 className="ml-1 inline" size={16} />,
                      desc: <ArrowUp10 className="ml-1 inline" size={16} />,
                    }[header.column.getIsSorted() as "asc" | "desc"] ?? null}
                  </th>
                ))}
              </tr>
            );
          })}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row, index) => {
            return (
              <tr key={row.id}>
                <td>{page * per_page + (index + 1)}</td>
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}

          {!data.length && (
            <tr>
              <td colSpan={columns.length + 1}>
                <div className="flex h-40 w-full items-center justify-center text-gray-500">
                  No results found
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <div className="my-4 flex justify-end gap-2">
        {table.getCanPreviousPage() && (
          <Button
            type="pagination"
            onClick={() => table.previousPage()}
            className="group"
          >
            <ChevronLeft
              size={18}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            Previous
          </Button>
        )}
        {table.getCanNextPage() && (
          <Button
            type="pagination"
            onClick={() => table.nextPage()}
            className="group"
          >
            Next
            <ChevronRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Button>
        )}
      </div>
    </>
  );
}

export default DataTable;
