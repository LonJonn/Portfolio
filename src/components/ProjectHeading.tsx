import "twin.macro";
import { ProjectMeta } from "../types";

const ProjectHeading: React.FC<ProjectMeta> = ({
  title,
  description,
  year,
  tags,
}) => (
  <div tw="flex flex-col gap-y-6 text-center">
    <h1
      cs="WebkitBackgroundClip[text] WebkitTextFillColor[transparent]"
      tw="mx-auto text-4xl text-6xl font-extrabold bg-gradient-to-tr from-orange-400 to-red-500 via-pink-500 md:text-5xl"
    >
      {title}
    </h1>

    <p tw="text-xl text-gray-500">{`${description} • ${year}`}</p>

    <div tw="flex flex-wrap gap-y-4 justify-center max-w-md mx-auto text-sm">
      {tags.map(tag => (
        <span
          tw="mx-2 px-5 py-1 text-primary-700 bg-primary-200 border border-primary-700 rounded-full"
          key={tag}
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
);

export default ProjectHeading;
