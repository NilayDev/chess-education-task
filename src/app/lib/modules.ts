import { Module } from "../types/chess";

export const modules: Module[] = [
  {
    id: "abcde",
    index: 4,
    level: 2,
    name: "Counterattack",
    chapters: [
      { id: "bcd", image: "/image1.svg", progressPercentage: 76 },
      { id: "bce", image: "/image2.svg", progressPercentage: 45 },
      { id: "bcf", image: "/image3.svg", progressPercentage: 45 },
    ],
  },
  {
    id: "fghij",
    index: 5,
    level: 3,
    name: "Endgame Mastery",
    chapters: [
      { id: "efg", image: "/image1.svg", progressPercentage: 20 },
      { id: "efh", image: "/image2.svg", progressPercentage: 0 },
    ],
  },
  {
    id: "klmno",
    index: 6,
    level: 1,
    name: "Opening Principles",
    chapters: [
      { id: "klm", image: "/image1.svg", progressPercentage: 90 },
      { id: "kln", image: "/image2.svg", progressPercentage: 10 },
      { id: "klo", image: "/image2.svg", progressPercentage: 30 },
      { id: "klp", image: "/image2.svg", progressPercentage: 60 },
    ],
  },
  {
    id: "pqrst",
    index: 7,
    level: 2,
    name: "Tactical Motifs",
    chapters: [
      { id: "pqr", image: "/image1.svg", progressPercentage: 55 },
      { id: "pqs", image: "/image2.svg", progressPercentage: 80 },
      { id: "pqt", image: " /image3.svg", progressPercentage: 33 },
      { id: "pqu", image: "/image4.svg", progressPercentage: 23 },
      { id: "pqv", image: "/image1.svg", progressPercentage: 56 },
      { id: "pqw", image: "/image2.svg", progressPercentage: 48 },
      { id: "pqx", image: "/image3.svg", progressPercentage: 58 },
      { id: "pqy", image: "/image4.svg", progressPercentage: 26 },
      { id: "pqz", image: "/image1.svg", progressPercentage: 22 },
      { id: "pqa", image: "/image2.svg", progressPercentage: 39},
    ],
  },
];
