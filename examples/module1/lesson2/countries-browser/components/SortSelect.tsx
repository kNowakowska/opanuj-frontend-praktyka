import Select from "./Select";

const sortOptions = [
    { value: "alphabetical", label: "Alphabetically" },
    { value: "population", label: "By population" },
];

interface SortSelectProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export function SortSelect({ value, onChange }: SortSelectProps) {
    return (
       <Select value={value} onChange={onChange} label="Sort by" options={sortOptions}/>
    )
}

export default SortSelect;