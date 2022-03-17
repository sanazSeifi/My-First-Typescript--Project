interface Props {
  value: string;
  onchange: (value: string) => void;
  className?: string;
}

function Input(props: Props) {
  return (
    <input
      className={props.className}
      value={props.value}
      onChange={(e: any) => {
        props.onchange(e.target.value);
      }}
    />
  );
}

export default Input;
