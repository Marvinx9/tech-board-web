import "./styles.css";

type LabelProps = {
  children: React.ReactNode;
  htmlFor: string;
};

export function Label({ children, htmlFor }: LabelProps) {
  return (
    <label className="label" htmlFor={htmlFor}>
      {children}
    </label>
  );
}
