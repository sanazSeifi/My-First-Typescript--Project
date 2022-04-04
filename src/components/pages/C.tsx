import { useState } from "react";
import Aaa from "./A";
import Bbb from "./B";

function Ccc() {
  const [value, setValue] = useState("");
  return <>
  <div>
    <Aaa value= {value} onChange = {(value: string)=> setValue(value)}/>
  </div>
   <div>
     <Bbb value= {value} onChange = {(value: string)=> setValue(value)}/>
   </div>
  </>
   
}

export default Ccc;
