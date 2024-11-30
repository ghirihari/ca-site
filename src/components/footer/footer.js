import React from "react";

import "./footer.css";
import { FaMapMarkedAlt } from "react-icons/fa";
import { MdAddCall } from "react-icons/md";

const Footer = ({ navigation, links }) => {
  console.log(links);
  const linkData = [
    {
      icon: <FaMapMarkedAlt size="24px" />,
      link: links.address.link,
    },
    {
      icon: <MdAddCall size="24px" />,
      link: "tel:+91-8122019830",
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

            <label className="footerTitle m-3">
              A Jayachandran & Associates
            </label>
            <label className="">{links.address.text}</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
