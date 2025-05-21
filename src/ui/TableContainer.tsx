function TableContainer({ children }: { children: React.ReactNode }) {
  return <div className="overflow-x-scroll">{children}</div>;
}

export default TableContainer;
