import React from "react";

const InfoBar = ({ link, data, scrollToSection }) => {
  return (
    <div
      style={{
        marginLeft: "auto",
        display: "flex",
        alignItems: "center",
        marginRight: -24,
      }}
    >
      {/* {items.map((item, index) => (
        <div className="infoBarItem" key={index}>
          {item.icon}
          <label className="infoBarLabel">{item.label}</label>
        </div>
      ))}
      {links.map((item, index) => (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          key={index}
        >
          <div className="infoBarItem">
            {item.icon}
            {item.text && <label className="infoBarLabel">{item.text}</label>}
          </div>
        </a>
      ))} */}
      <button
        className="btn btn-accent buttonText"
        onClick={() => scrollToSection("contactSection")}
      >
        {data.banner.button}
        <svg
          className="CarouselIcon feather feather-chevron-right"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
    </div>
  );
};

export default InfoBar;
