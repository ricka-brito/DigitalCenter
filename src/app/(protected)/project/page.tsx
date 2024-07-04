"use client";

import { PROJECTS } from "@/PROJECTS";
import Button from "@/components/Button";
import PeopleCard from "@/components/PeopleCard";
import Tags from "@/components/Tags";
import Image from "next/image";
import Link from "next/link";
import { notFound, useRouter } from "next/navigation";

const Page = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const id = parseInt((searchParams["id"] ?? "-1") as string) as number;

  const project = PROJECTS[id];

  const router = useRouter();

  if (project) {
    return (
      <>
      <main>
        <header className="w-full bg-purple h-10 pl-4 flex items-center" ><Link href="/" className="font-bold">DIGITAL CENTER</Link></header>
        <section className="flex lg:px-20 lg:flex-row flex-col lg:mt-10 justify-center">
          <div className="relative lg:order-2 flex-1 aspect-video lg:flex-1 lg:h-[110vh] lg:ml-8 lg:max-w-[50vw] mb-10">
            <Image
              src={project.imagesUrl[0]}
              fill
              alt={project.name}
              className="object-cover"
            />
          </div>
          <article className="text-black lg:w-[500px] xl:w-[700px] mt-10 lg:mt-0 px-10">
            <h1 className="font-black text-purple text-7xl">{project.name}</h1>
            <h2 className="font-semibold text-xl mt-2">
              Status: <span className="font-light">{project.status}</span>
            </h2>
            <hr className="border-t-black my-3" />
            <p className="font-light">{project.description}</p>
            <Tags taglist={project.tags} />
            <Button
              onClick={() => router.push(project.link ?? "")}
              className="mt-3"
              disabled={!project.link}
            >
              {project.link ? "Press to open" : "In development"}
            </Button>
            <div className="mt-10 grid xl:grid-cols-2 gap-10 sm:grid-cols-2 md:grid-cols-1 mb-10">
          {project.participants.map((c) => (
            <PeopleCard key={c.name} imageURL={c.photo} name={c.name} role={c.role} />
          ))}
        </div>
          </article>
        </section>
        
      </main>
      <footer className="w-full h-10 bg-purple"/>
      </>
    );
  } else {
    return notFound();
  }
};

export default Page;
