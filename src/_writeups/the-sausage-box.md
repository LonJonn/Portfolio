---
title: "The Sausage Box"
description: "Local movie server for my family 🙂"
year: 2018
cover_image: "1.png"
tags:
  - "Fullstack"
  - "VueJS"
  - "ExpressJS"
  - "WebSockets"
  - "BulmaCSS"
  - "Raspberry Pi"
links:
  github: "https://github.com/LonJonn/TheSausageBox"
---

_My family name actually means "sausage" in Italian, so hopefully that provides some context behind the origin of this strangely named movie server..._ 😅

> The Sausage Box is a movie hub I created for my family to act as a central place we can store, add and view all of our digital movies with low latency over our home network.
>
> This was before we got Netflix so it's not really used anymore... 🙃

This was the first web-development project I ever completed. Prior to this, I had stumbled across Vue, but everything was pretty new to me. I was studying Python at school, but teaching myself web-development during my own time through free online resources.

The concept of building applications that are accessible through a web browser without needing to install any additional runtime was something I thought was really cool. To be transparent, I had no idea how any of these technologies worked, but I was excited to be using them nonetheless!

#### For this project, I used the following stack:

- VueJS SPA front-end
- ExpressJS backend
- Socket-IO for web sockets
- Buefy component library built on BulmaCSS

This project was a simple user-interface for reading a directory of video files and serving them over our LAN. I also added functionality to download a video by its URL to add to the server remotely.

This download feature actually undertook many iterations before I decided to use web sockets. Originally, when downloading, I would hit the server using AJAX calls on a short interval with `setInterval` until the download completed. Yikes... 😬 Eventually I found out about web sockets which I used for real-time download progress updates!

I also had a lot of fun putting the UI together which was incredibly easy thanks to Buefy & Bulma CSS!

I deployed this project to a Raspberry Pi which still lives behind the TV! After I finished this project, I became increasingly interested in web-development and started teaching myself more about web-dev through resources like **YouTube** and [Mozilla Developer Docs](https://developer.mozilla.org/) 😍
