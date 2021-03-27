import "twin.macro";
import Link from "next/link";
import tw, { css, styled } from "twin.macro";
import type { ProjectMetadata } from "../../types";

const ProjectCard: React.FC<ProjectMetadata & { slug: string }> = ({
  slug,
  title,
  year,
  description,
  cover_image,
}) => (
  // Wrap in div to avoid clashing margins
  <Link href={`/project/${slug}`} passHref>
    <a className="group" tw="lg:w-5/12">
      <Wrapper>
        <div tw="lg:(aspect-w-16 aspect-h-9)">
          <img src={`/images/${slug}/${cover_image}`} css={imageStyles()} />
        </div>

        {/* Info */}
        <Info>
          <InfoTop>
            <Title>{title}</Title>
            <Year>{year}</Year>
          </InfoTop>

          <Description>{description}</Description>
        </Info>
      </Wrapper>
    </a>
  </Link>
);

//#region Internal Styles

const Wrapper = tw.div`relative flex flex-col mb-10`;

const imageStyles = () => [
  tw`rounded-2xl shadow object-cover`,
  tw`transform translate-y-0.5 transition-all duration-500`,
  // States
  tw`group-hover:(shadow-xl -translate-y-0.5)`,
];

const Info = styled.div(() => [
  tw`w-10/12 p-6 bg-whiteAlpha-600 rounded-md shadow-xl`,
  tw`absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/3`,
  // Custom
  css`
    backdrop-filter: blur(20px);
  `,
]);

const InfoTop = tw.div`flex items-center`;

const Title = tw.h2`mr-auto text-2xl font-bold`;

const Year = tw.h3`text-blue-600 text-lg font-bold`;

const Description = tw.p`text-gray-600`;

//#endregion

export default ProjectCard;
