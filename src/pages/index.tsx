import tw from "twin.macro";
import Hero from "../sections/Hero";
import Projects from "../sections/Projects";

const Home: React.FC = () => {
  return (
    <>
      {/* Background */}
      <HeroBackground css={{ zIndex: -1 }}>
        <div tw="flex-1 h-full"></div>
        <div tw="flex-1 h-full bg-gradient-to-t from-purple-400 to-red-500 via-pink-500"></div>
      </HeroBackground>

      <div tw="container mt-8 text-gray-900">
        <Hero />

        <SectionSpacer />

        <Projects />

        {/* About Me */}
      </div>
    </>
  );
};

//#region Internal Styles

const SectionSpacer = tw.hr`w-1/3 mx-auto my-16 border-t border-gray-200`;

const HeroBackground = tw.div`
  absolute top-0 hidden w-full h-full
  flex-col-reverse

  md:flex 
  lg:flex-row
`;

//#endregion

export default Home;
