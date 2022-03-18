import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RectangleEdges } from "../../models/rectangle.model";
import Input from "../forms/Input";
import InputNumber from "../forms/Number";
import { isRectangle } from "../tools/isRectangle";

function RectangleCalculator() {
  const [userName, setUserName] = useState<string>("");
  const [rectangle, setRectangle] = useState<RectangleEdges>({
    edge1: 0,
    edge2: 0,
    edge3: 0,
    edge4: 0,
  });
  const navigator = useNavigate();
  return (
    <>
      <h1>Here is the calculation of Rectangle</h1>
      <div onClick={()=>{navigator("/triangle")}} >Go to TriangleCalculator</div>
      <hr />
      <label>Inter Your Name</label>
      <Input
        value={userName}
        onchange={(value: string) => setUserName(value)}
      />
      <hr />
      <label>Edge1</label>
      <InputNumber
        value={rectangle.edge1}
        onchange={(e: number) => {
          setRectangle({ ...rectangle, edge1: e });
        }}
      />
      <hr />
      <label>Edge2</label>
      <InputNumber
        value={rectangle.edge2}
        onchange={(e: number) => {
          setRectangle({ ...rectangle, edge2: e });
        }}
      />
      <hr />
      <label>Edge3</label>
      <InputNumber
        value={rectangle.edge3}
        onchange={(e: number) => {
          setRectangle({ ...rectangle, edge3: e });
        }}
      />
      <hr />
      <label>Edge4</label>
      <InputNumber
        value={rectangle.edge4}
        onchange={(e: number) => {
          setRectangle({ ...rectangle, edge4: e });
        }}
      />
      {isRectangle(
        rectangle.edge1,
        rectangle.edge2,
        rectangle.edge3,
        rectangle.edge4
      ) === true ? (
        <p>{userName} you may see a Rectangle on this situation 👌</p>
      ) : (
        <p>{userName} you could not see a Rectangle on this situation 🤦‍♀️</p>
      )}
    </>
  );
}
export default RectangleCalculator;
