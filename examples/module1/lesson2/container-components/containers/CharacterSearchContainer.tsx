import { useState } from 'react';
import CharacterList from '../components/CharacterList';
import SearchForm from '../components/SearchForm';
import SearchTitle from '../components/SearchTitle';
import sortCharacters from '../utils/sortCharacters';
import useCharacters from '../hooks/useCharacters';
import TextField from '../components/TextField';
import Select from '../components/Select';
import { genderOptions } from '../const/genderOptions';
import { sortOptions } from '../const/sortOptions';

function CharacterSearchContainer() {
  const { name, setName, gender, setGender, characters } = useCharacters();
  const [sortOption, setSortOption] = useState('');

  const sortedCharacters = sortCharacters(characters, sortOption);

  return (
    <>
      <div className="pt-20" />
      <SearchTitle title={'Wyszukiwarka postaci Pokemon'} />
      <div className="pt-8" />
      <SearchForm>
        <TextField
          label="Name"
          placeholder="Rick Sanchez..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Select
          label="Gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          options={genderOptions}
        />
        <Select
          label="Sort by"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          options={sortOptions}
        />
      </SearchForm>
      <div className="pt-12" />
      <CharacterList characters={sortedCharacters} />
      <div className="pt-16" />
    </>
  );
}

export default CharacterSearchContainer;
