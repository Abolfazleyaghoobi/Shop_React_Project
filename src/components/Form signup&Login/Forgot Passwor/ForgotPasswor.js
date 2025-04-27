import { Button, Col, Row } from "react-bootstrap";

import "./ForgotPasswor.css";
import Form from "react-bootstrap/Form";
import { GetStatusBTNForgotPassword } from "./ForgotPage";

import { useContext, useEffect, useState } from "react";
import axios from "axios";
function ForgotPassword() {
  let [Email, setEmail] = useState("");
  let [number, setNumver] = useState(0);
  let [useInfo, setUserInfo] = useState([]);

  // const { setGetNumber } = useContext(GetStatusBTNForgotPassword);

  const { setShowEnterCode, setGetNumber, setGetEmail, setGetShowPopup } =
    useContext(GetStatusBTNForgotPassword);
  const regexEmailCode = /\w{3,}@gmail.com/;

  const booleanRegex = regexEmailCode.test(Email);


  let isEmail = useInfo.map((e) => {
    let email = e.email;
    if (email===Email) {
      return true
    }
  });
  if (isEmail==undefined) {
    alert(44)
  }
  console.log('isEmail: ', isEmail);
  const sendBoolean = () => {
    if (isEmail) {
      if (booleanRegex) {
        setShowEnterCode(true);
        setGetEmail(Email);
        setGetShowPopup("show7Popup");
      } else {
        setShowEnterCode("emailIsNotValid");
        setNumver(++number);
        setGetNumber(number);
      }
    }else if (isEmail == "undefined") {
      alert(88)
    }
    

  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/usetData")
      .then((e) => setUserInfo(e.data));
  }, []);
  return (
    <>
      <div className="cconForgotPass d-flex justify-content-center align-items-center">
        <div className="login">
          <Row>
            <Col className="col-7 p-0">
              <div className="position-relative">
                <img
                  className="img-fluid"
                  src="https://s6.uupload.ir/files/rectangle_34632r73_f11e.png"
                  alt=""
                />
              </div>
            </Col>
            <Col className="p-0">
              <div className="con-form">
                <h2 className="text-light">Fogot Password</h2>
                <p>
                  Enter your registered email address. we'll send you a code to
                  reset your password.{" "}
                </p>
                <Form>
                  <Form.Label htmlFor="inputPassword5">Email Adress</Form.Label>
                  <Form.Control
                    type="email"
                    id="inputPassword5"
                    aria-describedby="passwordHelpBlock"
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <div className="d-flex justify-content-between mt-3 align-items-center"></div>
                  <Button
                    onClick={sendBoolean}
                    className="border-0 w-100 bg-dark mb-3 "
                  >
                    Send OTP
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
