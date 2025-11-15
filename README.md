## Tech Stack

- Framework - [Next.js](https://nextjs.org/15) (v15)
- Language - [TypeScript](https://www.typescriptlang.org)
- Styling - [Tailwind CSS](https://tailwindcss.com) (v4)
- UI Components - [shadcn/ui](https://ui.shadcn.com)
- Static Content Management - [MDX](https://mdxjs.com)
- Syntax Highlight - [Rehype Pretty Code](https://rehype-pretty.pages.dev/) + [Shiki](https://github.com/shikijs/shiki)
- Deployment - [Vercel](https://vercel.com)
- Code Linting - [ESLint](https://eslint.org) (v9, Flat Config)
- Code Formatting - [Prettier](https://prettier.io)

```sh
git clone git@github.com:anupjha/anupjha-blog
cd anupjha-blog
```

### Install dependencies & Set up environment variables

```sh
pnpm i
cp .env.example .env.local
```

Please set `http://localhost:3000` to `NEXT_PUBLIC_APP_URL`.

### Build the project

```sh
pnpm build
```

### Start the development server

```sh
pnpm dev
```

### Open in your browser

Visit **[http://localhost:3000](http://localhost:3000)** to see the site in action 🎅

### Analytics

Visit **[https://umami.is](https://umami.is)**

## ToDo

## 💻 System Design Interview Problems

### Easy

- [Design URL Shortener like TinyURL](https://blog.algomaster.io/p/design-a-url-shortener)
- [Design Leaderboard](https://systemdesign.one/leaderboard-system-design/)
- [Design Content Delivery Network (CDN)](https://www.youtube.com/watch?v=8zX0rue2Hic)
- [Design Parking Garage](https://www.youtube.com/watch?v=NtMvNh0WFVM)
- [Design Vending Machine](https://www.youtube.com/watch?v=D0kDMUgo27c)
- [Design Distributed Key-Value Store](https://www.youtube.com/watch?v=rnZmdmlR-2M)
- [Design Distributed Cache](https://www.youtube.com/watch?v=iuqZvajTOyA)
- [Design Authentication System](https://www.youtube.com/watch?v=uj_4vxm9u90)
- [Design Unified Payments Interface (UPI)](https://www.youtube.com/watch?v=QpLy0_c_RXk)

### Medium

- [Design WhatsApp](https://blog.algomaster.io/p/design-a-chat-application-like-whatsapp)
- [Design Spotify](https://blog.algomaster.io/p/design-spotify-system-design-interview)
- [Design Distributed Job Scheduler](https://blog.algomaster.io/p/design-a-distributed-job-scheduler)
- [Design a Scalable Notification Service](https://blog.algomaster.io/p/design-a-scalable-notification-service)
- [Design Instagram](https://www.youtube.com/watch?v=VJpfO6KdyWE)
- [Design Tinder](https://www.youtube.com/watch?v=tndzLznxq40)
- [Design Facebook](https://www.youtube.com/watch?v=9-hjBGxuiEs)
- [Design Twitter](https://www.youtube.com/watch?v=wYk0xPP_P_8)
- [Design Reddit](https://www.youtube.com/watch?v=KYExYE_9nIY)
- [Design Netflix](https://www.youtube.com/watch?v=psQzyFfsUGU)
- [Design Youtube](https://www.youtube.com/watch?v=jPKTo1iGQiE)
- [Design Google Search](https://www.youtube.com/watch?v=CeGtqouT8eA)
- [Design E-commerce Store like Amazon](https://www.youtube.com/watch?v=EpASu_1dUdE)
- [Design TikTok](https://www.youtube.com/watch?v=Z-0g_aJL5Fw)
- [Design Shopify](https://www.youtube.com/watch?v=lEL4F_0J3l8)
- [Design Airbnb](https://www.youtube.com/watch?v=YyOXt2MEkv4)
- [Design Autocomplete for Search Engines](https://www.youtube.com/watch?v=us0qySiUsGU)
- [Design Rate Limiter](https://www.youtube.com/watch?v=mhUQe4BKZXs)
- [Design Distributed Message Queue like Kafka](https://www.youtube.com/watch?v=iJLL-KPqBpM)
- [Design Flight Booking System](https://www.youtube.com/watch?v=qsGcfVGvFSs)
- [Design Online Code Editor](https://www.youtube.com/watch?v=07jkn4jUtso)
- [Design Stock Exchange System](https://www.youtube.com/watch?v=dUMWMZmMsVE)
- [Design an Analytics Platform (Metrics & Logging)](https://www.youtube.com/watch?v=kIcq1_pBQSY)
- [Design Payment System](https://www.youtube.com/watch?v=olfaBgJrUBI)
- [Design a Digital Wallet](https://www.youtube.com/watch?v=4ijjIUeq6hE)

### Hard

- [Design Location Based Service like Yelp](https://www.youtube.com/watch?v=M4lR_Va97cQ)
- [Design Uber](https://www.youtube.com/watch?v=umWABit-wbk)
- [Design Food Delivery App like Doordash](https://www.youtube.com/watch?v=iRhSAR3ldTw)
- [Design Google Docs](https://www.youtube.com/watch?v=2auwirNBvGg)
- [Design Google Maps](https://www.youtube.com/watch?v=jk3yvVfNvds)
- [Design Zoom](https://www.youtube.com/watch?v=G32ThJakeHk)
- [Design Distributed Counter](https://systemdesign.one/distributed-counter-system-design/)
- [Design File Sharing System like Dropbox](https://www.youtube.com/watch?v=U0xTu6E2CT8)
- [Design Ticket Booking System like BookMyShow](https://www.youtube.com/watch?v=lBAwJgoO3Ek)
- [Design Distributed Web Crawler](https://www.youtube.com/watch?v=BKZxZwUgL3Y)
- [Design Code Deployment System](https://www.youtube.com/watch?v=q0KGYwNbf-0)
- [Design Distributed Cloud Storage like S3](https://www.youtube.com/watch?v=UmWtcgC96X8)
- [Design Distributed Locking Service](https://www.youtube.com/watch?v=v7x75aN9liM)
- [Design Slack](https://systemdesign.one/slack-architecture/)
- [Design Live Comments](https://systemdesign.one/live-comment-system-design/)

### Easy

- Design a URL Shortner
- Design WhatsApp
- Design Spotify
- Design a Unique Id Generator
- Design Search Autocomplete system

### Medium

- Notification System
- Instagram
- YouTube
- Live Comments
- Yelp (Proximity Service)
- Distributed Rate Limiting Service
- Gaming Leaderboard
- Monitoring and Alerting System

### Hard

- Uber
- Web Crawler
- Distributed Job Scheduler
- Distributed Key Value Store
- Scalable Likes Counting System
