import { FaArrowRightLong } from "react-icons/fa6";
import { Button, Col, Container, Row } from "react-bootstrap";
import imageHeader from "../../assets/img/Picture11.png";
import "./Header.css";
function Header() {
  return (
    <Container>
      <section className="bgHeader position-relative overflow-hidden">
        <Row>
          <Col className="align-items-center  d-flex">
            <div className="intro">
              <h3>Classic Exclusive</h3>
              <h1>Women's Collection</h1>
              <h5>UPTO 40% OFF</h5>
              <div className="shopNow">
                <Button className="btn-dark">Shop Now
                  <span className="ms-2"><FaArrowRightLong /></span>

                </Button>
               
              </div>
            </div>
          </Col>
          <Col >
            <div className="imageHeader " >
              <div className="conImage m-auto d-flex justify-content-center position-relative">
                <div className="imm ">
                  <img
                    src={imageHeader}
                    className="img-fluid mainImg "
                    alt=""
                  />
                </div>
              
              </div>
                <div className="borderImage bor-1 position-absolute"></div>
              
                <div className="borderImage  bor-3 position-absolute"></div>
            </div>
          </Col>
          <div className="best-container position-absolute"> 
          <h1 className="best">BEST</h1>
          
          </div>
          <div className="E-container position-absolute"> 
          <h1 className="E">E</h1>
          
          </div>
        </Row>
      </section>
    </Container>
  );
}

export default Header;
