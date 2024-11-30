import React from "react";
import "./contact.css";
import { FaMapMarkedAlt } from "react-icons/fa";
import { MdAddCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";

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
          fontFamily: "var(--titleFont)",
        }}
      >
        <span style={{ fontWeight: 600 }}>{label}</span>
        <span style={{ fontSize: "14px", maxWidth: "300px", color: "#1f1f1f" }}>
          {value}
        </span>
      </div>
    </div>
  );
};

const Contact = ({ links, data, aboutData }) => {
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
          <div>
            <IconContainer
              Icon={<FaMapMarkedAlt size={32} />}
              label={"Location"}
              value={<NewTabLink link={address.link} text={address.text} />}
            />
          </div>
          <div>
            <IconContainer
              Icon={<MdEmail size={32} />}
              label={"Email ID"}
              value={links.email}
            />
          </div>
          <div>
            <IconContainer
              Icon={<MdAddCall size={32} />}
              label={"Phone Number"}
              value={`${links.phone[0]} / ${links.phone[1]}`}
            />
          </div>
          {/* <div>
            <IconContainer
              Icon={<SiLinkedin size={32} />}
              label={"LinkedIn"}
              value={<NewTabLink link={links.linkedIn} text={links.linkedIn} />}
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
          </div> */}
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
                <div>
                  <IconContainer
                    Icon={<FaMapMarkedAlt size={32} />}
                    label={"Location"}
                    value={
                      <NewTabLink link={address.link} text={address.text} />
                    }
                  />
                </div>
                <div>
                  <IconContainer
                    Icon={<MdEmail size={32} />}
                    label={"Email ID"}
                    value={links.email}
                  />
                </div>
                <div>
                  <IconContainer
                    Icon={<MdAddCall size={32} />}
                    label={"Phone Number"}
                    value={`${links.phone[0]} / ${links.phone[1]}`}
                  />
                </div>
                {/* <div>
                  <IconContainer
                    Icon={<SiLinkedin size={32} />}
                    label={"LinkedIn"}
                    value={
                      <NewTabLink link={links.linkedIn} text={links.linkedIn} />
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
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
