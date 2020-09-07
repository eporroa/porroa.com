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

import "normalize.css";
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
            <h2>Recent Posts</h2>
            <div class="post">
              <div class="meta"><a href="#">Project Management</a><small>Jan 5, 2018</small></div>
              <h2><a href="#">Sony launches Morgans Facebook App</a></h2>
              <div class="just-text post-body">
                <p>When it was announced a while back that Zend was going to include <a href="#">AMF (Action Message Format)</a> functionality supported by Adobe, I was excited to hear that there would be an "official" way to use AMF with PHP, as I had used AMFPHP, an unsupported implementation, with mixed success. I experimented with Zend AMF a little when it was released, and there were two things that annoyed me about this implementation as compared with <a href="#">AMFPHP</a>, but I revisited it this week and discovered remedies for both issues.</p>
              </div><a class="link-comm" href="#">8 Comments</a><a class="link-more" href="#">More</a>
            </div>
            <div class="post">
              <div class="meta"><a href="#">Design</a><small>Jan 5, 2018</small></div>
              <h2><a href="#">Making the A-List</a></h2>
              <div class="just-text post-body">
                <p>As many Think readers already know, Big Spaceship was one of the founding agencies in a non-profit association called the <a href="#">Society of Digital Agencies (SoDA</a>). SoDA brings together a range of amazing digital agencies (41, at current count) from around the world, all of whom share a common desire to advance the field of digital marketing. This year, that shared desire led to the publication of <a href="#">The SoDA 2010 Digital Marketing Outlook</a>, a fantastic collection of articles and thought pieces from SoDA members.</p>
              </div><a class="link-comm" href="#">8 Comments</a><a class="link-more" href="#">More</a>
            </div>
            {children}
          </div>
        </div>
        <div id="side-col">
          <div class="side-div">
            <div class="just-text">
              <h2>Follow me</h2>
              <div class="follow just-text">
                <ul id="social">
                  <li><a href="https://twitter.com/eporroa" target="_blank"><span class="icon-fa-twitter"></span>on Twitter</a></li>
                  <li><a href="http://fb.me/eporroa" target="_blank"><span class="icon-fa-facebook"></span>on Facebook</a></li>
                  <li><a href="https://linkedin.com/in/eporroa" target="_blank"><span class="icon-fa-linkedin"></span>on Linkedin</a></li>
                  <li><a href="https://www.youtube.com/user/eporroa" target="_blank"><span class="icon-fa-youtube"></span>on YouTube</a></li>
                  <li><a href="http://github.com/eporroa" target="_blank"><span class="icon-fa-github"></span>on Github</a></li>
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
