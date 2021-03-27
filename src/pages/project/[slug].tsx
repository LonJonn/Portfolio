import tw from "twin.macro";
import { GetStaticPaths, InferGetStaticPropsType } from "next";
import Head from "next/head";
import Button from "../../components/common/Button";
import Divider from "../../components/common/Divider";
import ProjectShowcase from "../../components/project/ProjectShowcase";
import { mdToMarkup } from "../../utils/md-to-markup";
import {
  getAllWriteups,
  getProjectImages,
  getWriteupBySlug,
} from "../../utils/project-writeup-helpers";

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: getAllWriteups().map(w => ({ params: w })) as any,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { content, data } = getWriteupBySlug(params.slug);
  const markup = await mdToMarkup(content);
  const images = getProjectImages(params.slug as string);

  return {
    props: {
      markup,
      data: {
        ...data,
        images,
      },
    },
  };
};

const ProjectWriteUp: React.FC<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ data, markup }) => {
  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>

      {/* Heading */}
      <div tw="flex flex-col gap-y-6 text-center">
        <h1
          cs="WebkitBackgroundClip[text] WebkitTextFillColor[transparent]"
          tw="mx-auto text-4xl text-6xl font-extrabold tracking-wide bg-gradient-to-tr from-orange-400 to-red-500 via-pink-500 md:text-5xl"
        >
          {data.title}
        </h1>

        <p tw="text-xl text-gray-500">{`${data.description} • ${data.year}`}</p>

        <div tw="flex flex-wrap gap-y-4 justify-center max-w-md mx-auto text-sm">
          {data.tags.map(tag => (
            <span
              tw="mx-2 px-5 py-1 text-primary-700 bg-primary-200 border border-primary-700 rounded-full"
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <Divider tw="w-12 my-12" />

      {/* Showcase */}
      <ProjectShowcase images={data.images} />

      <Divider tw="w-12 my-12" />

      {/* Content */}
      <section
        tw="prose prose-primary prose-lg mx-auto px-4"
        dangerouslySetInnerHTML={{ __html: markup }}
      />

      <Divider tw="w-12 my-12" />

      {/* Buttons */}
      <div tw="flex gap-x-4 max-w-xl mx-auto px-4 lg:gap-x-8">
        {data.links.github && (
          <ProjectButton as="a" href={data.links.github} target="_none">
            <GithubIcon />
            Github Repo
          </ProjectButton>
        )}
        {data.links.demo && (
          <ProjectButton primary as="a" href={data.links.demo} target="_none">
            <DemoIcon />
            Live Demo
          </ProjectButton>
        )}
      </div>
    </>
  );
};

//#region Internal Styles

const ProjectButton = tw(Button)`flex-1 py-3`;

const GithubIcon = () => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    tw="w-5 h-5 mr-2"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const DemoIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    tw="w-5 h-5 mr-2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

//#endregion

export default ProjectWriteUp;
