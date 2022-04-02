import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Table from "../tools/table";

function PostsList() {
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
        "https://jsonplaceholder.typicode.com/posts"
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
          <Table data={listData} actions={[]} />

          {/* {listData.map((item: any, index: number) => {
            return (
              <div
                onClick={() => {
                  navigator(`/users/${item.id}`);
                }}
              >
                <pre>{JSON.stringify(item)}</pre>
              </div>
            );
          })} */}
        </>
      )}
    </div>
  );
}

export default PostsList;
