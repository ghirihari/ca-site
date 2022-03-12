import React from 'react'
import { Link } from 'react-router-dom';
import Image0 from "../../../assets/image0.jpg";
import Image1 from "../../../assets/image1.jpg";

const Carousel = () => {

    const rightButtonIcon = <svg className="feather feather-chevron-right CarouselIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>;
    
    return (
        <div className="carousel-container d-none d-lg-block">
            <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={Image0} className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <div className="caption">
                                <label className="carousel-caption-title">Effective Tax strategy</label>
                                <Link to={'./services'}>
                                    <button className="btn btn-warning buttonText">Our Services
                                        {rightButtonIcon}
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={Image1} className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <div className="caption">
                                <label className="carousel-caption-title">Comprehensive business solutions</label>
                                <Link to={'./about'}>
                                    <button className="btn btn-warning buttonText">About us
                                        {rightButtonIcon}
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>    
    )
}

export default Carousel