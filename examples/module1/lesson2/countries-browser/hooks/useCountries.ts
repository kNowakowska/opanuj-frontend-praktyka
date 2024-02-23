import { useEffect, useState } from 'react';
import { getCountriesByFilter } from '../utils/getCountriesByFilter';

export function useCountries(filterOption: string, filterValue: string) {
  const [countries, setCountries] = useState<Country[]>([]);
  useEffect(() => {
    getCountriesByFilter(filterOption, filterValue, (countries) => {
      setCountries(countries);
    });
  }, [filterOption, filterValue]);

  return {
    countries,
  };
}
