import Image from "next/image";

const PeopleCard = ({
  imageURL,
  name,
  role,
}: {
  imageURL: string;
  name: string;
  role: string;
}) => {
  return (
    <div className="flex">
      <div className="relative size-12 rounded-full overflow-hidden aspect-square">
        <Image src={imageURL} fill alt={name} />
      </div>
      <div className="text-black ml-3">
        <h1 className="font-bold text-sm">{name}</h1>
        <h2 className="text-xs">{role}</h2>
      </div>
    </div>
  );
};

export default PeopleCard;
