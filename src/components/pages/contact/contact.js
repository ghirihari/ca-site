import React from "react";
import "./contact.css";
import { ImLocation2 } from "react-icons/im";
import { GiRotaryPhone } from "react-icons/gi";
import { IoIosMail } from "react-icons/io";

const Contact = ({ links, data, aboutData }) => {
  console.log(data, links);

  const address = links.address;
  return (
    <div className="expContainer" style={{ margin: "0px" }}>
      <div className="contentTitle">
        <label className="subtitle">{data.title}</label>
        <hr className="line" />
      </div>

      <div
        className="col d-lg-none"
        style={{ display: "flex", alignItems: "center" }}
      >
        <div className="contactCard">
          <h1>{data.name}</h1>
          <div>
            <ImLocation2 size={32} style={{ minWidth: "32px" }} />
            <div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={address.link}
                className="locationLink"
              >
                {address.text}
              </a>
            </div>
          </div>
          <div>
            <IoIosMail size={32} />
            <label>{links.email}</label>
          </div>
          <div>
            <GiRotaryPhone size={32} />
            <label>
              {links.phone[0]} / {links.phone[1]}
            </label>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="expContainer" style={{ margin: "20px 0px" }}>
          <div className="row">
            <div
              className="col d-none d-lg-block"
              style={{ display: "flex", alignItems: "center" }}
            >
              <div className="contactCard">
                <h2>{data.name}</h2>
                <div>
                  <ImLocation2 size={32} />
                  <div>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={address.link}
                      className="locationLink"
                    >
                      {address.text}
                    </a>
                  </div>
                </div>
                <div>
                  <IoIosMail size={32} />
                  <label>{links.email}</label>
                </div>
                <div>
                  <GiRotaryPhone size={32} />
                  <label>
                    {links.phone[0]} / {links.phone[1]}
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
