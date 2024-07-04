"use client";
import ProjectFrame from "@/components/ProjectFrame";
import ProjectItem from "@/components/ProjectItem";
import SearchBar from "@/components/SearchBar";
import Tags from "@/components/Tags";
import { cp } from "fs";
import Image from "next/image";
import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { PROJECTS } from "@/PROJECTS";
import { useMsal } from "@azure/msal-react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [search, setSearch] = useState<string>("");

  const searchPrepared = search.toLowerCase();

  const filteredProducts = PROJECTS.filter(
    (e) =>
      e.name.toLowerCase().includes(searchPrepared) ||
      e.tags.some((c) => c.toLowerCase().includes(searchPrepared)) ||
      e.status.toLowerCase().includes(searchPrepared)
  );

  const { accounts } = useMsal();
  const user = accounts[0];

  const router = useRouter();

  useEffect(() => {
    if (user) {
        router.push("/")
    } else {
        router.push("/login") 
    }
  }, [user]);

  return (
    <main>
      <header className="w-full bg-purple flex items-center flex-col relative">
        <div className="sm:w-[500px] md:w-[630px] xs:w-[300px] my-10">
          <h1 className="font-bold md:text-7xl sm:text-6xl text-5xl">
            HI, WE ARE
            <br />
            <TypeAnimation
              preRenderFirstString={true}
              sequence={[
                "M/PPS-LA x ETS",
                5000,
                "DIGITAL CENTER",
                5000,
                "DEV",
                5000,
                "FUTURE",
                5000,
              ]}
              wrapper="span"
              speed={50}
              className="font-sans font-bold"
              repeat={Infinity}
            />
          </h1>

          <h3 className="my-6 font-normal text-xl">
            Search for whatever you want.
          </h3>

          <SearchBar value={search} onChange={setSearch} />
          <Tags
            taglist={["bot", "power-automate", "rpp", "planejamentos"]}
            onClick={(tag) => setSearch(search + tag)}
          />
        </div>
        <div className="w-52 h-12 absolute bottom-2 right-8 lg:block hidden">
          <Image
            src="/img/logo-branco.svg"
            fill
            alt="pps logo"
            loading="eager"
          />
        </div>
      </header>
      <section className="px-10 mt-8">
        <h3 className="text-black font-medium py-4">Project gallery</h3>
        <hr className="border-t-black" />
        <ProjectFrame projects={filteredProducts} />
      </section>
    </main>
  );
}
