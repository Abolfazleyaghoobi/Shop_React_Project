import { Button, Col, Container, Row } from "react-bootstrap";
import logoSite from "../../../assets/img/Logo + Text.png";
import "./Login.css";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import Particles from "../../Animation/Balatro/Particles";
import { FaArrowLeft } from "react-icons/fa";
import NavBar from  "../../nav/NavBar"
import Footer from  "../../footer/Footer"
import { useEffect, useState } from "react";
import axios from "axios";

function Login() {
  let [useInfo,setUserInfo]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:5000/usetData")
    .then(e=>setUserInfo(e.data))
  },[])

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
                    src="https://s6.uupload.ir/files/rectangle_3463273_a637.png"
                    alt=""
                  />
                </div>
              </Col>
              <Col className="p-0">
                <div className="con-form">
                  <h2 className="text-light">welcome👋</h2>
                  <p>Please login here</p>
                  <Form>
                    <Form.Label htmlFor="inputPassword5">
                      Email Adress
                    </Form.Label>
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
                      <Form.Check  className="checkBox text-light" label="Remember me" />
                      <Link to="/Forgotpassword" className="text-light">Forgot Password?</Link>
                    </div>
                    <Button className="border-0 w-100 mt-4 bg-dark mb-3 ">Login</Button>
                    <p className="createAccount">Do you have not account?<Link  to="/signup">create</Link></p>
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

export default Login;
