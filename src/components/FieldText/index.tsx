import "./styles.css";

type FieldTextProps = {
  type: string;
  id: string;
  placeholder?: string;
  name: string;
  rows: number;
};

export function FieldText(props: FieldTextProps) {
  return <textarea className="field-text" {...props}></textarea>;
}
