import Select from './Select';

const filterOptions = [
  { value: 'currency', label: 'Currency' },
  { value: 'lang', label: 'Language' },
  { value: 'capital', label: 'Capital City' },
  { value: 'name', label: 'Name' },
];

interface FilterSelectProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
export function FilterSelect({ value, onChange }: FilterSelectProps) {
  return (
    <Select
      label="Filter by"
      value={value}
      options={filterOptions}
      onChange={onChange}
    />
  );
}

export default FilterSelect;
