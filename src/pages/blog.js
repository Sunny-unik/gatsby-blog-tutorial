import * as React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";

export default function blog({ data: { allMdx } }) {
  return (
    <Layout pageTitle="Blog Page">
      <h4>All blog links are:</h4>
      <ul>
        {allMdx.nodes.map(({ frontmatter, id, body }) => (
          <li key={id}>
            <p>
              {frontmatter.title}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{frontmatter.date}
            </p>
            <br />
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export const defaultQuery = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          title
          date(fromNow: true)
        }
        id
        body
      }
    }
  }
`;
