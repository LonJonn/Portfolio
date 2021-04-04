import tw, { styled, theme } from "twin.macro";

const Card = styled.div(() => [
  tw`p-10 rounded-xl shadow-xl`,
  tw`transform transition-all duration-300`,
  { minHeight: theme`space.40` },
  // Child Styles
  {
    h1: tw`mb-4 text-xl font-extrabold`,
  },
]);

export default Card;
