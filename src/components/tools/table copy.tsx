import { useEffect, useState } from "react";

export interface TableProps {
  data: Array<object>;
}

function Table(props: TableProps) {
  const [fields, setFields] = useState<Array<string>>([]);

  useEffect(() => {
    console.log(props.data, "tableComponent");
    if (props.data.length) {
      let flds = Object.keys(props.data[0]);
      flds.unshift("row");
      setFields(flds);
    }
  }, [props.data]);



  return (
    <>
      {
        <table>
          <thead>
            {fields.map((field: string, i: number) => {
              return <th>{field}</th>;
            })}
          </thead>
          <tbody>
            {props.data.map((itemObj: any, i: number) => {
              return (
                <tr>
                  {fields.map((field: string, j: number) => {
                    return (
                      <>
                        {field === "row" ? (
                          <td>{i + 1}</td>
                        ) : (
                          <td>
                            {typeof itemObj[field] === "string"
                              ? itemObj[field]
                              : "---"}
                          </td>
                        )}
                      </>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      }
    </>
  );
}
export default Table;
