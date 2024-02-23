import { useState } from 'react';

import ModeRadioGroup from '../components/ModeRadioGroup';
import CountriesSearch from '../components/CountriesSearch';
import SearchTitle from '../components/SearchTitle';
import CountriesPlay from '../components/CountriesPlay';

function CountriesSearchContainer() {
  const [mode, setMode] = useState('search');

  return (
    <>
      <div className="pt-24" />
      <SearchTitle />
      <div className="pt-8" />
      <div className="flex justify-around w-full">
        <ModeRadioGroup checked={mode} onChange={(value) => setMode(value)} />
      </div>
      <div className="pt-8" />
      {mode === 'search' ? <CountriesSearch /> : <CountriesPlay />}
    </>
  );
}

export default CountriesSearchContainer;
