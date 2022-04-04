interface BbProps {
  value: string;
  onChange: (value: string) => void;
}

function Bbb(props: BbProps) {
  return (
    <input
      value={props.value}
      onChange={(event: any) => props.onChange(event.target.value)}
    />
  );
}

export default Bbb;
