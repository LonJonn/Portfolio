import tw from "twin.macro";
import Hero from "../sections/Hero";
import Projects from "../sections/Projects";

const Home: React.FC = () => {
  return (
    <>
      <Hero />

      <SectionSpacer />

      <Projects />

      {/* About Me */}
    </>
  );
};

//#region Internal Styles

const SectionSpacer = tw.hr`w-1/3 mx-auto my-16 border-t border-gray-200`;

//#endregion

export default Home;
