import React from "react";
import Head from "next/head";
import { SITE_DATA } from "~/constants";
import "../less/index.less";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <title>
          GraphQL | {SITE_DATA.description}
          {/* {title
            ? `${title} | ${category || "GraphQL"}`
            : `GraphQL | ${SITE_DATA.description}`} */}
        </title>
        <meta name="viewport" content="width=640" />
        <meta
          name="description"
          content="GraphQL provides a complete description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools."
        />
        <meta
          property="og:title"
          content="GraphQL: A query language for APIs."
        />
        <meta
          property="og:description"
          content="GraphQL provides a complete description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://graphql.org/" />
        <meta property="og:image" content="/img/og_image.png" />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@graphql" />
        <meta
          name="twitter:title"
          content="GraphQL: A query language for APIs."
        />
        <meta
          name="twitter:description"
          content="GraphQL gives clients the power to ask for exactly what they need and nothing more, making it easier to evolve APIs over time."
        />
        <meta name="twitter:image" content="/img/twitter_image.png" />
        <link rel="shortcut icon" href="/img/favicon.png" />
        <link
          rel="home"
          type="application/rss+xml"
          href="/blog/rss.xml"
          title="GraphQL Team Blog"
        />
        <link rel="stylesheet" href="/style.css" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Rubik:300|Roboto:300"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,400i,600"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/docsearch.js/1/docsearch.min.css"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
