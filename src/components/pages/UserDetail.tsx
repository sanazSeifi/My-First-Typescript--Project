import { useParams } from "react-router-dom";

function UserDetail() {
  console.log(useParams())
const {key} = useParams();
  return (
   <div>
     {`man user ${key} hastam`}
   </div>
  );
}

export default UserDetail;
