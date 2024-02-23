interface FlagCardProps {
  image: string;
}

export function FlagCard({ image }: FlagCardProps) {
  return (
    <div>
      <img src={image} alt={''} className="self-center" />
    </div>
  );
}

export default FlagCard;
