import React from "react";
import { findPageContent } from "~/utils";
import DocsLayout from "~/components/DocsLayout";

const PageStart = () => {
  const content = findPageContent("learn", "/");

  if (content) {
    return <DocsLayout page={content} />;
  }
  return "";
};

export default PageStart;
