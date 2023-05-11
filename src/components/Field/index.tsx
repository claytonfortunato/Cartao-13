import * as C from "./styles";

interface FieldProps {
  label: string;
  type: string;
  currentValue?: string;
  onFieldChanged?: (text: string) => void;
  placeholder?: string;
  help?: string;
}

export const Field = ({
  label,
  type,
  currentValue,
  help,
  onFieldChanged,
}: FieldProps) => {
  return (
    <C.Container>
      <C.Label>
        {label}

        <img src={help} alt="" />
      </C.Label>
      <input
        type={type}
        value={currentValue}
        onChange={(e) => onFieldChanged!(e.target.value)}
      />
    </C.Container>
  );
};
