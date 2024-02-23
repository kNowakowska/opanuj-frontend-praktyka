interface RadioButtonProps {
  value: string;
  label: string;
  name: string;
  checked?: boolean;
  onChange: (value:string) => void;
}
export function RadioButton({ value, label, name, checked, onChange }: RadioButtonProps) {
  return (
    <div className="flex items-center mb-4">
      <input
        id="default-radio-1"
        type="radio"
        value={value}
        name={name}
        checked={checked}
        onChange={() => onChange(value)}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <label
        htmlFor="default-radio-1"
        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {label}
      </label>
    </div>
  );
}
export default RadioButton;
