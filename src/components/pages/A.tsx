interface AaProps {
  value: string;
  onChange: (value: string) => void;
}

function Aaa(props: AaProps) {
  return (
    <input
      value={props.value}
      onChange={(event: any) => props.onChange(event.target.value)}
    />
  );
}

export default Aaa;
