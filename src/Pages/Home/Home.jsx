// import TestimonialsSlider from "../../Components/Testimonials/TestMonials";

import { AboutUs } from "../../Components/AboutComp/Aboutus";
import { FaQData } from "../../Components/FaQ/Faq";
import { Featureweb } from "../../Components/Features/Features";
import { ServiceComp } from "../../Components/ServiceWEB/Service";

export default function Home() {
  return (
    <>
      {/* Hero Header Start */}
      <div className="hero-header overflow-hidden px-5">
        <div className="rotate-img">
          {/* Image path updated to public folder */}
          <img
            src="/images/sty-1.png"
            className="img-fluid w-100"
            alt="Style"
          />
          <div className="rotate-sty-2"></div>
        </div>
        <div className="row gy-5 align-items-center">
          <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.1s">
            <h1 className="display-4 text-dark mb-4 wow fadeInUp" data-wow-delay="0.3s">
              Turn Emails into Revenue
            </h1>
            <p className="fs-4 mb-4 wow fadeInUp" data-wow-delay="0.5s">
              Win new customers with the #1 email marketing and automations brand* that recommends ways to get more opens, clicks, and sales.
            </p>
            <a
              href="#"
              className="btn btn-primary rounded-pill py-3 px-5 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              Get Started
            </a>
          </div>
          <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.2s">
            {/* Image path updated to public folder */}
            <img
              src="/images/hero-img-1.png"
              className="img-fluid w-100 h-100"
              alt="Hero"
            />
          </div>
        </div>
      </div>
      {/* Hero Header End */}


      {/* About Start  */}
        
        {/* About End  */}
      
      {/* <!-- About Start --> */}
       <AboutUs />
        {/* <!-- About End --> */}

        {/* Service Start */}
           <ServiceComp />
        {/*  Service End */}


        {/* Feature Start */}
        <Featureweb />
        {/*  Feature End  */}
        <div>
             <FaQData />
        </div>
</>
      
  
  );
}
