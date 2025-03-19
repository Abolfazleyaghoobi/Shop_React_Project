import { Col, Row } from "react-bootstrap";
import Timer from "../Timer/Timer";
import "./Deals.css";
// import image
import image from "../../../assets/img/picture12.png";

function Deals() {
  return (
    <>
      <Row className="row-cols-2 pb-2 align-items-center">
        <Col style={{ paddingTop: "56px" }}>
          <h2>Deals of the Month</h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters
          </p>
          <Timer />
          <button className="AllProductsBTN">
            View All Products <i className="bi bi-arrow-right"></i>
          </button>
        </Col>
        <Col>
          <div className="image-deals d-flex  justify-content-center overflow-hidden position-relative">
            <img src={image} alt="" />
            {/* brd=>border */}
            <div className="brd position-absolute"></div>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Deals;
