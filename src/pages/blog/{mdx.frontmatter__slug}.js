import { graphql } from "gatsby";
import * as React from "react";
import Layout from "../../components/layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function BlogPage({ data: { mdx }, children }) {
  const heroImage = getImage(mdx.frontmatter.heroImageSrc);

  return (
    <Layout pageTitle={mdx.frontmatter.title}>
      <GatsbyImage image={heroImage} loading="lazy" alt={mdx.frontmatter.heroImageAlt} />
      <div style={{ marginTop: "6px", display: "inline-block" }}>{mdx.frontmatter.date}</div>{" "}
      <a href={mdx.frontmatter.heroImageCreditLink} target="_blank">
        {mdx.frontmatter.heroImageCreditText}
      </a>
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
        heroImageAlt
        heroImageCreditLink
        heroImageCreditText
        heroImageSrc {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;
