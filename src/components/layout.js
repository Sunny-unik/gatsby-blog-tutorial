import * as React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
} from "../styles/layout.module.css";

const Layout = ({ pageTitle, children }) => {
  const siteData = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <main className={container}>
      <title>
        {pageTitle} | {siteData.site.siteMetadata.title}
      </title>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/">
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/about">
              About
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/documentation">
              Documentation links
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/blog">
              Blogs
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </main>
  );
};

export default Layout;
