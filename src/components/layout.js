import React from "react";
import { css } from "@emotion/core";
import { StaticQuery, Link, graphql } from "gatsby";
import { rhythm } from "../utils/typography";
import { Helmet } from "react-helmet";

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>
      <h3 css={props.css}>{props.children}</h3>
    </Link>
  </li>
);

export default ({ children }) => (
  //non-page components는 staticQuery 사용
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div
        css={css`
          margin: 0 auto;
          max-width: 700px;
          padding: ${rhythm(2)};
          padding-top: ${rhythm(1.5)};
        `}
      >
        <Helmet>
          <meta charSet="utf-8" />
          <title>gatsby tutorial site</title>
          <link rel="canonical" href="http://haneulee.github.io" />
        </Helmet>
        <header style={{ marginBottom: `1.5rem` }}>
          <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
            <h3 style={{ display: `inline` }}>{data.site.siteMetadata.title}</h3>
          </Link>
          <ul style={{ listStyle: `none`, float: `right` }}>
            <ListLink
              to="/"
              css={css`
                margin-bottom: ${rhythm(2)};
                display: inline-block;
                font-style: normal;
              `}
            >
              Home
            </ListLink>
            <ListLink
              to="/about/"
              css={css`
                float: right;
              `}
            >
              About
            </ListLink>
            <ListLink to="/contact/">Contact</ListLink>
          </ul>
        </header>
        {children}
      </div>
    )}
  />
);
