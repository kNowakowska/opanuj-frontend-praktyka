interface SearchTitleProps {
  title?: string;
}

function SearchTitle({ title = 'Wyszukiwarka krajów' }: SearchTitleProps) {
  return <h1 className="text-2xl">{title}</h1>;
}

export default SearchTitle;
