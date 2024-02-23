import getAllCountries from './getAllCountries';

export function getRandomCoutry() {
  return getAllCountries().then((countries) => {
    const randomIndex = Math.floor(Math.random() * countries.length);
    return countries[randomIndex];
  });
}
