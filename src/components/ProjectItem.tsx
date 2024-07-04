import Image from "next/image";
import Link from "next/link";

const ProjectItem = ({
  imageUrl,
  name,
  status,
  tags,
  index,
}: {
  imageUrl: string;
  name: string;
  status: string;
  tags: string[];
  index: number;
}) => {
  return (
    <div className="size-64 shadow-[10px_10px_purple] relative justify-self-center transform transition hover:scale-105">
      <Link href={`/project?id=${index}`} className="">
        <div className="absolute size-64">
          <Image src={imageUrl} fill alt={name} className="object-cover"/>
        </div>
        <div className="size-64 absolute flex justify-end flex-col px-2 py-3">
          <h1 className="text-white font-black text-3xl">{name}</h1>
          <h2 className="text-white font-bold text-xl">
            Status: <span className="font-light">{status}</span>
          </h2>
          <h3>
            Tags:{" "}
            {tags
              .slice(0, 4)
              .reduce(
                (previous, current, index) =>
                  index !== 0
                    ? index === 3
                    ? current + "..."
                    : previous + `, ${current}`
                    : current,
                ""
              )}
          </h3>
        </div>
      </Link>
    </div>
  );
};

export default ProjectItem;
