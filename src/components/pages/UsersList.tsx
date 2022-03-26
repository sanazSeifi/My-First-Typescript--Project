import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function UsersList() {
  const [listData, setListData] = useState([]);
  const [loader, setLoder] = useState(false);
  const navigator = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    setLoder(true);
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setListData(response.data);
    } catch (error) {
      alert("There is an error");
    } finally {
      setLoder(false);
    }
  }
  return (
    <div>
      {loader === true ? (
        <span>Loading</span>
      ) : (
        <>
          <div>list</div>
          {listData.map((item: any, index: number) => {
            return (
              <div
                onClick={() => {
                  navigator(`/users/${item.id}`);
                }}
              >
                <span>{item.id}</span>
                <pre>{JSON.stringify(item)}</pre>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}

export default UsersList;
