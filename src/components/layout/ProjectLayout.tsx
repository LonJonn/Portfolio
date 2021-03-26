import "twin.macro";
import Head from "next/head";
import Divider from "../Divider";
import ProjectHeading from "../ProjectHeading";
import ProjectShowcase from "../ProjectShowcase";
import { ProjectMeta } from "../../types";

type ProjectLayoutProps = { meta: ProjectMeta; images: string[] };
const ProjectLayout: React.FC<ProjectLayoutProps> = ({
  meta,
  images,
  children,
}) => (
  <section tw="mt-4 pt-8 border-t md:border-none">
    <Head>
      <title>{meta.title}</title>
    </Head>

    <ProjectHeading {...meta} />

    <Divider tw="w-12 my-12" />

    <ProjectShowcase images={images} />

    <Divider tw="w-12 my-12" />

    <div tw="xl:prose-xl lg:prose-lg prose mx-auto px-4 md:px-0">
      {children}
    </div>
  </section>
);

export default ProjectLayout;
