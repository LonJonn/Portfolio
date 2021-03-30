import tw from "twin.macro";
import { InferGetStaticPropsType } from "next";
import Link from "next/link";
import Header from "../components/common/Header";
import Divider from "../components/common/Divider";
import ProjectCard from "../components/project/ProjectCard";
import { getAllWriteups } from "../utils/project-writeup-helpers";

export async function getStaticProps() {
  const projects = await getAllWriteups();

  return {
    props: {
      projects,
    },
  };
}

const Home: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
  projects,
}) => {
  return (
    <>
      {/* Hero */}
      <section tw="relative min-h-screen text-gray-900">
        {/* Background */}
        <div
          tw="absolute top-0 hidden w-full h-full md:(flex flex-col-reverse) lg:flex-row"
          cs="zIndex[-1]"
        >
          <div tw="flex-1 h-full"></div>
          <div tw="h-full bg-gradient-to-t from-purple-400 to-red-500 via-pink-500 lg:flex-1"></div>
        </div>

        {/* Content */}
        <Header hasBackground />
        <div tw="container pt-12 md:(py-20 text-white) lg:(py-32 text-current)">
          <div tw="lg:w-2/5" css={{ p: tw`py-2 text-xl lg:py-4` }}>
            <h1 tw="mb-6 text-6xl font-extrabold tracking-wide lg:mb-8">
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
                  Lee•On Sal•See•Cha
                </span>
                <strong tw="border-b-2 border-dashed border-current">
                  Leon Salsiccia
                </strong>
              </span>
              , a passionate developer obsessed with the web! I'm currently
              studying at the University of Technology Sydney pursuing a
              Bachelor of Information Technology.
            </p>
            <p>
              This portfolio was designed and built by myself using some of my
              favourite technologies, including <strong>TypeScript</strong>,{" "}
              <strong>React</strong>, <strong>NextJS</strong> &{" "}
              <strong>Tailwind CSS</strong>. All icons used are from{" "}
              <strong>HeroIcons</strong>.
            </p>
            <p>
              Thanks for checking out my website! ❤️
              <br />
              If you're interested to see some of the things I've worked on,
              please{" "}
              <Link href="#projects" passHref>
                <a tw="underline font-semibold text-primary-600 md:text-white lg:text-primary-600">
                  check out my projects below!
                </a>
              </Link>
            </p>
          </div>
        </div>
      </section>

      <Divider />

      {/* About Me */}
      <section
        tw="mx-auto px-4 text-gray-900"
        css={{ maxWidth: "65ch", p: tw`my-4 text-lg` }}
      >
        <h2 tw="mb-6 text-center text-5xl font-extrabold tracking-tight lg:mb-8">
          About Me
        </h2>
        <p>
          I recently became a Co-Founder and Director of Sponsorships &
          Partnerships within the UTS Cloud Computing Society 🥳🎉. This is the
          first time I've taken on a leadership role of this scale which is
          quite scary 😬, but also really exciting 🤩
        </p>
        <p>
          We have an amazing group and I'm certain the society will go far! I'm
          grateful I can be apart of this and it's something that will
          undoubtably help me grow!
        </p>
      </section>

      <Divider id="projects" />

      {/* Projects */}
      <section tw="container text-gray-900">
        <h2 tw="mb-10 text-center text-5xl font-extrabold tracking-tight lg:mb-16">
          Projects
        </h2>

        <div tw="flex flex-col flex-wrap gap-y-16 justify-around md:mx-12 lg:(flex-row mx-0)">
          {Object.values(projects).map(project => (
            <ProjectCard
              slug={project.slug}
              {...project.data}
              key={project.slug}
            />
          ))}
        </div>

        <p tw="w-4/5 mt-16 mx-auto text-center">
          That's <em tw="font-semibold">not</em> all folks!
          <br />
          If you want to see what else I've worked (or am working on) make sure
          to drop by my Github 😊
        </p>
      </section>
    </>
  );
};

export default Home;
