import tw from "twin.macro";
import NextLink from "next/link";
import NextImage from "next/image";
import type { ProjectMetadata } from "../../types";

const ProjectCard: React.FC<ProjectMetadata & { slug: string }> = ({
  slug,
  title,
  year,
  description,
  cover_image,
}) => (
  <NextLink href={`/project/${slug}`} passHref>
    <a
      className="group"
      tw="relative h-60 mb-10 sm:h-80 lg:h-64"
      // NextImage wraps in a div, but I want shadows >:( so overwrite styles
      css={{ "& > div:first-child": tw`overflow-visible!` }}
    >
      <NextImage
        layout="fill"
        objectFit="cover"
        loading="eager"
        src={`/images/${slug}/${cover_image}`}
        alt={`${slug} cover image`}
        css={[
          tw`rounded-2xl shadow`,
          tw`transform transition-all duration-500`,
          tw`group-hover:(shadow-xl -translate-y-1)`,
        ]}
      />

      {/* Card Info */}
      <div
        css={[
          tw`w-10/12 p-6 bg-whiteAlpha-600 rounded-md shadow-xl`,
          tw`absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/3`,
          tw`backdrop-filter backdrop-blur-md`,
        ]}
      >
        <div tw="flex items-center justify-between font-bold">
          <h2 tw="text-2xl">{title}</h2>
          <h3 tw="text-lg text-blue-600">{year}</h3>
        </div>

        <p tw="text-gray-600">{description}</p>
      </div>
    </a>
  </NextLink>
);

export default ProjectCard;
