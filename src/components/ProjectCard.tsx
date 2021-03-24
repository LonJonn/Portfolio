import "twin.macro";
import tw, { css, styled } from "twin.macro";

type ProjectCardProps = {
  title: string;
  year: number;
  description: string;
  img: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  year,
  description,
  img,
}) => (
  // Wrap in div to avoid clashing margins
  <div className="group" tw="cursor-pointer">
    <Wrapper>
      <img src={img} css={imageStyles()} />

      {/* Info */}
      <Info>
        <InfoTop>
          <Title>{title}</Title>
          <Year>{year}</Year>
        </InfoTop>

        <Description>{description}</Description>
      </Info>
    </Wrapper>
  </div>
);

//#region Internal Styles

const Wrapper = tw.div`relative flex flex-col mb-10`;

const imageStyles = () => [
  tw`w-full rounded-2xl shadow object-contain`,
  tw`transform translate-y-0.5 transition-all duration-500`,
  // States
  tw`group-hover:(shadow-xl -translate-y-0.5)`,
];

const Info = styled.div(() => [
  tw`absolute w-10/12 p-6 bg-whiteAlpha-600 rounded-md shadow-xl`,
  tw`bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/3`,
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
