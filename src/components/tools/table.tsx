import { useEffect, useState } from "react";

export interface TableProps {
  data: Array<object>;
  actions: Array<TableActions>;
}
export interface TableActions {
  title: string;
  type: string;
  actionCallBack: (rowData: any, type: string) => void;
}

function Table(props: TableProps) {
  const [fields, setFields] = useState<Array<string>>([]);

  useEffect(() => {
    console.log(props.data, "tableComponent");
    if (props.data.length) {
      let flds = Object.keys(props.data[0]);
      flds.unshift("row");
      flds.push("actions");
      setFields(flds);
    }
  }, [props.data]);

  return (
    <>
      {
        <div className="custom-table">
          <div className="custom-table-header">
            {fields.map((field: string, i: number) => {
              return (
                <div
                  style={{
                    width: `${100 / fields.length}%`,
                    maxWidth: `${100 / fields.length}%`,
                  }}
                  className="custom-table-header-cell"
                >
                  {field}
                </div>
              );
            })}
          </div>
          <div className="custom-table-body">
            {props.data.map((itemObj: any, i: number) => {
              return (
                <div className="custom-table-body-row">
                  {fields.map((field: string, j: number) => {
                    return (
                      <>
                        {field === "row" ? (
                          <div
                            style={{
                              width: `${100 / fields.length}%`,
                              maxWidth: `${100 / fields.length}%`,
                            }}
                            className="custom-table-body-row-cell"
                          >
                            {i + 1}
                          </div>
                        ) : field === "actions" ? (
                          <div
                            style={{
                              width: `${100 / fields.length}%`,
                              maxWidth: `${100 / fields.length}%`,
                            }}
                            className="custom-table-body-row-cell"
                          >
                            {props.actions.map(
                              (actionObj: TableActions, i: number) => {
                                return (
                                  <div
                                    onClick={() => {
                                      actionObj.actionCallBack(
                                        itemObj,
                                        actionObj.type
                                      );
                                    }}
                                    className="tabel-action-class"
                                  >
                                    {actionObj.title}
                                  </div>
                                );
                              }
                            )}
                          </div>
                        ) : (
                          <div
                            style={{
                              width: `${100 / fields.length}%`,
                              maxWidth: `${100 / fields.length}%`,
                            }}
                            className="custom-table-body-row-cell"
                          >
                            {typeof itemObj[field] === "string"
                              ? itemObj[field]
                              : "---"}
                          </div>
                        )}
                      </>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      }
    </>
  );
}
export default Table;
