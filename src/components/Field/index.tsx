import * as C from "./styles";

interface FieldProps {
  label: string;
  type: string;
  currentValue?: string;
  onFieldChanged?: (text: string) => void;
  placeholder?: string;
}

export const Field = ({
  label,
  type,
  currentValue,
  onFieldChanged,
}: FieldProps) => {
  return (
    <C.Container>
      <C.Label>{label}</C.Label>
      <input
        type={type}
        value={currentValue}
        onChange={(e) => onFieldChanged!(e.target.value)}
      />
    </C.Container>
  );
};
