import contentMap from "../../outputContent/summary.json";

function findContent(menu, path) {
  const content = Object.values(contentMap.fileMap).find(
    (content) => content.menu === menu && content.path === path
  );
  return (
    content && {
      ...content,
      content: content.bodyContent,
      nextPage: findNextPage(content.next),
    }
  );
}

function findNextPage(nextPagePath) {
  return Object.values(contentMap.fileMap).find(
    (content) => content.permalink === nextPagePath
  );
}

export default findContent;
