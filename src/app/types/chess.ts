export type Chapter = {
  id: string;
  image: string;
  progressPercentage: number;
};

export type Module = {
  id: string;
  index: number;
  level: number;
  name: string;
  chapters: Chapter[];
};

export type Modules = Module[];
