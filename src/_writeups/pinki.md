---
title: "Pinki"
description: "Webapp to track your 'pinki' promises"
year: 2020
cover_image: "2.png"
tags:
  - "Fullstack"
  - "NextJS"
  - "TypeScript"
  - "MongoDB"
  - "Firebase"
  - "Caching"
links:
  github: "https://github.com/LonJonn/AIP-Assessment-2"
  demo: "https://aip-assessment-2.vercel.app/"
---

> This is probably my most proud project I contributed to, so if there's one project of mine that you do check out, make sure it's this one!

> I also have a more detailed write-up that goes into the nitty-gritty with examples on my [GitHub](https://github.com/LonJonn/AIP-Assessment-2), so make sure to check it out!

Pinki is a web application developed for tracking favours you owe and are owed, allowing users to submit proof of completion, or post public favour requests for anyone to complete for a reward. This project was my groups major assessment submission for Advanced Internet Programming (AIP) at UTS. AIP is an amazing subject taught by Benjamin Johnston that covers the latest web-development trends.

### We decided on the following tech-stack:

- NextJS JAMStack (Cause NextJS is just so cool! Like seriously! 😍😍😍)
- React + TypeScript
- SWR as our server cache state-management solution
- MongoDB NoSQL DB
- Firebase Auth & Firebase Storage
- ChakraUI Component Library + Framer Motion for animations
- Vercel for hosting & CI/CD

### For this project, I was responsible for the following:

- **General assistance & QA**

- **Setting up the project foundation and code design**

  I created many utility functions to improve the DX including custom validation logic, react hooks, error handling and route middleware. Please check the Github repo for a more detailed breakdown.

- **User authentication**

  I setup Firebase Authentication for the applicaiton including Google social sign-in. I also created custom API middleware for authorisation, a custom `useAuth` hook for client-side logic, and a Higher Order Component (HOC) to easily protect routes using NextJS's custom router.

- **Reward feature**

  Users can specify multiple rewards for a favour or request which will be assigned to whoever completes the request. They are also able to edit the rewards they have offered before a request is completed.

- **Favour feature**

  Users can specify whether they are owed a favour, or owe another person a favour. They are able to search for another user and specify what they are owed/owing. Once a favour request is opened, users are able to monitor the status of the favour, or upload an image as proof of payment, after which the owed party can approve or decline.

- **Party Detection feature**

  Sometimes, scenarios in which many users owe each other may occur. We used a Graph data structure & Depth First Search (DFS) algorithm to detect such scenarios. Involved users are then notified, letting them know they should set up a party to settle the debts together! 🎉🥳

- **Caching and Performance Optimisations**

  > A lot of thought wen't into optimising this project, as if it were being deployed at a large scale with thousands of users.

  I set up [SWR][swr] to cache client-side data with optimistic UI updates to avoid unnecessary API calls. I also setup [Incremental Static Regeneration (ISR)][isr] to cache pages to a CDN serve them on subsequent requests. This significantly reduced the number of requests to our backend & reads to our database, while also ensuring the latest data is served.

  Careful consideration was also taken when modelling our database entities to improve efficiency and performance. This involved denormalisation techniques such as embedding documents to reduce the number of reads, or bucketing documents for simpler queries while avoiding over-fetching.

This was by far my favourite project I have worked on. My group and I learnt so much by applying industry best-practices such as Agile methodology using Github projects & issues, GitFlow with feature branches & code reviews, and more. It was incredibly insightful to be utilising these concepts while working in a real team, and I'm so proud of what we were able to accomplish together!

<p style="font-size: 16px; color: #888;">...especially considering we got full marks in a post-grad subject 😋</p>

[nextjs]: https://nextjs.org/
[swr]: https://swr.vercel.app/
[isr]: https://nextjs.org/docs/basic-features/data-fetching#incremental-static-regeneration
