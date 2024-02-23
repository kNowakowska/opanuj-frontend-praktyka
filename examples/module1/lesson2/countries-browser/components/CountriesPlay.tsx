import { useEffect, useState } from 'react';
import { getRandomCoutry } from '../utils/getRandomCoutry';
import FlagCard from './FlagCard';
import TextField from './TextField';
import Button from './Button';

export function CountriesPlay() {
  const [country, setCountry] = useState<Country | null>(null);
  const [guess, setGuess] = useState('');
  const [result, setResult] = useState('');

  useEffect(() => {
    getRandomCoutry().then((country) => {
      setCountry(country);
    });
  }, []);

  const handleCheck = () => {
    setResult(
      !!country && guess === country.name.common
        ? 'Correct!'
        : `Incorrect :c Correct answer is ${country?.name.common}`
    );
  };

  const handleNext = () => {
    setGuess('');
    setResult('');
    getRandomCoutry().then((country) => {
      setCountry(country);
    });
  };
  return (
    <div className="flex flex-col items-center">
      {country && <FlagCard image={country.flags.png} />}
      <div className="pt-8" />

      <TextField
        label={'Your guess'}
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        placeholder={'Input your guess...'}
      />
      <div className="flex flex-row space-around">
        <Button id={'check-btn'} onClick={handleCheck} className="mr-8">
          Check
        </Button>
        <Button id={'next-btn'} onClick={handleNext}>
          Next
        </Button>
      </div>
      <p>{result}</p>
    </div>
  );
}
export default CountriesPlay;
