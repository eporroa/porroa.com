import React from "react";

import TwitterFollowButton from "../TwitterFollowButton";

const Footer = () => {
  return (
    <div className="footer wrapper">
      <footer>
        <div id="footer-info">
          <div className="contact-info">
            <p>
              <strong>Contact</strong>
              <span className="label">linkedin: </span><a href="https://www.linkedin.com/in/eporroa/">Send me a message!</a>
              <br />
              <span className="label">skype: </span><a href="https://join.skype.com/invite/rhzEro96c1hN">eporroa</a>
            </p>
          </div>
          <div className="social-networks-follow">
            <p>
              <strong>Follow</strong>
              <TwitterFollowButton />
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
