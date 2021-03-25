import "twin.macro";
import ProjectCard from "../components/ProjectCard";

const Projects: React.FC = () => (
  <section tw="container text-gray-900">
    <h2
      id="projects"
      tw="mb-10 text-center text-5xl font-extrabold tracking-tight lg:mb-16"
    >
      Projects
    </h2>

    <div tw="flex flex-col flex-wrap gap-y-16 justify-around md:mx-12 lg:(flex-row mx-0)">
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

    <p tw="w-4/5 mt-16 mx-auto text-center">
      That's <em tw="font-semibold">not</em> all folks!
      <br />
      If you want to see what else I've worked (or am working on) make sure to
      drop by my Github 😊
    </p>
  </section>
);

export default Projects;
