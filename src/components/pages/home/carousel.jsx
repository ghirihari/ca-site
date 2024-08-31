import React from "react";
import Image0 from "../../../assets/image0.jpg";
import Image1 from "../../../assets/image1.jpg";

const Carousel = ({ data: carouselData }) => {
  return (
    <div className="carousel-container d-lg-block">
      <div
        id="carouselExampleCaptions"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Image0} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-md-block">
              <div className="caption">
                <label className="carousel-caption-title">
                  {carouselData[0].title}
                </label>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Image1} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-md-block">
              <div className="caption">
                <label className="carousel-caption-title">
                  {carouselData[1].title}
                </label>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
