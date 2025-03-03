import { Col, Container, Row } from "react-bootstrap";
import imageHeader from "../../assets/img/Picture11.png";
import "./Header.css";
function Header() {
  return (
   
      <Container>
        <section className="bgHeader">
          <Row>
            <Col></Col>
            <Col>
              <div className="imageHeader">
                <div className="conImage d-flex justify-content-center position-relative">
                  <div className="imm">
                    <img
                      src={imageHeader}
                      className="img-fluid mainImg "
                      alt=""
                    />
                  </div>
                    <div className="borderImage bor-1 position-absolute"></div>
                    <div className="borderImage bor-2 position-absolute"></div>
                    <div className="borderImage  bor-3 position-absolute"></div>
                    <div className="borderImage bor-4 position-absolute"></div>
                </div>
              </div>
            </Col>
          </Row>
        </section>
      </Container>

  );
}

export default Header;
