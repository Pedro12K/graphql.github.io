/**
 * Copyright (c) 2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import { toSlug, findPageCategories } from "~/utils";

const DocsSidebar = ({ page }) => {
  const categories = findPageCategories(page.menu)
  return (
    <div className="nav-docs">
      {categories.map((category) => (
        <SidebarForCategory
          category={category}
          key={category.name}
          pageID={page.id}
        />
      ))}
    </div>
  );
}


// pageID is the id of the rendering page
// category is the category object to render a sidebar for
function SidebarForCategory({ pageID, category }) {
  const listItems = category.links.map((page) => {
    const shouldOpenInNewWindow = (page.url || "").slice(0, 4) === "http";
    const target = shouldOpenInNewWindow ? "_blank" : null;
    const rel = shouldOpenInNewWindow ? "noopener noreferrer" : null;

    // Link for the main page overall
    return (
      <li key={page.permalink}>
        <a
          target={target}
          rel={rel}
          style={{ marginLeft: page.indent ? 20 : 0 }}
          className={page.id === pageID ? "active" : null}
          href={page.permalink}
        >
          {page.sidebarTitle || page.title}
        </a>
        {page.sublinks && ( // Sublinks to any page sub-parts
          <ul>
            {page.sublinks.split(",").map((sublink) => (
              <li key={sublink}>
                <a
                  target={target}
                  rel={rel}
                  href={page.permalink + "#" + toSlug(sublink)}
                >
                  {sublink}
                </a>
              </li>
            ))}
          </ul>
        )}
      </li>
    );
  });

  return (
    <div>
      <h3>{category.name}</h3>
      <ul>{listItems}</ul>
    </div>
  );
}


export default DocsSidebar