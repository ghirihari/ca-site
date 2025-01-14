import React from "react";
// Images
import Image1 from "../../assets/tax-min.jpg";
import Image2 from "../../assets/audit-min.jpg";
import Image3 from "../../assets/business-min.jpg";
import Image4 from "../../assets/support.jpg";
import Image5 from "../../assets/audit2-min.jpg";
import Image6 from "../../assets/law.jpg";

const Card = ({ item, index }) => {
  return (
    <div className="col" style={{ padding: "26px 8px", margin: 0 }}>
      <div className="cardStyles">
        <img
          alt={`Expirience-${index}`}
          src={item.image}
          style={{
            width: "75px",
            height: "75px",
            position: "relative",
            top: -35,
            left: 0,
            borderRadius: "5px",
          }}
        />
        <div style={{ position: "relative", top: -30 }}>
          <h3
            className="playFair"
            style={{ marginBottom: "16px", fontWeight: "600" }}
          >
            {item.captionTitle}
          </h3>
          <div
            className="textSub"
            style={{
              color: "#fafafa",
            }}
          >
            {item.captionText}
          </div>
        </div>
      </div>
    </div>
  );
};

const Experience = ({ title, count, services }) => {
  const servicesData = [
    {
      image: Image1,
      captionTitle: services.title[0],
      captionText: services.text[0],
    },
    {
      image: Image2,
      captionTitle: services.title[1],
      captionText: services.text[1],
    },
    {
      image: Image3,
      captionTitle: services.title[2],
      captionText: services.text[2],
    },
    {
      image: Image4,
      captionTitle: services.title[3],
      captionText: services.text[3],
    },
    {
      image: Image5,
      captionTitle: services.title[4],
      captionText: services.text[4],
    },
    {
      image: Image6,
      captionTitle: services.title[5],
      captionText: services.text[5],
    },
  ];

  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mb-3">
      {servicesData.map((item, index) => (
        <Card item={item} index={index} />
      ))}
    </div>
  );
};

export default Experience;
