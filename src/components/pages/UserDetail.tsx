import { useParams } from "react-router-dom";

function UserDetail() {
const {id} = useParams();
  return (
   <div>
     {`man user ${id} hastam`}
   </div>
  );
}

export default UserDetail;
