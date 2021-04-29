import fs from "fs";
import path from "path";
import graymatter from "gray-matter";
import sizeOf from "image-size";
import type { ImageType, ProjectMetadata } from "../types";

const writeupsDirectory = path.join(process.cwd(), "src/_writeups");
const projectOrder = [
  "pinki",
  "level-up",
  "iot-bay",
  "venntiboard",
  "the-sausage-box",
  "element-education",
  "byte-sized",
  "portfolio",
];

export function getWriteupBySlug(slug) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = path.join(writeupsDirectory, `${realSlug}.md`);
  const { content, data } = graymatter.read(fullPath);

  return {
    slug: realSlug,
    content,
    data: data as ProjectMetadata,
  };
}

export function getAllWriteups() {
  const slugs = fs.readdirSync(writeupsDirectory);
  return slugs
    .map(getWriteupBySlug)
    .sort((a, b) =>
      projectOrder.indexOf(a.slug) < projectOrder.indexOf(b.slug) ? -1 : 1,
    );
}

export function getProjectImages(project: string): ImageType[] {
  const folderPath = path.join(process.cwd(), "/public/images", project);

  const files = fs
    .readdirSync(folderPath)
    .filter(f => !f.startsWith("."))
    .sort(function sortFileByName(a, b) {
      const [img1] = a.split(".");
      const [img2] = b.split(".");

      return Number(img1) < Number(img2) ? -1 : 1;
    });

  return files.map(function getImageMetadata(image): ImageType {
    const imagePath = path.join("/images", project, image);
    const imageDimensions = sizeOf(path.join(folderPath, image));

    return {
      src: imagePath,
      width: imageDimensions.width,
      height: imageDimensions.height,
    };
  });
}
