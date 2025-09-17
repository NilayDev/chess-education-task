import { Module } from "../types/chess";

export const modules: Module[] = [
  {
    id: "abcde",
    index: 4,
    level: 2,
    name: "Counterattack",
    chapters: [
      { id: "bcd", image: "/images/image1.png", progressPercentage: 76 },
      { id: "bce", image: "/images/image2.png", progressPercentage: 45 },
      { id: "bcf", image: "/images/image3.png", progressPercentage: 100 },
    ]
  },
  {
    id: "fghij",
    index: 5,
    level: 3,
    name: "Endgame Mastery",
    chapters: [
      { id: "efg", image: "/images/image1.png", progressPercentage: 20 },
      { id: "efh", image: "/images/image2.png", progressPercentage: 0 },
      { id: "efi", image: "/images/image3.png", progressPercentage: 60 },
    ]
  },
  {
    id: "klmno",
    index: 6,
    level: 1,
    name: "Opening Principles",
    chapters: [
      { id: "klm", image: "/images/image1.png", progressPercentage: 90 },
      { id: "kln", image: "/images/image2.png", progressPercentage: 10 },
    ]
  },
  {
    id: "pqrst",
    index: 7,
    level: 2,
    name: "Tactical Motifs",
    chapters: [
      { id: "pqr", image: "/images/image1.png", progressPercentage: 55 },
      { id: "pqs", image: "/images/image2.png", progressPercentage: 80 },
      { id: "pqt", image: "/images/image3.png", progressPercentage: 33 },
      { id: "pqu", image: "/images/image4.png", progressPercentage: 0 },
    ],
  },
];
