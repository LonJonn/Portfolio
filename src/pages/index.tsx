import tw from "twin.macro";
import { InferGetStaticPropsType } from "next";
import NextLink from "next/link";
import Header from "../components/common/Header";
import Divider from "../components/common/Divider";
import ProjectCard from "../components/project/ProjectCard";
import { getAllWriteups } from "../utils/project-writeup-helpers";
import Card from "../components/Card";

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
      <section tw="relative md:min-h-screen">
        {/* Background */}
        <div
          tw="absolute top-0 hidden w-full h-full md:(flex flex-col-reverse) lg:flex-row"
          css={{ zIndex: -1 }}
        >
          <div tw="flex-1 h-full"></div>
          <div tw="h-full bg-gradient-to-t from-purple-400 to-red-500 via-pink-500 lg:flex-1"></div>
        </div>

        <Header hasBackground />

        {/* Content */}
        <div tw="container pt-12 md:(py-20 text-white) lg:(py-32 text-current)">
          <div tw="lg:w-2/5" css={{ p: tw`py-2 text-xl lg:py-4` }}>
            <h1 tw="mb-6 text-5xl font-extrabold tracking-wide md:text-6xl lg:mb-8">
              <span
                tw="bg-gradient-to-bl from-purple-400 to-red-500 via-pink-500 md:(text-white bg-none) lg:text-current"
                css={[
                  tw`-webkit-background-clip[text] -webkit-text-fill-color[transparent]`,
                  tw`md:(-webkit-background-clip[unset] -webkit-text-fill-color[unset])`,
                ]}
              >
                Hey there!
              </span>{" "}
              👋
            </h1>
            <p>
              I'm <Name pronunciation="Lee•On Sal•See•Cha">Leon Salsiccia</Name>
              , a passionate developer obsessed with the web! I'm a Co-op
              scholar studying at the University of Technology Sydney pursuing a
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
              <NextLink href="#projects" passHref>
                <a tw="underline font-semibold text-primary-600 md:text-white lg:text-primary-600">
                  check out my projects below!
                </a>
              </NextLink>
            </p>
          </div>
        </div>
      </section>

      <Divider />

      {/* Extra-Curricular */}
      <section tw="container flex flex-col gap-y-12 items-center">
        <h2 tw="text-center text-5xl font-extrabold tracking-tight">
          Extra-Curricular
        </h2>

        <div
          className="group"
          tw="grid gap-x-12 gap-y-6 max-w-xl text-white lg:(grid-cols-3 max-w-6xl py-6)"
        >
          <Card tw="bg-gradient-to-br from-pink-500 to-rose-500 lg:(translate-x-8 group-hover:translate-x-0)">
            <h1>BIT Ambassador</h1>
            <p>
              Visited schools to promote the BIT Co-Op Scholar Program and
              encourage students to pursue a career in info tech.
            </p>
          </Card>

          <NextLink
            href="https://www.linkedin.com/company/uts-cloud-society"
            passHref
          >
            <Card
              as="a"
              target="_none"
              tw="relative z-10 p-8 bg-gradient-to-br shadow-2xl from-purple-500 to-indigo-500 lg:(text-sm scale-125 group-hover:scale-110)"
            >
              <div tw="absolute -right-4 -top-4 text-6xl">🥳</div>
              <h1>UTS Cloud Society</h1>
              <p tw="mb-5">
                Recently became a Co-Founder of the UTS Cloud Computing Society
                and the Director of Sponsorships & Partnerships.
              </p>
              <p>I'm so fortunate to be working with such amazing people!</p>
            </Card>
          </NextLink>

          <Card tw="bg-gradient-to-br from-yellow-500 to-orange-500 lg:(-translate-x-8 group-hover:translate-x-0)">
            <h1>UTS Peer Mentor</h1>
            <p>
              Volunteered to help first year BIT students adjust to university
              and assist them with academic studies.
            </p>
          </Card>
        </div>

        {/* <p>
          I recently became a Co-Founder and Director of Sponsorships &
          Partnerships within the UTS Cloud Computing Society 🥳🎉. This is the
          first time I've taken on a leadership role of this scale which is
          quite scary 😬, but also really exciting 🤩
        </p>
        <p>
          We have an amazing group and I'm certain the society will go far! I'm
          grateful I can be apart of this and it's something that will
          undoubtably help me grow!
        </p> */}
      </section>

      <Divider id="projects" />

      {/* Projects */}
      <section tw="container flex flex-col gap-y-12 items-center">
        <div tw="flex flex-col gap-y-6 items-center">
          <h2 tw="text-center text-5xl font-extrabold tracking-tight">
            Projects
          </h2>

          <p tw="max-w-xl text-center text-gray-700 lg:text-lg">
            I've provided a short write-up for each project, but feel free to
            just look at the screenshots or click around the demo's if
            available. 😊
          </p>
        </div>

        <div tw="grid gap-12 w-full max-w-5xl lg:grid-cols-2">
          {Object.values(projects).map(project => (
            <ProjectCard
              slug={project.slug}
              {...project.data}
              key={project.slug}
            />
          ))}
        </div>

        <p tw="w-4/5 text-center">
          That's <em tw="font-semibold">not</em> all folks!
          <br />
          If you want to see what else I've worked (or am working on) make sure
          to drop by my Github 😊
        </p>
      </section>
    </>
  );
};

const Name: React.FC<{ pronunciation: string }> = ({
  pronunciation,
  children,
}) => (
  <span className="group" tw="relative cursor-pointer">
    <span tw="absolute bottom-full left-1/2 hidden justify-center w-48 py-1 text-base font-bold text-white bg-primary-900 rounded-md transform -translate-x-1/2 -translate-y-1 group-hover:flex">
      {pronunciation}
    </span>
    <strong tw="border-b-2 border-dashed border-current">{children}</strong>
  </span>
);

export default Home;
