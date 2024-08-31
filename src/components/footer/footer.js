import React from "react";

import "./footer.css";
import { SiLinkedin, SiTwitter } from "react-icons/si";

const Footer = ({ navigation, links }) => {
  console.log(links);
  const linkData = [
    {
      icon: <SiTwitter size="24px" />,
      link: links.twitter.link,
    },
    {
      icon: <SiLinkedin size="24px" />,
      link: links.linkedIn,
    },
  ];
  return (
    <div className="bannerBG">
      <div className="banner blueOverlay">
        <div className="footer">
          <div className="container footerLinks">
            <div className="m-3">
              {linkData.map((item, index) => (
                <a
                  key={index}
                  className="me-3 iconButton"
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.icon}
                </a>
              ))}
            </div>

            <label className="footerTitle m-3">JVishnuCA.in</label>
            <label className="">{links.address.text}</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
