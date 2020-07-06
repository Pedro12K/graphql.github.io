import _ from "lodash";
import contentMap from "../../outputContent/summary.json";

function findPageCategories(menu) {
  const contents = Object.values(contentMap.fileMap).filter(
    (content) => content.menu === menu
  );
  let categories = _.orderBy(contents, "categoryOrder")
  categories = _.groupBy(categories, "category")
  return Object.keys(categories).map(cat => ({
    name: cat,
    links: _.orderBy(categories[cat], "pageOrder")
  }));
}

export default findPageCategories;
