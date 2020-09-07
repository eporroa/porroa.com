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
              <span className="label">mail: </span>erik[@]porroa.com
              <br />
              <span className="label">skype: </span>eporroa
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
