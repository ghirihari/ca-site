import React from "react";
import "./contact.css";
import { ImLocation2 } from "react-icons/im";
import { GiRotaryPhone } from "react-icons/gi";
import { IoIosMail } from "react-icons/io";
import { SiLinkedin, SiTwitter } from "react-icons/si";
import ContactUs from "../../../assets/contact.png";

const IconContainer = ({ Icon, label, value }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: 8,
      }}
    >
      <div
        style={{
          background: "var(--blue)",
          width: "56px",
          height: "56px",
          padding: "12px",
          borderRadius: "12px",
        }}
      >
        {Icon}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <span style={{ fontWeight: 600 }}>{label}</span>
        <span style={{ fontSize: "14px", maxWidth: "300px" }}>{value}</span>
      </div>
    </div>
  );
};

const NewTabLink = ({ link, text }) => {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={link}
      className="locationLink"
    >
      {text}
    </a>
  );
};

const Contact = ({ links, data, aboutData }) => {
  console.log("ghiri", links);
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
              <div style={{ display: "flex" }}>
                <div>
                  {/* <img
                    src={ContactUs}
                    alt="ContactUS"
                    style={{ width: "50px" }}
                  /> */}
                </div>
                <div className="contactCard">
                  <h2>{data.name}</h2>
                  <div>
                    <IconContainer
                      Icon={<ImLocation2 size={32} />}
                      label={"Location"}
                      value={
                        <NewTabLink link={address.link} text={address.text} />
                      }
                    />
                  </div>
                  <div>
                    <IconContainer
                      Icon={<IoIosMail size={32} />}
                      label={"Email ID"}
                      value={links.email}
                    />
                  </div>
                  <div>
                    <IconContainer
                      Icon={<GiRotaryPhone size={32} />}
                      label={"Phone Number"}
                      value={`${links.phone[0]} / ${links.phone[1]}`}
                    />
                  </div>
                  <div>
                    <IconContainer
                      Icon={<SiLinkedin size={32} />}
                      label={"LinkedIn"}
                      value={
                        <NewTabLink
                          link={links.linkedIn}
                          text={links.linkedIn}
                        />
                      }
                    />
                  </div>
                  <div>
                    <IconContainer
                      Icon={<SiTwitter size={32} />}
                      label={"X"}
                      value={
                        <NewTabLink
                          link={links.twitter.link}
                          text={links.twitter.userid}
                        />
                      }
                    />
                  </div>
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
