import React from "react";

const GraphqlDemo = ({ token }) => {
  React.useEffect(() => {
    let script;
    let lines = token.text.split("\n");
    let firstLine = lines.shift().match(/^\s*#\s*({.*})$/);
    if (firstLine) {
      let metaData;
      try {
        metaData = JSON.parse(firstLine[1]);
      } catch (e) {
        console.error("Invalid Metadata JSON:", firstLine[1]);
      }
      if (metaData) {
        let query = lines.join("\n");
        let variables = metaData.variables
          ? JSON.stringify(metaData.variables, null, 2)
          : "";
        script = document.createElement("script");
        script.type = "text/babel";
        script.innerHTML = `
              import ReactDom from "../node_modules/react-dom"
              import MiniGraphiQL from '../src/components/MiniGraphiQL';
              import { StarWarsSchema } from '../src/graphql/swapiSchema.js';
              ReactDom.render(<MiniGraphiQL schema={StarWarsSchema}
                query={\`${query}\`} variables={\`${variables}\`} />);
            `;
        script.async = true;
        document.body.appendChild(script);
      }
    }
    return () => document.body.appendChild(script);
  }, []);
  return "";
};

export default GraphqlDemo;
