import React from "react";

const links = [
  { section: "learn", text: "Learn", href: "/learn" },
  { section: "code", text: "Code", href: "/code" },
  { section: "community", text: "Community", href: "/community" },
  {
    section: "spec",
    text: "Spec",
    href: "https://graphql.github.io/graphql-spec/",
  },
  {
    section: "codeofconduct",
    text: "Code of Conduct",
    href: "/codeofconduct/",
  },
  {
    section: "foundation",
    text: "Foundation",
    href: "https://foundation.graphql.org/",
  },
  { section: "landscape", text: "Landscape", href: "https://l.graphql.org/" },
];

const HeaderLinks = ({ section }) => (
  <nav>
    {links.map((link) => (
      <a
        key={link.section}
        href={link.href}
        target={link.href.slice(0, 4) === "http" ? "_blank" : null}
        rel={link.href.slice(0, 4) === "http" ? "noopener noreferrer" : null}
        className={link.section === section ? "active" : null}
      >
        {link.text}
      </a>
    ))}
  </nav>
);

export default HeaderLinks;
