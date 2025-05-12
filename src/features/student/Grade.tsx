import { useParams } from "react-router-dom";

function Grade() {
  const { id } = useParams();
  return <div>Grade {id}</div>;
}

export default Grade;
