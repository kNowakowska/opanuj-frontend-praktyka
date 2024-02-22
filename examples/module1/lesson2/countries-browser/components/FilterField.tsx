import { ChangeEvent } from 'react';
import TextField from './TextField';

interface FilterFieldProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
export function FilterField({ value, onChange }: FilterFieldProps) {
  return (
    <TextField
      label="Value"
      value={value}
      onChange={onChange}
      placeholder="Input value to filter by..."
    />
  );
}

export default FilterField;
