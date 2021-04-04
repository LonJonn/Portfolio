---
title: "Portfolio"
description: "I'm pretty proud of it so I thought I'd add it here as well 😝"
year: 2021
cover_image: "1.png"
tags:
  - "NextJS"
  - "TypeScript"
  - "TailwindCSS"
  - "Static Generation"
  - "Markdown + Frontmatter"
links:
  github: "https://github.com/LonJonn/portfolio"
  demo: "https://leonsalsiccia.com/"
---

This is my first attempt at making a portfolio, but I'm pretty happy with how it turned it. It was originally meant to be a simple static site, but it slowly grew into a more complex project that I had to add to my portfolio! Woah... Portfolio-ception... 🤯

### For this project, I used the following tech-stack:

- NextJS
- React + TypeScript
- TailwindCSS + Twin.Macro
- Markdown + Frontmatter with ReMark & GrayMatter
- Vercel for hosting and CI/CD

### Dynamic Page Generation

This portfolio is dynamically generated using NextJS's [Static Generation][1] feature. At build-time, all project write-ups (including this one) are read from the file-system and used to generate static HTML which is then served via Vercel's CDN. This means that

The write-ups are written in Markdown with meta-data, such as tags, descriptions, etc. stored as frontmatter at the top of the file. This allows me to easily add projects to my portfolio by simply creating a new Markdown file and adding some screenshots.

These markdown files are parsed into HTML markup using [ReMark][2] & [GrayMatter][3]. This allows me to dynamically update the layout of the page depending on the project being generated e.g. some projects don't have a demo link.

### Design

I designed this portfolio myself and styled it using [TailwindCSS][4] and [Twin.Macro][5]; a CSS-in-JS solution that integrates React and Tailwind together really well. I'm still experimenting with different styling solutions and APIs, but so far I'm really enjoying Tailwind's atomic utility-class approach, despite the verbose class names in my markup. **Adam Wathan**, the creator of TailwindCSS, has a [really good article][6] that objectively compares different styling approaches and describes how he reached his API for Tailwind.

### Final Thoughts

Making this portfolio was a great learning experience for myself during which I was able to develop my design skills and learn more about one of my favourite frameworks, NextJS! I'm really happy with the current approach and how easy it is for me to add content to my portfolio, but I'm definitely not finished with this project yet!

I hope you enjoyed viewing my protfolio as much as I enjoyed making it! 😁

[1]: https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation
[2]: https://github.com/gnab/remark
[3]: https://github.com/jonschlinkert/gray-matter
[4]: https://tailwindcss.com/
[5]: https://github.com/ben-rogerson/twin.macro
[6]: https://adamwathan.me/css-utility-classes-and-separation-of-concerns/
