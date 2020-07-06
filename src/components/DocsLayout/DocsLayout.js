/**
 * Copyright (c) 2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import path from "path";
import React from "react";
import Layout from "~/components/Layout";
import Marked from "~/components/Marked";
import DocsSidebar from "~/components/DocsSidebar";

const DocsLayout = ({ page, site }) => (
  <Layout section="docs" title={page.title} page={page}>
    <section>
      <div className="documentationContent">
        <div className="inner-content">
          <h1>{page.title}</h1>
          <Marked>{page.content}</Marked>
          {page.next && (
            <a className="read-next" href={path.resolve(page.url, page.next)}>
              <span className="read-next-continue">
                Continue Reading &rarr;
              </span>
              <span className="read-next-title">{page.nextPage.title}</span>
            </a>
          )}
        </div>
        <DocsSidebar site={site} page={page} />
      </div>
    </section>
  </Layout>
);

export default DocsLayout;
