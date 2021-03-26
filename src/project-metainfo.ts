import { ProjectMeta } from "./types";

export const projects: { [id: string]: ProjectMeta } = {
  pinki: {
    id: "pinki",
    title: "Pinki",
    description: "Webapp to track your 'pinki' promises",
    year: 2020,
    tags: [
      "Fullstack",
      "NextJS",
      "TypeScript",
      "MongoDB",
      "Firebase",
      "Caching",
    ],
    coverImage: "2.png",
  },
  "level-up": {
    id: "level-up",
    title: "Level Up",
    description: "Figma Prototype for an OHS upskilling app",
    year: 2020,
    tags: ["Figma", "Custom Design", "Mobile", "Interactive Prototype"],
    coverImage: "1.png",
  },
  "iot-bay": {
    id: "iot-bay",
    title: "IoT Bay",
    description: "E-Commerce Store for Internet of Things related decives",
    year: 2020,
    tags: ["Fullstack", "JavaBeans Servlets", "MVC", "SQL", "Bootstrap"],
    coverImage: "2.png",
  },
  "element-education": {
    id: "element-education",
    title: "Element Education",
    description: "WordPress site for a private tutoring service",
    year: 2021,
    tags: ["WordPress", "Email Notifications", "HTML", "CSS"],
    coverImage: "2.png",
  },
  "byte-sized": {
    id: "byte-sized",
    title: "Byte Sized",
    description: "Cookie clicker game in your browser!",
    year: 2018,
    tags: ["Vanilla JS", "HTML", "CSS", "JQuery"],
    coverImage: "2.png",
  },
  "the-sausage-box": {
    id: "the-sausage-box",
    title: "The Sausage Box",
    description: "Local movie server for my family 🙂",
    year: 2018,
    tags: [
      "Fullstack",
      "VueJS",
      "ExpressJS",
      "WebSockets",
      "BulmaCSS",
      "Raspberry Pi",
    ],
    coverImage: "1.png",
  },
  venntiboard: {
    id: "venntiboard",
    title: "Venntiboard",
    description: "Internal project tracker I built for a previous company",
    year: 2021,
    tags: [
      "Firebase",
      "NoSQL Realtime DB",
      "Serverless",
      "VueJS",
      "TypeScript",
      "TailwindCSS",
    ],
    coverImage: "3.png",
  },
};
