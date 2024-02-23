export function getAllCountries() {
  return fetch(`https://restcountries.com/v3.1/all`)
    .then((response) => response.json())
    .then((data) => (data && Array.isArray(data) ? data : []))
    .catch((error) => {
      console.error('Error fetching data:', error);
      return [];
    });
}

export default getAllCountries;
