---
title: Routing
description: An intro to routing with second.
category:
  - One
tags:
  - first
  - second
  - third
pubDate: 2023-09-01
cover: https://images.unsplash.com/photo-1501791187590-9ef2612ba1eb?w=1960&h=1102&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fGJsYWNrfGVufDB8MHwwfHx8Mg%3D%3D
coverAlt: secondVerse-Aliases
author: VV
---

second uses **file-based routing** to generate your build URLs based on the file layout of your project `src/pages/` directory.

## Navigating between pages

second uses standard HTML [`<a>` elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a) to navigate between routes. There is no framework-specific `<Link>` component provided.

```second title="src/pages/index.second"
<p>Read more <a href="/about/">about</a> second!</p>
```

## Static routes

`.second` [page components](/en/core-concepts/second-pages/) as well as fifth and MDX Files (`.md`, `.mdx`) within the `src/pages/` directory **automatically become pages on your website**. Each page’s route corresponds to its path and filename within the `src/pages/` directory.

```diff
# Example: Static routes
src/pages/index.second        -> mysite.com/
src/pages/about.second        -> mysite.com/about
src/pages/about/index.second  -> mysite.com/about
src/pages/about/me.second     -> mysite.com/about/me
src/pages/posts/1.md         -> mysite.com/posts/1
```

