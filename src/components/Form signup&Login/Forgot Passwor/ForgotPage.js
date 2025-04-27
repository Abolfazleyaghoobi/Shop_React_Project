import { Button, Container } from "react-bootstrap";
import NavBar from "../../nav/NavBar";
import ForgotPassword from "./ForgotPasswor";
import Footer from "../../footer/Footer";
import Particles from "../../Animation/Balatro/Particles";
import "./ForgotPage.css";
import EnterCode from "./EnterCode";
import { createContext, useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
import useRandomNumber from "../../../Hooks/useGenerateRandomNumber";
import axios from "axios";

export const GetStatusBTNForgotPassword = createContext();
function ForgotPassPage() {
  const EnterC = useRef(null);
  const frPass = useRef(null);
  let [showEnterCode, setShowEnterCode] = useState(false);
  let [getNumber, setGetNumber] = useState(0);
  let [getEmail, setGetEmail] = useState("");
  let [getShowPopup, setGetShowPopup] = useState("");
  const randomNumber = useRandomNumber();
  let generateNumber = randomNumber;
  let verifyCode = generateNumber();

  useEffect(() => {
    if (showEnterCode != "emailIsNotValid") {
      if (showEnterCode) {
        EnterC.current.style.left = "0px";
        frPass.current.style.left = "-830px";

        console.log("getShowPopup: ", getShowPopup);
        if (getShowPopup === "show7Popup") {
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            },
          });
          Toast.fire({
            title: `This is the code to recover your password:${verifyCode}`,
            customClass: {
              popup: "w-popup-code",
            },
          });
        }
      } else {
        EnterC.current.style.left = "803px";
        frPass.current.style.left = "0px";
        if (getShowPopup === "hide") {
          Swal.close();
        }
      }
    } else {
      Swal.fire({
        position: "top-end",
        icon: "warning",
        title: "The email you entered is invalid",
        showConfirmButton: false,
        timer: 2000,
        heightAuto: false,
      });
    }
  }, [showEnterCode, getNumber, getShowPopup]);
 

  return (
    <GetStatusBTNForgotPassword.Provider
      value={{
        setShowEnterCode,
        setGetNumber,
        getEmail,
        setGetEmail,
        setGetShowPopup,
        verifyCode,
      }}
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
