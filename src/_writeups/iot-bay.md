---
title: "IoT Bay"
description: "E-Commerce Store for Internet of Things related decives"
year: 2020
cover_image: "2.png"
tags:
  - "Fullstack"
  - "JavaBeans Servlets"
  - "MVC"
  - "SQL"
  - "Bootstrap"
links:
  github: "https://github.com/LonJonn/IoTBay"
  # demo: ""
---

> IoTBay is a full-stack e-commerce web application built as a group project for the subject **Introduction to Software Development** at UTS. It is an online store for ordering anything related to "Internet of Things" enabled devices.

This project was a great way to experience the more "traditional" side of web applications. Personally, I closely follow the latest web development trends including SPAs, Microservices, serverless, etc. so going back to simple server-side rendering with a template engine was interesting and a nice change of pace. It allowed me to gain a more holistic understanding of how web development has evolved- and an appreciation for what we have now 😋.

### The tech-stack used for this project includes:

- GlassFish Server on JavaEE
- Apache Derby SQL Database
- JavaBeans and Servlets
- JSP for server-side rendered content
- Bootstrap 4 for styling

### For this project, I was responsible for the following:

- **General assistance & QA**

- **Setting up the project foundation and code design**

  This included setting up a singleton database connection, creating the DAO abstract base class, server-side validation utilities, and creating a global error handler with custom exceptions.

- **User authentication**

  Our e-commerce store was required to work for customers, staff (both general staff and administrators with elevated privileges), as well as anonymous users who have not signed-in.

- **Product feature**

  Customers are able to view and filter through the complete store catalogue including search and categories. And Staff have the ability to create, edit or delete existing products.

- **Cart Feature**

  Customers are able to add items to their cart, which is persisted within the database and across sessions. They are able to update the quantity of items in their cart, or remove items altogether. I also made sure anonymous users could use this feature as well.

- **Order Feature**

  Customers are able to checkout the items in their cart as a new order. This order is then logged to the system where customers can check previous orders, see progress, or cancel. Staff also have the ability to update the shipping status of existing orders.

Working on a complete full-stack web-app as a group was such a great experience! It was super satisfying seeing all our hard work fit together at the end, like completing a massive jigsaw puzzle! We still had hiccups along the way, of course, but overcoming those issues together was also enjoyable! _And the all-nighter we pulled together in call..._ 💀

We learnt so much about tools like Git and agile methodologies like sprints with Kanban boards. I felt this was reflective of a real-world team experience which is what made it such an insightful and amazing project to be apart of!
