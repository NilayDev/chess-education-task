import { Chapter } from "../types/chess";
import { ProgressRing } from "./ProgressRing";
import Image from "next/image";

type ChapterIslandProps = {
  chapter: Chapter;
  index: number;
};

export const ChapterIsland = ({ chapter, index }: ChapterIslandProps) => {
  return (
    <div className="relative">
      <div className="absolute inset-0 -z-10 rounded-full" />

      <div className="relative flex h-44 w-44 items-center justify-center rounded-full bg-white overflow-hidden">
        <Image
          src={chapter.image}
          alt={`Chapter ${index}`}
          fill
          className="object-cover rounded-full"
        />

        {chapter.progressPercentage > 0 && (
          <div className="absolute inset-0 z-20">
            <ProgressRing progress={chapter.progressPercentage} />
          </div>
        )}
      </div>
    </div>
  );
};

