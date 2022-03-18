import { useNavigate } from "react-router-dom";

function UsersList() {
  let array: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const navigator = useNavigate();
  return (
    <div>
      {array.map((item: number, index: number) => {
        return (
          <>
            <div onClick={()=>{navigator(`/users/${item}`)}}>{item *2}</div>
            <hr />
          </>
        );
      })}
    </div>
  );
}

export default UsersList;
