import { Col, Row } from "react-bootstrap";
import image from "../../assets/img/logoFooter.png";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FaMapMarkerAlt, FaCcVisa, FaGooglePay,FaFacebookF,FaInstagram } from "react-icons/fa";
import { TfiTwitter } from "react-icons/tfi";
import { SiMastercard } from "react-icons/si";
import { IoLogoPaypal } from "react-icons/io5";

import "./Footer.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <Row>
        <Col>
          <img src={image} alt="" />
          <div className="contactMe mt-4">
            <p>
              <span className="me-2">
                <FaPhoneVolume color="#7f7e81" size={18} />
              </span>
              (704) 555-0127
            </p>
            <p>
              <span className="me-2">
                <MdOutlineEmail color="#7f7e81" size={18} />
              </span>
              krist@example.com
            </p>
            <div className="d-flex ">
              <span className="me-2">
                <FaMapMarkerAlt color="#7f7e81" size={18} />
              </span>
              <p>3891 Ranchview Dr. Richardson, California 62639</p>
            </div>
          </div>
        </Col>
        <Col>
          <div className="information">
            <p>Information</p>
            <a href="#">My Account</a>
            <Link to="/login">Login</Link>
            <a href="#">My Cart </a>
            <a href="#">My Wishlist</a>
            <a href="#">Checkout</a>
          </div>
        </Col>
        <Col>
          <div className="Service">
            <p>Service</p>
            <a href="#">About Us</a>
            <a href="#">Careers</a>
            <a href="#">Delivery Information </a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
        </Col>
        <Col>
          <div className="Subscribe">
            <p>Subscribe</p>
            <p>
              Enter your email below to be the first to know about new
              collections and product launches.
            </p>
            <a className="enterYourEmail" href="#">
              <span>Your Email</span>{" "}
              <span>
                <i class="bi bi-arrow-right"></i>
              </span>
            </a>
          </div>
        </Col>
      </Row>
      <div className="SocialMedia mt-5">
        <Row className="align-items-center">
          <Col>
            <div className="portal">
              <span>
                <FaCcVisa size={23} color="white" />
              </span>
              <span>
                <SiMastercard size={23} color="white" />
              </span>
              <span>
                <FaGooglePay size={53} color="white" />
              </span>
              <span>
                <IoLogoPaypal size={23} color="white" />
              </span>
            </div>
          </Col>
          <Col>
          <p className="text-light text-center mt-3">2025 Krist All Rights are reserved</p>
          </Col>
          <Col className="d-flex justify-content-end">
            <span className="mx-3"><FaFacebookF color="white" size={23} /></span>
            <span className="mx-3">
            <FaInstagram   color="white" size={23}/>
            </span>
            <span className="mx-3"><TfiTwitter  color="white" size={23} /></span>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Footer;
