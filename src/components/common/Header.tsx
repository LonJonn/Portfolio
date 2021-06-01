import NextLink from "next/link";
import Button from "./Button";
import tw, { css, styled } from "twin.macro";

type HeaderProps = { hasBackground?: boolean };
const Header: React.FC<HeaderProps> = ({ hasBackground }) => (
  <Wrapper id="top" className={hasBackground && "background"}>
    <NextLink href="/" passHref>
      <Logo>LS</Logo>
    </NextLink>

    <Nav>
      <NextLink href="/#projects" passHref>
        <NavLink>Projects</NavLink>
      </NextLink>
      <NextLink href="/resume-one-page.pdf" passHref>
        <NavLink target="_blank">Resume</NavLink>
      </NextLink>
      <NavLink href="https://github.com/LonJonn" target="_blank">
        GitHub
      </NavLink>
      <NavLink href="https://www.linkedin.com/in/leon-salsiccia/" target="_blank">
        LinkedIn
      </NavLink>
    </Nav>

    <ContactButton as="a" href="mailto:leon.salsiccia@gmail.com">
      <p>Contact Me</p>
      {ContactIcon}
    </ContactButton>
  </Wrapper>
);
//#region Internal Styles

const Wrapper = tw.header`
  container flex z-50
  flex-wrap flex-col items-center
  py-5

  md:flex-row 
`;

const Logo = tw.a`
  flex 
  items-center 
  mb-4 p-4
  bg-gray-900 text-white text-3xl font-serif
  font-semibold

  md:(mb-0 mr-auto)
`;

const Nav = styled.nav(() => [
  tw`flex flex-wrap gap-x-4 items-center justify-center mr-0 text-gray-700`,
  // Breakpoints
  tw`md:mr-4`,
  tw`xl:(gap-x-8 mr-8)`,
  // Variants
  css`
    .background & {
      ${tw`md:text-whiteAlpha-700`}
    }
  `,
]);

const NavLink = tw.a`hover:underline`;

const ContactButton = styled(Button)(() => [
  tw`mt-4 text-primary-700 bg-primary-100 hover:bg-primary-200`,
  tw`md:mt-0`,
  // Variants
  css`
    .background & {
      ${tw`md:(text-white bg-whiteAlpha-200 hover:bg-whiteAlpha-300)`}
    }
  `,
]);

const ContactIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    tw="w-5 h-5 ml-2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.75}
      d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
    />
  </svg>
);

//#endregion

export default Header;
