import { Button, Container } from "react-bootstrap";
import NavBar from "../../nav/NavBar";
import ForgotPassword from "./ForgotPasswor";
import Footer from "../../footer/Footer";
import Particles from "../../Animation/Balatro/Particles";
import "./ForgotPage.css"

function ForgotPassPage() {

  return (
    <>
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
        <div className="conForgotPass"> 
        <ForgotPassword />
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

export default ForgotPassPage;
