function TableContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`${className} overflow-x-scroll`}>{children}</div>;
}

export default TableContainer;
