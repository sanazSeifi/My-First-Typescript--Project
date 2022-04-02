import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function UserDetail() {
  // const totalData = useLocation().search;
  // const itemData = new URLSearchParams(totalData).get("data");
  // const dataObject = JSON.parse(itemData!);
  // console.log(dataObject);
  const [itemData, setItemData] = useState({});
  const [loader, setLoder] = useState(false);
  const { entityId } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    setLoder(true);
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${entityId}`
      );
      setItemData(response.data);
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
          <div>
            {/* <span>{item.id}</span> */}
            <pre>{JSON.stringify(itemData)}</pre>
          </div>
        </>
      )}
    </div>
  );
}

export default UserDetail;
