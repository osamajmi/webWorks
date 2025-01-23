import './Footer.css';


import  { useEffect } from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
    useEffect(() => {
        const handleScroll = () => {
            const backToTopButton = document.querySelector(".back-to-top");
            if (window.scrollY > 300) {
                backToTopButton.style.display = "block";
            } else {
                backToTopButton.style.display = "none";
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            {/* Footer Start */}
            <div className="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s">
                <div className="container py-5">
                <div className="row g-5">
    <div className="col-6 col-md-6 col-lg-3">
        <div className="footer-item d-flex flex-column">
            <h4 className="text-dark mb-4">Company</h4>
            <Link to="/why-mailler">Why Mailler?</Link>
            <Link to="/features">Our Features</Link>
            <Link to="/portfolio">Our Portfolio</Link>
            <Link to="/about">About Us</Link>
            <Link to="/blog">Our Blog & News</Link>
            <Link to="/contact">Get In Touch</Link>
        </div>
    </div>
    <div className="col-6 col-md-6 col-lg-3">
        <div className="footer-item d-flex flex-column">
            <h4 className="mb-4 text-dark">Quick Links</h4>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms">Terms & Conditions</Link>
            <Link to="/blog">Our Blog & News</Link>
            <Link to="/team">Our Team</Link>
        </div>
    </div>
    <div className="col-6 col-md-6 col-lg-3">
        <div className="footer-item d-flex flex-column">
            <h4 className="mb-4 text-dark">Services</h4>
            <Link to="/services">All Services</Link>
            <Link to="/promotional-emails">Promotional Emails</Link>
            <Link to="/product-updates">Product Updates</Link>
            <Link to="/email-marketing">Email Marketing</Link>
            <Link to="/acquisition-emails">Acquisition Emails</Link>
            <Link to="/retention-emails">Retention Emails</Link>
        </div>
    </div>
    <div className="col-6 col-md-6 col-lg-3">
        <div className="footer-item d-flex flex-column">
            <h4 className="mb-4 text-dark">Contact Info</h4>
            <Link to="#">
                <i className="fa fa-map-marker-alt me-2"></i>123 Street, New York, USA
            </Link>
            <Link to="#">
                <i className="fas fa-envelope me-2"></i>info@example.com
            </Link>
            <Link to="#">
                <i className="fas fa-phone me-2"></i>+012 345 67890
            </Link>
            <Link to="#" className="mb-3">
                <i className="fas fa-print me-2"></i>+012 345 67890
            </Link>
            <div className="d-flex align-items-center">
                <i className="fas fa-share fa-2x text-secondary me-2"></i>
                <Link className="btn-square btn btn-primary rounded-circle mx-1" to="#">
                    <i className="fab fa-facebook-f"></i>
                </Link>
                <Link className="btn-square btn btn-primary rounded-circle mx-1" to="#">
                    <i className="fab fa-twitter"></i>
                </Link>
                <Link className="btn-square btn btn-primary rounded-circle mx-1" to="#">
                    <i className="fab fa-instagram"></i>
                </Link>
                <Link className="btn-square btn btn-primary rounded-circle mx-1" to="#">
                    <i className="fab fa-linkedin-in"></i>
                </Link>
            </div>
        </div>
    </div>
</div>

                </div>
            </div>
            {/* Footer End */}

            {/* Copyright Start */}
            <div className="container-fluid copyright py-4">
                <div className="container">
                    <div className="row g-4 align-items-center">
                        <div className="col-md-6 text-center text-md-start mb-md-0">
                            <span className="text-white">
                                <Link to="#">
                                    <i className="fas fa-copyright text-light me-2"></i>Your Site Name
                                </Link>
                                , All right reserved.
                            </span>
                        </div>
                        <div className="col-md-6 text-center text-md-end text-white">
                            Designed By {"Md Osama khan"}
                           
                        </div>
                    </div>
                </div>
            </div>
            {/* Copyright End */}

            {/* Back to Top */}
            <button
                className="btn btn-primary btn-lg-square back-to-top"
                onClick={scrollToTop}
                style={{ display: "none", position: "fixed", bottom: "20px", right: "20px", zIndex: 1000 }}
            >
                <i className="fa fa-arrow-up"></i>
            </button>
        </>
    );
};



