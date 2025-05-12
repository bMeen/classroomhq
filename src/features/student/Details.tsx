import { useParams } from "react-router-dom";

function Details() {
  const { id } = useParams();
  return <div>Form {id}</div>;
}

export default Details;