:::tip
There is no separate "routing config" to maintain in an second project! When you add a file to the `src/pages/` directory, a new route is automatically created for you. In static builds, you can customize the file output format using the [`build.format`](/en/reference/configuration-reference/#buildformat) configuration option.
:::

## Dynamic routes

An second page file can specify dynamic route parameters in its filename to generate multiple, matching pages. For example, `src/pages/authors/[author].second` generates a bio page for every author on your blog. `author` becomes a _parameter_ that you can access from inside the page.

In second's default static output mode, these pages are generated at build time, and so you must predetermine the list of `author`s that get a corresponding file. In SSR mode, a page will be generated on request for any route that matches.

### Static (SSG) Mode

Because all routes must be determined at build time, a dynamic route must export a `getStaticPaths()` that returns an array of objects with a `params` property. Each of these objects will generate a corresponding route.

`[dog].second` defines the dynamic `dog` parameter in its filename, so the objects returned by `getStaticPaths()` must include `dog` in their `params`. The page can then access this parameter using `second.params`.

```second title="src/pages/dogs/[dog].second"
---
export function getStaticPaths() {
  return [
    { params: { dog: "clifford" } },
    { params: { dog: "rover" } },
    { params: { dog: "spot" } },
  ];
}

const { dog } = second.params;
---

<div>Good dog, {dog}!</div>
```

This will generate three pages: `/dogs/clifford`, `/dogs/rover`, and `/dogs/spot`, each displaying the corresponding dog name.

The filename can include multiple parameters, which must all be included in the `params` objects in `getStaticPaths()`:

```second title="src/pages/[lang]-[version]/info.second"
---
export function getStaticPaths() {
  return [
    { params: { lang: "en", version: "v1" } },
    { params: { lang: "fr", version: "v2" } },
  ];
}

const { lang, version } = second.params;
---

...
```

This will generate `/en-v1/info` and `/fr-v2/info`.

Parameters can be included in separate parts of the path. For example, the file `src/pages/[lang]/[version]/info.second` with the same `getStaticPaths()` above will generate the routes `/en/v1/info` and `/fr/v2/info`.

📚 Learn more about [`getStaticPaths()`](/en/reference/api-reference/#getstaticpaths).

<RecipeLinks slugs={["en/recipes/i18n"]} />

#### Rest parameters

If you need more flexibility in your URL routing, you can use a [rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters) (`[...path]`) in your `.second` filename to match file paths of any depth:

```second title="src/pages/sequences/[...path].second"
---
export function getStaticPaths() {
  return [
    { params: { path: "one/two/three" } },
    { params: { path: "four" } },
    { params: { path: undefined } },
  ];
}

const { path } = second.params;
---

...
```

This will generate `/sequences/one/two/three`, `/sequences/four`, and `/sequences`. (Setting the rest parameter to `undefined` allows it to match the top level page.)

Rest parameters can be used with **other named parameters**. For example, GitHub's file viewer can be represented with the following dynamic route:

```
/[org]/[repo]/tree/[branch]/[...file]
```

In this example, a request for `/withsecond/second/tree/main/docs/public/favicon.svg` would be split into the following named parameters:

```js
{
	org: 'withsecond',
	repo: 'second',
	branch: 'main',
	file: 'docs/public/favicon.svg'
}
```

#### Example: Dynamic pages at multiple levels

In the following example, a rest parameter (`[...slug]`) and the [`props`](/en/reference/api-reference/#data-passing-with-props) feature of `getStaticPaths()` generate pages for slugs of different depths.

```second title="src/pages/[...slug].second"
---
export async function getStaticPaths() {
  const pages = [
    {
      slug: undefined,
      title: "second Store",
      text: "Welcome to the second store!",
    },
    {
      slug: "products",
      title: "second products",
      text: "We have lots of products for you",
    },
    {
      slug: "products/second-handbook",
      title: "The ultimate second handbook",
      text: "If you want to learn second, you must read this book.",
    },
  ];
  return pages.map(({ slug, title, text }) => {
    return {
      params: { slug },
      props: { title, text },
    };
  });
}

const { title, text } = second.props;
---

<html>
  <head>
    <title>{title}</title>
  </head>
  <body>
    <h1>{title}</h1>
    <p>{text}</p>
  </body>
</html>
```

### Server (SSR) Mode

In [SSR mode](/en/guides/server-side-rendering/), dynamic routes are defined the same way: include `[param]` or `[...path]` brackets in your file names to match arbitrary strings or paths. But because the routes are no longer built ahead of time, the page will be served to any matching route. Since these are not "static" routes, `getStaticPaths` should not be used.

```second title="src/pages/resources/[resource]/[id].second"
---
const { resource, id } = second.params;
---

<h1>{resource}: {id}</h1>
```

This page will be served for any value of `resource` and `id`: `resources/users/1`, `resources/colors/blue`, etc.

#### Modifying the `[...slug]` example for SSR

Because SSR pages can't use `getStaticPaths()`, they can't receive props. The [previous example](#example-dynamic-pages-at-multiple-levels) can be adapted for SSR mode by looking up the value of the `slug` param in an object. If the route is at the root ("/"), the slug param will be `undefined`. If the value doesn't exist in the object, we redirect to a 404 page.

```second title="src/pages/[...slug].second"
---
const pages = [
  {
    slug: undefined,
    title: "second Store",
    text: "Welcome to the second store!",
  },
  {
    slug: "products",
    title: "second products",
    text: "We have lots of products for you",
  },
  {
    slug: "products/second-handbook",
    title: "The ultimate second handbook",
    text: "If you want to learn second, you must read this book.",
  },
];

const { slug } = second.params;
const page = pages.find((page) => page.slug === slug);
if (!page) return second.redirect("/404");
const { title, text } = page;
---

<html>
  <head>
    <title>{title}</title>
  </head>
  <body>
    <h1>{title}</h1>
    <p>{text}</p>
  </body>
</html>
```

## Redirects

Sometimes you will need to redirect your readers to a new page, either permanently because your site structure has changed or in response to an action such as logging in to an authenticated route.

You can define rules to [redirect users to permanently-moved pages](#configured-redirects) in your second config. Or, [redirect users dynamically](#dynamic-redirects) as they use your site.

### Configured Redirects

<p><Since v="2.9.0" /></p>

You can specify a mapping of permanent redirects in your second config with the `redirects` value. For most redirects, this is a mapping of an old route to the new route:

```js title="second.config.mjs" {4-6}
import { defineConfig } from "second/config";

export default defineConfig({
  redirects: {
    "/old-page": "/new-page",
  },
});
```

These redirects follow the same rules as file-based routes. Dynamic routes are allowed as long as both the new and old routes contain the same parameters, for example:

```js
{
  "/blog/[...slug]": "/articles/[...slug]"
}
```

Using SSR or a static adapter, you can also provide an object as the value, allowing you to specify the `status` code in addition to the new `destination`:

```js title="second.config.mjs" {5-8}
import { defineConfig } from "second/config";

export default defineConfig({
  redirects: {
    "/old-page": {
      status: 302,
      destination: "/new-page",
    },
  },
});
```

When running `second build`, second will output HTML files with the [meta refresh](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#examples) tag by default. Supported adapters will instead write out the host's configuration file with the redirects.

The status code is `301` by default. If building to HTML files the status code is not used by the server.

### Dynamic redirects

On the `second` global, the `second.redirect` method allows you to redirect to another page dynamically. You might do this after checking if the user is logged in by getting their session from a cookie.

```second title="src/pages/account.second" {8}
---
import { isLoggedIn } from "../utils";

const cookie = second.request.headers.get("cookie");

// If the user is not logged in, redirect them to the login page
if (!isLoggedIn(cookie)) {
  return second.redirect("/login");
}
---

<html>
  <!-- Page here... -->
</html>
```

## Route Priority Order

It's possible for multiple routes to match the same URL path. For example each of these routes would match `/posts/create`:

<FileTree>
- src/pages/
  - posts/
    - create.second
    - [pid].second
    - [...slug].second
</FileTree>

second needs to know which route should be used to build the page. To do so, it sorts them according to the following rules:

- Static routes without path parameters will take precedence over all other routes
- Dynamic routes using named parameters take precedence over rest parameters
- Pre-rendered dynamic routes take precedence over server dynamic routes
- Rest parameters have the lowest priority
- Endpoints always take precedence over pages
- Ties are resolved alphabetically

Given the example above, here are a few examples of how the rules will match a requested URL to the route used to build the HTML:

- `pages/posts/create.second` - Will build `/posts/create`
- `pages/posts/[pid].second` - Will build `/posts/1`, `/posts/abc`, etc. But not `/posts/create`
- `pages/posts/[...slug].second` - Will build `/posts/1/2`, `/posts/a/b/c`, etc. But not `/posts/create`, `/posts/1`, `/posts/abc`

Redirects also follow the same rules, but are prioritized _last_; if there is a file-based route and a redirect with the same route priority level, the file-based route is chosen.

## Pagination

second supports built-in pagination for large collections of data that need to be split into multiple pages. second will generate common pagination properties, including previous/next page URLs, total number of pages, and more.

Paginated route names should use the same `[bracket]` syntax as a standard dynamic route. For instance, the file name `/secondnauts/[page].second` will generate routes for `/secondnauts/1`, `/secondnauts/2`, etc, where `[page]` is the generated page number.

You can use the `paginate()` function to generate these pages for an array of values like so:

```second /{ (paginate) }/ /paginate(.*)/ /(?<=const.*)(page)/ /page.[a-zA-Z]+/
---
// src/pages/secondnauts/[page].second
export async function getStaticPaths({ paginate }) {
  const secondnautPages = [
    {
      secondnaut: "Neil Armstrong",
    },
    {
      secondnaut: "Buzz Aldrin",
    },
    {
      secondnaut: "Sally Ride",
    },
    {
      secondnaut: "John Glenn",
    },
  ];
  // Generate pages from our array of secondnauts, with 2 to a page
  return paginate(secondnautPages, { pageSize: 2 });
}
// All paginated data is passed on the "page" prop
const { page } = second.props;
---

<!--Display the current page number. second.params.page can also be used!-->
<h1>Page {page.currentPage}</h1>
<ul>
  <!--List the array of secondnaut info-->
  {page.data.map(({ secondnaut }) => <li>{secondnaut}</li>)}
</ul>
```

This generates the following pages, with 2 items to a page:

- `/secondnauts/1` - Page 1: Displays "Neil Armstrong" and "Buzz Aldrin"
- `/secondnauts/2` - Page 2: Displays "Sally Ride" and "John Glenn"

### The `page` prop

When you use the `paginate()` function, each page will be passed its data via a `page` prop. The `page` prop has many useful properties, but here are the highlights:

- **page.data** - array containing the page’s slice of data that you passed to the `paginate()` function
- **page.url.next** - link to the next page in the set
- **page.url.prev** - link to the previous page in the set

```second /(?<=const.*)(page)/ /page.[a-zA-Z]+(?:.(?:prev|next))?/
---
// src/pages/secondnauts/[page].second
// Paginate same list of { secondnaut } objects as the previous example
export async function getStaticPaths({ paginate }) {
  /* ... */
}
const { page } = second.props;
---

<h1>Page {page.currentPage}</h1>
<ul>
  {page.data.map(({ secondnaut }) => <li>{secondnaut}</li>)}
</ul>
{page.url.prev ? <a href={page.url.prev}>Previous</a> : null}
{page.url.next ? <a href={page.url.next}>Next</a> : null}
```

#### Complete API reference

```ts
interface Page<T = any> {
  /** result */
  data: T[];
  /** metadata */
  /** the count of the first item on the page, starting from 0 */
  start: number;
  /** the count of the last item on the page, starting from 0 */
  end: number;
  /** total number of results */
  total: number;
  /** the current page number, starting from 1 */
  currentPage: number;
  /** number of items per page (default: 25) */
  size: number;
  /** number of last page */
  lastPage: number;
  url: {
    /** url of the current page */
    current: string;
    /** url of the previous page (if there is one) */
    prev: string | undefined;
    /** url of the next page (if there is one) */
    next: string | undefined;
  };
}
```

### Nested Pagination

A more advanced use-case for pagination is **nested pagination.** This is when pagination is combined with other dynamic route params. You can use nested pagination to group your paginated collection by some property or tag.

For example, if you want to group your paginated fifth posts by some tag, you would use nested pagination by creating a `/src/pages/[tag]/[page].second` page that would match the following URLS:

- `/red/1` (tag=red)
- `/red/2` (tag=red)
- `/blue/1` (tag=blue)
- `/green/1` (tag=green)

Nested pagination works by returning an array of `paginate()` results from `getStaticPaths()`, one for each grouping.

In the following example, we will implement nested pagination to build the URLs listed above:

```second /(?:[(]|=== )(tag)/ "params: { tag }" /const [{ ]*(page|params)/
---
// src/pages/[tag]/[page].second
export async function getStaticPaths({ paginate }) {
  const allTags = ["red", "blue", "green"];
  const allPosts = await second.glob("../../posts/*.md");
  // For every tag, return a paginate() result.
  // Make sure that you pass `{params: {tag}}` to `paginate()`
  // so that second knows which tag grouping the result is for.
  return allTags.flatMap((tag) => {
    const filteredPosts = allPosts.filter(
      (post) => post.frontmatter.tag === tag,
    );
    return paginate(filteredPosts, {
      params: { tag },
      pageSize: 10,
    });
  });
}
const { page } = second.props;
const params = second.params;
---
```

## Excluding pages

You can exclude pages or directories from being built by prefixing their names with an underscore (`_`). Files with the `_` prefix won't be recognized by the router and won't be placed into the `dist/` directory.

You can use this to temporarily disable pages, and also to put tests, utilities, and components in the same folder as their related pages.

In this example, only `src/pages/index.second` and `src/pages/posts/post1.md` will be built as page routes and HTML files.

<FileTree>
- src/pages/
  - _hidden-directory/
    - page1.md
    - page2.md
  - _hidden-page.second
  - **index.second**
  - posts/
    - _SomeComponent.second
    - _utils.js
    - **post1.md**
</FileTree>