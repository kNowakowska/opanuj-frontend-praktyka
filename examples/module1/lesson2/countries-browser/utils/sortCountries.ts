export function sortCountries(countries: Country[], sortOption: string) {
  return countries.sort((a, b) => {
    if (sortOption === 'population') {
      return a.population - b.population;
    }
    return a.name.common.localeCompare(b.name.common);
  });
}
