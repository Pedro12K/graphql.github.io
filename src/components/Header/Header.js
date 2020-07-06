import React from "react";
import HeaderLinks from "~/components/HeaderLinks";
import Search from "~/components/Search";

const Header = ({ noSearch, section }) => (
  <header>
    <section>
      <a className="nav-home" href="/">
        <img
          className="nav-logo"
          src="/img/logo.svg"
          alt="GraphQL Logo"
          width="30"
          height="30"
        />
        GraphQL
      </a>
      <HeaderLinks section={section} />
      {noSearch || <Search />}
    </section>
  </header>
);

export default Header;
