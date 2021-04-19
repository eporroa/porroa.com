/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./Header";
import Footer from "./Footer";
import BrowseHappy from "./browserhappy";

// import "normalize.css";
import "../assets/fonts/style.css"
import "../scss/main.scss";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <BrowseHappy />
      <div className="content wrapper">
        <Header siteTitle={data.site.siteMetadata.title} />
        <main id="content">
        <div id="main">
          <div class="posts-holder">
            {children}
          </div>
        </div>
        <div id="side-col">
          <div class="side-div">
            <div class="just-text">
              <h2>FollowMe@</h2>
              <div class="follow just-text">
                <ul id="social">
                  <li><a href="https://twitter.com/eporroa" rel="noreferrer" target="_blank"><span class="icon-fa-twitter"></span> Twitter</a></li>
                  <li><a href="http://fb.me/eporroa" rel="noreferrer" target="_blank"><span class="icon-fa-facebook"></span> Facebook</a></li>
                  <li><a href="https://linkedin.com/in/eporroa" rel="noreferrer" target="_blank"><span class="icon-fa-linkedin"></span> Linkedin</a></li>
                  <li><a href="https://www.youtube.com/user/eporroa" rel="noreferrer" target="_blank"><span class="icon-fa-youtube"></span> YouTube</a></li>
                  <li><a href="http://github.com/eporroa" rel="noreferrer" target="_blank"><span class="icon-fa-github"></span> Github</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
