interface Props {
  value: number;
  onchange: (value: number) => void;
  className?: string;
}

function InputNumber(props: Props) {
  return (
    <input
      type="number"
      className={props.className}
      value={props.value}
      onChange={(e: any) => {
        let numericValue: number = Number(e.target.value);
        if (numericValue === NaN) {
          numericValue = 0;
        }
        props.onchange(numericValue);
      }}
    />
  );
}

// interface Props2{
//   value:number;
//   onchange: (value : number)=> void;
//   className?: string;
// }

export default InputNumber;
