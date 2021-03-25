import "twin.macro";
import Link from "next/link";

const Hero: React.FC = () => (
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
      , a passionate developer obsessed with the web! I'm currently studying at
      the University of Technology Sydney pursuing a Bachelor of Information
      Technology.
    </p>
    <p>
      This portfolio was designed and built by myself using some of my favourite
      technologies, including <strong>TypeScript</strong>,{" "}
      <strong>React</strong>, <strong>NextJS</strong> &{" "}
      <strong>Tailwind CSS</strong>.
    </p>
    <p>
      Thanks for checking out my website ❤️! If you're interested to see some of
      the things I've worked on, please{" "}
      <Link href="#projects">
        <a>check out my projects below!</a>
      </Link>
    </p>
  </section>
);

export default Hero;
