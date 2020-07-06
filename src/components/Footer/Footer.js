import React from "react";

const Footer = ({ page }) => (
  <footer>
    <section className="sitemap">
      <a href="/" className="nav-home" aria-label="Homepage" />
      <div>
        <h5>
          <a href="/learn/">Learn</a>
        </h5>
        <a href="/learn/">Introduction</a>
        <a href="/learn/queries/">Query Language</a>
        <a href="/learn/schema/">Type System</a>
        <a href="/learn/execution/">Execution</a>
        <a href="/learn/best-practices/">Best Practices</a>
      </div>
      <div>
        <h5>
          <a href="/code">Code</a>
        </h5>
        <a href="/code/#server-libraries">Servers</a>
        <a href="/code/#graphql-clients">Clients</a>
        <a href="/code/#tools">Tools</a>
      </div>
      <div>
        <h5>
          <a href="/community">Community</a>
        </h5>
        <a href="/community/upcoming-events/">Upcoming Events</a>
        <a
          href="http://stackoverflow.com/questions/tagged/graphql"
          target="_blank"
          rel="noopener noreferrer"
        >
          Stack Overflow
        </a>
        <a
          href="https://www.facebook.com/groups/graphql.community/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook Group
        </a>
        <a
          href="https://twitter.com/GraphQL"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
      </div>
      <div>
        <h5>More</h5>
        <a
          href="https://graphql.github.io/graphql-spec/"
          target="_blank"
          rel="noopener noreferrer"
        >
          GraphQL Specification
        </a>
        <a
          href="https://foundation.graphql.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          GraphQL Foundation
        </a>
        <a
          href="https://github.com/graphql"
          target="_blank"
          rel="noopener noreferrer"
        >
          GraphQL GitHub
        </a>
        {page && (
          <a
            href={
              "https://github.com/graphql/graphql.github.io/edit/source/site/" +
              page.relPath
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            Edit this page &#x270E;
          </a>
        )}
      </div>
    </section>
    <section className="copyright">
      Copyright © {new Date().getFullYear()} The GraphQL Foundation. All rights
      reserved. The Linux Foundation has registered trademarks and uses
      trademarks. For a list of trademarks of The Linux Foundation, please see
      our{" "}
      <a href="https://www.linuxfoundation.org/trademark-usage">
        Trademark Usage
      </a>{" "}
      page. Linux is a registered trademark of Linus Torvalds.{" "}
      <a href="http://www.linuxfoundation.org/privacy">Privacy Policy</a> and{" "}
      <a href="http://www.linuxfoundation.org/terms">Terms of Use</a>.
    </section>
  </footer>
);

export default Footer;
