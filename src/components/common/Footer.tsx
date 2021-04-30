import "twin.macro";

const Footer: React.FC = () => (
  <footer tw="mt-16 py-8 text-gray-800 bg-gray-100 border-t border-gray-200">
    <p tw="prose prose-blue max-w-full px-4 text-center">
      This portfolio was built with ❤ using{" "}
      <a target="_blank" href="https://nextjs.com">
        NextJS
      </a>
      <br />
      and deployed to{" "}
      <a target="_blank" href="https://vercel.com">
        Vercel ▲
      </a>
    </p>
  </footer>
);

export default Footer;
