import "./styles.css";

type FieldInputProps = {
  type: string;
  id: string;
  placeholder?: string;
  name: string;
  required?: boolean;
};

export function FieldInput(props: FieldInputProps) {
  return <input className="field-input" {...props} />;
}
