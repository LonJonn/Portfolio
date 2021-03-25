import tw, { css } from "twin.macro";
import Link from "next/link";
import Header from "../components/layout/Header";

const Hero: React.FC = () => (
  <section tw="relative text-gray-900">
    {/* Background */}
    <div
      tw="absolute top-0 hidden w-full h-full md:(flex flex-col-reverse) lg:flex-row"
      css={{ zIndex: -1 }}
    >
      <div tw="flex-1 h-full"></div>
      <div tw="h-full bg-gradient-to-t from-purple-400 to-red-500 via-pink-500 lg:flex-1"></div>
    </div>

    {/* Content */}
    <Header hasBackground />
    <div tw="prose prose-xl prose-primary container pt-12 md:(py-20 text-white) lg:(py-32 text-current)">
      <div tw="lg:w-2/5">
        <h1>
          <span
            css={[
              tw`-webkit-background-clip[text] -webkit-text-fill-color[transparent]`,
              tw`md:(-webkit-background-clip[unset] -webkit-text-fill-color[unset])`,
            ]}
            tw="text-6xl bg-gradient-to-bl from-purple-400 to-red-500 via-pink-500 md:(text-white bg-none) lg:text-current"
          >
            Hey there!
          </span>{" "}
          👋
        </h1>
        <p>
          I'm{" "}
          <span className="group" tw="relative cursor-pointer">
            <span tw="absolute bottom-full left-1/2 hidden justify-center w-48 py-1 text-base font-bold text-white bg-primary-900 rounded-md transform -translate-x-1/2 -translate-y-1 group-hover:flex">
              Lee-On Sal-See-Cha
            </span>
            <Bold tw="underline">Leon Salsiccia</Bold>
          </span>
          , a passionate developer obsessed with the web! I'm currently studying
          at the University of Technology Sydney pursuing a Bachelor of
          Information Technology.
        </p>
        <p>
          This portfolio was designed and built by myself using some of my
          favourite technologies, including <Bold>TypeScript</Bold>,{" "}
          <Bold>React</Bold>, <Bold>NextJS</Bold> & <Bold>Tailwind CSS</Bold>.
        </p>
        <p>
          Thanks for checking out my website! ❤️
          <br />
          If you're interested to see some of the things I've worked on, please{" "}
          <Link href="#projects">
            <a>check out my projects below!</a>
          </Link>
        </p>
      </div>
    </div>
  </section>
);

const Bold = tw.strong`md:text-white! lg:text-current!`;

export default Hero;
