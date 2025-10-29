import React from 'react';

function About() {
  return (
    <section className="tc-about-style5">
      <div className="container">
        <div className="content">
          <h2 className="about-title mb-150 js-splittext-lines">
            <span className="color-brown1">About Fenkin Reality</span>
            <br /> with five stars residential services <br /> in your home
          </h2>
          <div className="main-content">
            <div className="row justify-content-between">
              <div className="col-lg-2 wow fadeInUp slow" data-wow-delay="0.2s">
                <div className="text">
                  exclusive from <br /> Fenkin <br /> 
                </div>
                <div className="logo-mo mt-60 th-160 op-4">
                  <img
                    src="/home5_residence/assets/images/logo_mo.png"
                    alt=""
                    className="img-contain"
                  />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="img wow zoomIn slow" data-wow-delay="0.2s">
                  <img
                    src="/home5_residence/assets/images/fenkinbannerimage.jpg"
                    alt=""
                    className="img-cover"
                  />
                </div>
              </div>
              <div className="col-lg-3">
                <h6 className="color-brown1 text-uppercase fsz-24 lh-4 js-splittext-lines">
                  Only once in a generation, there comes an entity that envisions a concrete revolution 
                </h6>
                <p
                  className="fsz-13 mt-40 wow zoomIn slow"
                  data-wow-delay="0.2s"
                >
                  Over the past 3 decades, Fenkin Realty has carved a niche in the Real Estate industry and has grown from strength to strength, laying each brick with strong ethics and morals. The development has been multi-faceted and richly diversified across the verticals of residential and commercial spaces.
                </p>
                <a
                  href="#"
                  className="butn border rounded-pill border-brown1 hover-bg-black text-uppercase bg-brown1 color-000 mt-100 wow fadeInUp slow"
                  data-wow-delay="0.3s"
                >
                  <span> about project </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        src="/home5_residence/assets/images/about.png"
        alt=""
        className="float_img"
      />
      <span className="lg-txt js-title sub-font"> about </span>
    </section>
  );
}

export default About;
