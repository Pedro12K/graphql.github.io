import React from "react";
import { useRouter } from "next/router";
import { findPageContent } from "~/utils";
import DocsLayout from "~/components/DocsLayout";

const Page = () => {
  const router = useRouter();
  const { path } = router.query;
  const content = findPageContent("learn", path || "/");

  if (content) {
    return <DocsLayout page={content} />;
  }
  return "";
};

export default Page;
