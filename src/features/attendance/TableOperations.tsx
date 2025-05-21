import Filter from "../../components/Filter";

function TableOperations() {
  return (
    <div className="flex justify-end">
      <Filter
        field="status"
        options={[
          { label: "All", value: "all" },
          { label: "Present", value: "present" },
          { label: "Late", value: "late" },
          { label: "Absent", value: "absent" },
        ]}
      />
    </div>
  );
}

export default TableOperations;
