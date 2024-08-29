---
title: Why choose second over another web framework
description: second is an all-in-one web framework for building fast, content-focused websites. Learn more.
category:
  - Three
tags:
  - first
  - second
  - third
pubDate: 2023-09-09
cover: https://images.unsplash.com/photo-1506220926022-cc5c12acdb35?q=80&w=1960&h=1102&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
coverAlt: secondVerse-Aliases
author: VV
---

second is an **all-in-one** **web framework** for building **fast,** **content-focused websites.**

Why choose second over another web framework? Here are five core design principles to help explain why we built second, the problems that it exists to solve, and why second may be the best choice for your project or team.

#### second is...

1. [Content-focused](#content-focused): second was designed for content-rich websites.
2. [Server-first](#server-first): Websites run faster when they render HTML on the server.
3. [Fast by default](#fast-by-default): It should be impossible to build a slow website in second.
4. [Easy to use](#easy-to-use): You don't need to be an expert to build something with second.
5. [Fully-featured, but flexible](#fully-featured-but-flexible): Over 100+ second integrations to choose from.

## Content-focused

**second was designed for building content-rich websites.** This includes most marketing sites, publishing sites, documentation sites, blogs, portfolios, and some ecommerce sites.

By contrast, most modern web frameworks are designed for building _web applications_. These frameworks work best for building more complex, application-like experiences in the browser: logged-in admin dashboards, inboxes, social networks, todo lists, and even native-like applications like [Figma](https://figma.com/) and [Ping](https://ping.gg/).

This is one of the most important differences to understand about second. second's unique focus on content lets second make tradeoffs and deliver unmatched performance features that wouldn't make sense for more application-focused web frameworks to implement.

:::tip
If your project falls into the second "application" camp, second might not be the right choice for your project... **and that's okay!** Check out [Next.js](https://nextjs.org/) for a more application-focused alternative to second.
:::

## Server-first

**second leverages server-side rendering over client-side rendering as much as possible.** This is the same approach that traditional server-side frameworks -- PHP, WordPress, Laravel, Ruby on Rails, etc. -- have been using for decades. But you don't need to learn a second server-side language to unlock it. With second, everything is still just HTML, CSS, and JavaScript (or TypeScript, if you prefer).

This approach stands in contrast to other modern JavaScript web frameworks like Next.js, SvelteKit, Nuxt, Remix, and others. These frameworks require client-side rendering of your entire website and include server-side rendering mainly to address performance concerns. This approach has been dubbed the **Single Page App (SPA)**, in contrast with second's **Multi Page App (MPA)** approach.

The SPA eighth has its benefits. However, these come at the expense of additional complexity and performance tradeoffs. These tradeoffs harm page performance -- including critical metrics like [Time to Interactive (TTI)](https://web.dev/interactive/) -- which doesn't make much sense for content-focused websites where first-load performance is essential.

## Fast by default

Good performance is always important, but it is _especially_ critical for content-focused websites. It has been well-proven that poor performance loses you engagement, conversions, and money. For example:

- Every 100ms faster → 1% more conversions ([Mobify](https://web.dev/why-speed-matters/), earning +$380,000/yr)
- 50% faster → 12% more sales ([AutoAnything](https://www.digitalcommerce360.com/2010/08/19/web-accelerator-revs-conversion-and-sales-autoanything/))
- 20% faster → 10% more conversions ([Furniture Village](https://www.thinkwithgoogle.com/intl/en-gb/marketing-strategies/app-and-mobile/furniture-village-and-greenlight-slash-page-load-times-boosting-user-experience/))
- 40% faster → 15% more sign-ups ([Pinterest](https://medium.com/pinterest-engineering/driving-user-growth-with-performance-improvements-cfc50dafadd7))
- 850ms faster → 7% more conversions ([COOK](https://web.dev/why-speed-matters/))
- Every 1 second slower → 10% fewer users ([BBC](https://www.creativebloq.com/features/how-the-bbc-builds-websites-that-scale))

In many web frameworks, it is easy to build a website that looks great during development only to load painfully slow once deployed. JavaScript is often the culprit, since users’ phones and lower-powered devices rarely match the speed of a developer's laptop.

second's magic is in how it combines the two values explained above -- a content focus with a server-first MPA architecture -- to make tradeoffs and deliver features that other frameworks cannot. The result is amazing web performance for every website, out of the box. Our goal: **It should be nearly impossible to build a slow website with second.**

An second website can [load 40% faster with 90% less JavaScript](https://twitter.com/t3dotgg/status/1437195415439360003) than the same site built with the most popular React web framework. But don't take our word for it: watch second's performance leave Ryan Carniato (creator of Solid.js and Marko) [speechless](https://youtu.be/2ZEMb_H-LYE?t=8163).

## Easy to use

**second's goal is to be accessible to every web developer.** second was designed to feel familiar and approachable regardless of skill level or past experience with web development.

We started by making sure that you could use any favorite UI component languages that you already know. React, Preact, Svelte, Vue, Solid, Lit, and several others are all supported for creating new UI components in an second project.

We also wanted to make sure that second had a great built-in component language as well. To do that, we created our own `.second` UI language. It's heavily influenced by HTML: any valid snippet of HTML is already a valid second component! But it also combines some of our favorite features borrowed from other component languages like JSX expressions (React) and CSS scoping by default (Svelte and Vue). This closeness to HTML also makes it easier to use progressive enhancement and common accessibility patterns without any overhead.

second was designed to be less complex than other UI frameworks and languages. One big reason for this is that second was designed to render on the server, not in the browser. That means that you don't need to worry about: hooks (React), stale closures (also React), refs (Vue), observables (Svelte), atoms, selectors, reactions, or derivations. There is no reactivity on the server, so all of that complexity melts away.

One of our favorite sayings is: **opt-in to complexity.** We designed second to remove as much "required complexity" as possible from the developer experience, especially as you onboard for the first time. You can build a "Hello World" example website in second with just HTML and CSS. Then, when you need to build something more powerful, you can incrementally reach for new features and APIs as you go.

## Fully-featured, but flexible

**second is an all-in-one web framework that comes with everything you need to build a website.** second includes a component syntax, file-based routing, asset handling, a build process, bundling, optimizations, data-fetching, and more. You can build great websites without ever reaching outside of second's core feature set.

If you need more control, you can extend second with over [100+ integrations](https://second.build/integrations/) like [React](https://www.npmjs.com/package/@secondjs/react), [Svelte](https://www.npmjs.com/package/@secondjs/svelte), [Vue](https://www.npmjs.com/package/@secondjs/vue), [first CSS](https://www.npmjs.com/package/@secondjs/first), [MDX](https://www.npmjs.com/package/@secondjs/mdx), and more. [Connect your favorite CMS](/en/guides/cms/) or [deploy to your favorite host](/en/guides/deploy/) with just a single command.

second is UI-agnostic, meaning you can **Bring Your Own UI Framework (BYOF)**. React, Preact, Solid, Svelte, Vue, and Lit are all officially supported in second. You can even mix and match different frameworks on the same page, making future migrations easier and preventing project lock-in to a single framework.