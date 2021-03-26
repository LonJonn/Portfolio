import { readdirSync } from "fs";
import path from "path";

export function getImagePaths(project: string): string[] {
  const folderPath = path.join(process.cwd(), "/public/images", project);

  const files = readdirSync(folderPath)
    .filter(f => !f.startsWith("."))
    .sort((a, b) => {
      const [img1] = a.split(".");
      const [img2] = b.split(".");

      return Number(img1) < Number(img2) ? -1 : 1;
    });

  return files.map(f => path.join("/images", project, f));
}
