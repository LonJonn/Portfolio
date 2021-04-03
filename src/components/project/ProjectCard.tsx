import tw, { styled } from "twin.macro";
import Link from "next/link";
import type { ProjectMetadata } from "../../types";

const ProjectCard: React.FC<ProjectMetadata & { slug: string }> = ({
  slug,
  title,
  year,
  description,
  cover_image,
}) => (
  <Link href={`/project/${slug}`} passHref>
    <a className="group" tw="relative flex mb-10 lg:(w-5/12 max-h-72)">
      <Image
        src={`/images/${slug}/${cover_image}`}
        alt={`${slug} cover image`}
      />

      <Info>
        <div tw="flex items-center justify-between font-bold">
          <h2 tw="text-2xl">{title}</h2>
          <h3 tw="text-lg text-blue-600">{year}</h3>
        </div>

        <p tw="text-gray-600">{description}</p>
      </Info>
    </a>
  </Link>
);

//#region Internal Styles

const Image = styled.img(() => [
  tw`w-full h-full rounded-2xl shadow object-cover`,
  tw`transform transition-all duration-500`,
  tw`group-hover:(shadow-xl -translate-y-1)`,
]);

const Info = styled.div(() => [
  tw`w-10/12 p-6 bg-whiteAlpha-600 rounded-md shadow-xl`,
  tw`absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/3`,
  { backdropFilter: "blur(20px)" },
]);

//#endregion

export default ProjectCard;
