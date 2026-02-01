import "./styles.css";

type FieldFormProps = {
  children: React.ReactNode;
};

export function FieldForm({ children }: FieldFormProps) {
  return <fieldset className="field-form">{children}</fieldset>;
}
