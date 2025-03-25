import { Button, Col, Row } from "react-bootstrap";

import "./ForgotPasswor.css";
import Form from "react-bootstrap/Form";
import { GetStatusBTNForgotPassword } from "./ForgotPage";

import { useContext } from "react";
function ForgotPassword() {
  const {setShowEnterCode}=useContext(GetStatusBTNForgotPassword)
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
                  />

                  <div className="d-flex justify-content-between mt-3 align-items-center"></div>
                  <Button
                  onClick={()=>setShowEnterCode(true)}
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
