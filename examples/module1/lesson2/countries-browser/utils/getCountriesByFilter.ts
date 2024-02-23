export function getCountriesByFilter(
  filterOption: string,
  filterValue: string,
  setter: (countries: Country[]) => void
) {
  if (filterOption && filterValue)
    return fetch(
      `https://restcountries.com/v3.1/${filterOption}/${filterValue}`
    )
      .then((response) => response.json())
      .then((data) => setter(data && Array.isArray(data) ? data : []))
      .catch((error) => {
        console.error('Error fetching data:', error);
        setter([]);
      });
  setter([]);
}
