import { Button, Container } from "react-bootstrap";
import NavBar from "../../nav/NavBar";
import ForgotPassword from "./ForgotPasswor";
import Footer from "../../footer/Footer";
import Particles from "../../Animation/Balatro/Particles";
import "./ForgotPage.css";
import EnterCode from "./EnterCode";
import { createContext, useEffect, useRef, useState } from "react";
export const GetStatusBTNForgotPassword = createContext();
function ForgotPassPage() {
  const EnterC = useRef(null);
  const frPass = useRef(null);
  let [showEnterCode, setShowEnterCode] = useState(false);
  useEffect(() => {
    if (showEnterCode) {
      EnterC.current.style.left = "0px";
      frPass.current.style.left = "-830px";
    }else if(!showEnterCode){
      EnterC.current.style.left = "803px";
      frPass.current.style.left = "0px";
    }
  }, [showEnterCode]);
  return (
    <GetStatusBTNForgotPassword.Provider
      value={{ showEnterCode, setShowEnterCode}}
    >
      <NavBar />
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
        <div className="conForgotPass ">
          <div className="position-relative bg-warning">
            <div ref={frPass} className="position-absolute  frPassword">
              <ForgotPassword />
            </div>
            <div ref={EnterC} className="position-absolute EnterCode">
              <EnterCode />
            </div>
          </div>
        </div>
      </div>

      <section className="footer-section pt-5">
        <Container>
          <Footer />
        </Container>
      </section>
    </GetStatusBTNForgotPassword.Provider>
  );
}

export default ForgotPassPage;
