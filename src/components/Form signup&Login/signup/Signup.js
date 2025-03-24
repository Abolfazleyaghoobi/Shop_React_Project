import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Particles from "../../Animation/Balatro/Particles";
import logoSite from "../../../assets/img/Logo + Text.png";
import "./Signup.css"
import NavBar from "../../nav/NavBar";
import Footer from "../../footer/Footer";

function Signup() {
  
  return (
    <>
    <NavBar/>
      <div
        style={{
          position: "relative",
        }}
      >
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.2}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
        <div className="con-login d-flex justify-content-center align-items-center position-absolute">
          <div className="login">
            <Row>
              <Col className="col-7 p-0">
                <div className="position-relative">
                  <img
                    className="img-fluid position-absolute logo-site"
                    src={logoSite}
                    alt=""
                  />
                  <img
                    className="img-fluid"
                    src="https://s6.uupload.ir/files/rectangle_3463272_iwei.png"
                    alt=""
                  />
                </div>
              </Col>
              <Col className="p-0">
                <div className="signUpForm">
                  <h4 className="text-light">Create New Account</h4>
                  <p>Please enter details</p>
                  <Form>
                    <Form.Label htmlFor="inputPassword5">
                     Frist Name
                    </Form.Label>
                    <Form.Control
                      type="text"
                      id="inputPassword5"
                      aria-describedby="passwordHelpBlock"
                    />
                    <Form.Label htmlFor="inputPassword5">Lastt Name</Form.Label>
                    <Form.Control
                      type="text"
                      id="inputPassword5"
                      aria-describedby="passwordHelpBlock"
                    />
                    <Form.Label htmlFor="inputPassword5">Email Adress</Form.Label>
                    <Form.Control
                      type="email"
                      id="inputPassword5"
                      aria-describedby="passwordHelpBlock"
                    />
                    <Form.Label htmlFor="inputPassword5">Password</Form.Label>
                    <Form.Control
                      type="password"
                      id="inputPassword5"
                      aria-describedby="passwordHelpBlock"
                    />
                    <div className="d-flex justify-content-between mt-3 align-items-center">
                      <Form.Check  className="checkBox text-light" label="I agree to the Terms & Conditions" />
                    </div>
                    <Button className="border-0 w-100 mt-4 bg-dark mb-3 ">Signup</Button>
                   
                  </Form>
                </div>
              </Col>
            </Row>
          </div>
        </div>
       
      </div>
      <section className="footer-section pt-5">
        <Container>
          <Footer />
        </Container>
      </section>
    
    </>
  );
}

export default Signup;
