import { graphql } from "gatsby";
import * as React from "react";
import Layout from "../../components/layout";

export default function BlogPage({ data: { mdx }, children }) {
  return (
    <Layout pageTitle={mdx.frontmatter.title}>
      <div>{mdx.frontmatter.date}</div>
      {children}
    </Layout>
  );
}

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        date(formatString: "dddd Do MM YYYY")
        title
        slug
      }
    }
  }
`;
