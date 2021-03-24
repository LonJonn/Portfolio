import "twin.macro";

const Footer: React.FC = () => (
  <footer tw="mt-16 py-8 text-gray-800 bg-gray-100 border-t border-gray-200">
    <p tw="prose prose-blue mx-auto px-4 text-center md:w-3/5 lg:w-2/5">
      This awesome portfolio you are looking at was built using{" "}
      <FooterLink href="https://nextjs.com">NextJS</FooterLink>, styled with{" "}
      <FooterLink href="https://tailwindcss.com">TailwindCSS</FooterLink> +{" "}
      <FooterLink href="https://github.com/ben-rogerson/twin.macro">
        Twin.Macro
      </FooterLink>{" "}
      and deployed to <FooterLink href="https://vercel.com">Vercel</FooterLink>.
    </p>
  </footer>
);

const FooterLink: React.FC<{ href: string }> = ({ href, children }) => (
  <a href={href} target="_none" tw="font-bold!">
    {children}
  </a>
);

export default Footer;
