import { useParams } from "react-router-dom";

function Records() {
  const { id } = useParams();
  return <div>Record {id}</div>;
}

export default Records;
