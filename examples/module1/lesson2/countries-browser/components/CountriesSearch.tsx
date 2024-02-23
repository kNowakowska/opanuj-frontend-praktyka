import FilterSelect from '../components/FilterSelect';
import FilterField from '../components/FilterField';
import CountriesList from '../components/CountiresList';
import SortSelect from '../components/SortSelect';
import { sortCountries } from '../utils/sortCountries';
import { useCountries } from '../hooks/useCountries';
import { useState } from 'react';

export function CountriesSearch() {
  const [filterOption, setFilterOption] = useState('');
  const [filterValue, setFilterValue] = useState('');
  const [sortOption, setSortOption] = useState('');
  const { countries } = useCountries(filterOption, filterValue);
  const sortedCountries = sortCountries(countries, sortOption);
  return (
    <>
      <form className="space-x-4 flex items-end justify-center">
        <br />
        <>
          <FilterSelect
            value={filterOption}
            onChange={(e) => setFilterOption(e.target.value)}
          />
          <FilterField
            value={filterValue}
            onChange={(e) => setFilterValue(e.target.value)}
          />
          <SortSelect
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          />
        </>
      </form>
      <div className="pt-12" />
      <CountriesList countries={sortedCountries} />
      <div className="pt-16" />
    </>
  );
}

export default CountriesSearch;
