# Next.js Minimal Blog Template

This is a lightweight, minimalistic blog template built with Next.js 15, MDX, Tailwind CSS, and shadcn/ui.

![Demo ScreenShot](/public/images/demo/screenshot.png)

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

## Project Philosophy

This project follows a **minimalist approach** to building a **Next.js-based MDX blog**.

- **Official-First**: Prioritize using **official Next.js libraries** to ensure stability and maintainability.
- **Minimal & Fast**: Keep the project **lightweight and fast**, avoiding unnecessary dependencies.

## Running Locally

Follow these steps to set up and run the project on your local machine.

### Clone the repository

> [!NOTE]
> This repository is set as a Public Template, so you can use it as a template by clicking "Use this template"!

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

