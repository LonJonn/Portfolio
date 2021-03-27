import tw, { styled } from "twin.macro";

type ButtonProps = { primary?: true };
// prettier-ignore
export default styled.button<ButtonProps>(p => [
  tw`inline-flex items-center justify-center px-5 py-2 text-gray-800 bg-gray-200 rounded-md shadow-sm`,
  tw`transition-all duration-200`,
  tw`hover:shadow-lg active:shadow-inner`,
  p.primary && [
    tw`text-primary-800 bg-primary-200`,
    tw`hover:bg-primary-300`
  ],
])
