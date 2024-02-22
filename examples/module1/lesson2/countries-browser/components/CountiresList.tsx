import CountryCard from './CountryCard';

interface CountriesListProps {
  countries: Country[];
}
function CountriesList({ countries }: CountriesListProps) {
  return (
    <ol className="grid grid-cols-1 gap-4 list-none md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {countries.map(({ name, flags }: Country, idx: number) => (
        <CountryCard
          image={flags.png}
          key={`${name.common}_${idx}`}
          name={name.common}
        />
      ))}
    </ol>
  );
}

export default CountriesList;
