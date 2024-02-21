import { PropsWithChildren } from 'react';

function SearchForm({ children }: PropsWithChildren) {
  return (
    <form className="space-x-4 flex items-end justify-center">{children}</form>
  );
}

export default SearchForm;
