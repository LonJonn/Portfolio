import Link from "next/link";
import tw from "twin.macro";
import ProjectCard from "../components/ProjectCard";

const Home: React.FC = () => {
  return (
    <>
      {/* Background */}
      <Background css={{ zIndex: -1 }}>
        <div tw="flex-1 h-full"></div>
        <div tw="flex-1 h-full bg-gradient-to-t from-purple-400 to-red-500 via-pink-500"></div>
      </Background>

      <div tw="container mt-8 text-gray-900">
        {/* Hero */}
        <section tw="prose prose-xl prose-primary md:w-2/5">
          <h1>
            <span
              cs="WebkitBackgroundClip[text] WebkitTextFillColor[transparent]"
              tw="text-6xl bg-gradient-to-bl from-purple-400 to-red-500 via-pink-500 md:(from-gray-900 to-gray-900)"
            >
              Hey there!
            </span>{" "}
            👋
          </h1>
          <p>
            I'm{" "}
            <span className="group" tw="relative">
              <span tw="absolute bottom-full left-1/2 hidden justify-center w-36 py-1 text-base font-bold text-white bg-primary-900 rounded-md transform -translate-x-1/2 -translate-y-1 group-hover:flex">
                Sal - See - Cha
              </span>
              <strong tw="underline">Leon Salsiccia</strong>
            </span>
            , a passionate developer obsessed with the web! I'm currently
            studying at the University of Technology Sydney pursuing a Bachelor
            of Information Technology.
          </p>
          <p>
            This portfolio was designed and built by myself using some of my
            favourite technologies, including <strong>TypeScript</strong>,{" "}
            <strong>React</strong>, <strong>NextJS</strong> &{" "}
            <strong>Tailwind CSS</strong>.
          </p>
          <p>
            Thanks for checking out my website ❤️! If you're interested to see
            some of the things I've worked on, please{" "}
            <Link href="#projects">
              <a>check out my projects below!</a>
            </Link>
          </p>
        </section>

        <hr tw="w-1/3 mx-auto my-16 border-t border-gray-200" />

        {/* Projects */}
        <section>
          <h2
            id="projects"
            tw="mb-10 text-center text-5xl font-extrabold tracking-tight"
          >
            Projects
          </h2>

          <div tw="flex flex-col gap-y-12">
            <ProjectCard
              title="Pinky Promise"
              description="Website to track your promises for you"
              year={2020}
              img="/images/pinki/2.png"
            />
            <ProjectCard
              title="Level Up"
              description="Figma Prototype for an OHS upskilling app"
              year={2020}
              img="/images/levelup/1.png"
            />
            <ProjectCard
              title="IoT Bay"
              description="E-Commerce Store for Internet of Things related decives"
              year={2019}
              img="/images/iotbay/2.png"
            />
            <ProjectCard
              title="Element Education"
              description="A wordpress site for a private tutoring service"
              year={2021}
              img="/images/elementeducation/2.png"
            />
            <ProjectCard
              title="Byte Sized"
              description="Cookie clicker game in your browser!"
              year={2018}
              img="/images/bytesized/2.png"
            />
            <ProjectCard
              title="The Sausage Box"
              description="A local movie server for my family 🙂"
              year={2018}
              img="/images/thesausagebox/1.png"
            />
            <ProjectCard
              title="Venntiboard"
              description="An internal project tracker I built for a previous company"
              year={2021}
              img="/images/venntiboard/3.png"
            />
          </div>

          <p tw="w-4/5 mt-10 mx-auto text-center">
            That's <em tw="font-semibold">not</em> all folks!
            <br />
            If you want to see what else I've worked (or am working on) make
            sure to drop by my Github 😊
          </p>
        </section>

        {/* About Me */}
        {/* <section tw="prose prose-xl prose-primary"></section> */}
      </div>
    </>
  );
};

//#region Internal Styles

const Background = tw.div`
  absolute top-0 hidden w-full h-full
  flex-col-reverse

  md:flex 
  lg:flex-row
`;

//#endregion

export default Home;
