"use client";

import React, { useMemo, useState } from "react";
import { modules } from "./lib/modules";
import { ModuleSwitcher } from "./components/ModuleSwitcher";
import { ChapterIsland } from "./components/ChapterIsland";
import Image from "next/image";

export default function ChessModulesPage() {
  const [selectedId, setSelectedId] = useState<string>(modules[0].id);
  const current = useMemo(
    () => modules.find((m) => m.id === selectedId)!,
    [selectedId]
  );

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const chunkArray = <T,>(arr: T[], size: number): T[][] => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
      arr.slice(i * size, i * size + size)
    );
  };

  const chapterGroups = chunkArray(current.chapters, 4);

  return (
    <div className="min-h-screen w-full">
      <div className="px-4 sticky top-4 z-30">
        <header className="rounded-2xl [box-shadow:0px_1.69px_2.21px_0px_#00FFE905,0px_4.06px_5.32px_0px_#00FFE907,0px_7.64px_10.02px_0px_#00FFE909,0px_13.63px_17.87px_0px_#00FFE90B,0px_25.48px_33.42px_0px_#00FFE90D,0px_61px_80px_0px_#00FFE912] border-white/40 bg-white mt-4 ">
          <div className="mx-auto pr-2 pl-4 py-2">
            <div className="flex justify-between gap-6 items-center">
              <div className="leading-none">
                <div className="font-normal text-[#34364C] text-sm tracking-tight opacity-40">
                  Level {current.level}, Module {current.index}
                </div>
                <h1 className="font-semibold text-2xl -tracking-widest text-[#34364C]">
                  {current.name}
                </h1>
              </div>

              <ModuleSwitcher
                modules={modules}
                currentId={selectedId}
                onChange={(id) => setSelectedId(id)}
              />
            </div>
          </div>
        </header>
      </div>

      <main className="relative mx-auto overflow-hidden px-6">
        <div
          aria-hidden
          className="pointer-events-none fixed left-0 top-0 z-10 opacity-50"
        >
          <Image
            src="/images/bg-left.png"
            alt="background left top"
            width={600}
            height={600}
            className=""
            priority
          />
        </div>

        <div
          aria-hidden
          className="pointer-events-none fixed right-0 bottom-0 z-20 opacity-50"
        >
          <Image
            src="/images/bg-right.png"
            alt="background right bottom"
            width={600}
            height={600}
            className=""
            priority
          />
        </div>

        <div
          aria-hidden
          className="pointer-events-none fixed left-[6vw] top-40 z-20 select-none"
        >
          <h1 className="text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#00C7BE] to-[#0097C7]">
            Welcome!
          </h1>
          <p className="mt-2 text-[17px] max-w-md text-[#34364C] opacity-55 w-[150px]">
            Lets study some openings.
          </p>
        </div>

        <div
          aria-hidden
          className="pointer-events-none fixed right-[6vw] bottom-20 z-20 text-right select-none w-[180px]"
        >
          <h2 className="text-[46px] text-left font-semibold text-[#34364C] leading-[46px] tracking-[-3px]">
            Time to practice
          </h2>
          <p className="mt-2 text-left text-[#34364C] opacity-55 w-[149px]">
            Lets play some games
          </p>
        </div>

        {/* Chapters */}
        <section className="max-w-[1200px] w-full mx-auto overflow-hidden">
          {chapterGroups.map((group, groupIndex) => (
            <div
              key={groupIndex}
              className="flex flex-col items-center justify-center gap-5 px-[10px] w-full h-full mt-[50px] relative bg-cover bg-no-repeat timeline-wrapper"
              style={{
                backgroundImage: 'url("/images/chapterIsland-bg.png")',
                backgroundPosition: "center 51px",
              }}
            >
              {group.map((ch, i) => (
                <div key={ch.id} className="timeline-item relative z-10">
                  <ChapterIsland chapter={ch} index={groupIndex * 4 + i + 1} />
                </div>
              ))}
            </div>
          ))}
        </section>
      </main>
      <div
        role="button"
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-white backdrop-blur-lg z-40 flex items-center justify-center shadow-lg cursor-pointer"
        onClick={scrollToTop}
      >
        <Image
          src={"/arrow-top.svg"}
          alt="ground"
          width={24}
          height={24}
          priority
        />
      </div>
    </div>
  );
}