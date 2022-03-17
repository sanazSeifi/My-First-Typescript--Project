import { useState } from "react";
import { TriangleEdges } from "../../models/triangle.model";
import Input from "../forms/Input";
import InputNumber from "../forms/Number";
import { isTriangle } from "../tools/isTriangle";

function TriangleCalculator() {
  const [userName, setUserName] = useState<string>("");
  const [triangle, setTriangle] = useState<TriangleEdges>({
    edge1: 0,
    edge2: 0,
    edge3: 0,
  });
  return (
    <>
      <h1>Welcome</h1>
      <hr />
      <label>Enter Your Name</label>
      <Input
        value={userName}
        onchange={(value: string) => setUserName(value)}
      />
      <hr />
      <label>Edge1</label>
      <InputNumber
        value={triangle.edge1}
        onchange={(e1: number) => setTriangle({ ...triangle, edge1: e1 })}
      />
      <label>Edge2</label>
      <InputNumber
        value={triangle.edge2}
        onchange={(e2: number) => setTriangle({ ...triangle, edge2: e2 })}
      />
      <label>Edge3</label>
      <InputNumber
        value={triangle.edge3}
        onchange={(e3: number) => setTriangle({ ...triangle, edge3: e3 })}
      />
      {isTriangle(triangle.edge1, triangle.edge2, triangle.edge3) === true ? (
        <p>{userName} create a Triangle</p>
      ) : (
        <p>{userName} Cannot create a Triangle</p>
      )}
    </>
  );
}

export default TriangleCalculator;
