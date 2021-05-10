---
title: "Venntiboard"
description: "Internal project tracker I built for a previous company"
year: 2019
cover_image: "3.png"
tags:
  - "Firebase"
  - "NoSQL Realtime DB"
  - "Serverless"
  - "VueJS"
  - "TypeScript"
  - "TailwindCSS"
links:
  github: "https://github.com/LonJonn/Venntiboard"
---

Venntiboard is an internal project tracker that I built during my first internship while I was at Venntifact; a small digital marketing consultancy start-up. This project was actually a part of the industry study I was completing at the time. This study involved identifying a problem within my current placement and deploying a solution to address the problem.

I noticed employees lacked a platform to voice opinions and suggest improvements. At the time, Venntifact had an "Idea Wall" consisting of sticky-notes which would mostly go unactioned. I decided to develop a customised solution that would more effectively track employee proposals. I won't go into much more detail about this here, but if you're interested, you can [read my industry study here](/industry-study.pdf).

I was the product owner & only developer of this application, and at the time, this was the largest project I had worked on. It was a great opportunity for me to develop my project management skills and properly utilise tools such as Git VCS. For managing this project, I used Trello: a free online Kanban tool which I used to prioritise and track features & bugs. This was also my first experience with the agile workflow.

### For this project, I used the following stack:

- **VueJS Single Page Application**

- **Firebase BaaS**

  **Firestore NoSQL DB** for realtime updates that reflect in the UI as changes occur! Firestore also handles caching, optimistic updates & offline mutations.

  **Firebase Authentication** for the Identity Platform including SSO with a number of social providers such as Google, Facebook, Github, etc. Firebase Auth also takes care of authorization concerns regarding data access with it's tight coupling to Firestore.

  **Firebase Functions** as my serverless backend. This is where I wrote business logic that required more complex data manipulation such as syncing user likes & contributions, or ensuring data consistency when deleting an idea, for example.

- **TypeScript**

- **TailwindCSS**

I opted to use TypeScript rather than Vanilla JS. This was a massive learning curve for me at the time since I had not used a strong typed language before, so most of the features TS introduced were foreign to me. Firebase was also my first experience with a cloud provider and concepts like serverless were also new.

Working with Firebase and it's suite of services lead me on an extensive journey into various interesting topics, especially for Firebase and NoSQL data modelling. I learnt about concepts such as Denormalization and bucketing to optimise non-relational database queries and avoid unintended expenses. This brought to light performance concerns which I hadn't considered before. I also learnt about maintaining a solution without a physical backend through services such as Firebase Functions, and how authentication and authorization is handled in these scenarios.

As for the visual design, I used the utility classes TailwindCSS provides, but all designs are completely original. I didn't use any prototyping tool for this (since I didn't know they existed), but I'm still proud of how it turned out!

I'll be the first to admit that the codebase isn't pretty 😅, but finishing a project of this scale by myself was a major turning point that made me realise how much I enjoy web-development 😍. Since then, I've gained a newfound love for the rapidly evolving world that is web-development, and have continued to learn and experiment with amazing technologies!

---

_Unfortunately, since this is an internal system, I'm unable to showcase the project live, but feel free to check out the source code on GitHub!_
