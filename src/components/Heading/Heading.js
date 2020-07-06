/**
 * Copyright (c) 2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import { toSlug } from "~/utils";

const Heading = (props) => {
  var usedSlugs = props.usedSlugs || {};
  var append = "";
  var loopCount = 0;
  do {
    var slug = toSlug((props.toSlug || props.children) + append);
    append = "-" + ++loopCount;
  } while (usedSlugs[slug]);
  usedSlugs[slug] = slug;
  var Heading = "h" + props.level;
  var url = props.url || "";

  return (
    <Heading {...props}>
      <a className="anchor" name={slug}></a>
      {props.children}{" "}
      <a className="hash-link" href={url + "#" + slug}>
        #
      </a>
    </Heading>
  );
};

export default Heading;
