import RadioButton from './RadioButton';

const modeOptions = [
  { value: 'search', label: 'Tryb wyszukiwania' },
  { value: 'guess', label: 'Tryb zgadywania' },
];

interface ModeRadioGroupProps {
  checked: string;
  onChange: (value: string) => void;
}
export function ModeRadioGroup({ checked, onChange }: ModeRadioGroupProps) {
  return (
    <>
      {modeOptions.map((option) => (
        <RadioButton
          key={option.value}
          value={option.value}
          label={option.label}
          name={'mode'}
          checked={checked === option.value}
          onChange={onChange}
        />
      ))}
    </>
  );
}

export default ModeRadioGroup;
