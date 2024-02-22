interface CountryCardProps {
  name:string;
  image: string;
}

export function CountryCard({  name, image }: CountryCardProps) {
  return (
    <li key={name} className="flex flex-col items-center">
      <h3>{name}</h3>
      <img src={image} alt={name} />
    </li>
  );
}

export default CountryCard;
