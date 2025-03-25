import { Button, Col, Row } from "react-bootstrap";
import { MdArrowBackIos } from "react-icons/md";
import "./ForgotPasswor.css";
import Form from "react-bootstrap/Form";
import "./EnterCode.css";


import { GetStatusBTNForgotPassword } from "./ForgotPage";
import { useContext } from "react";
function EnterCode() {

  const {setShowEnterCode}=useContext(GetStatusBTNForgotPassword)
  const backForm=()=>{
    setShowEnterCode(false)
  }
  return (
    <>
      <div className="cconForgotPass d-flex justify-content-center align-items-center">
        <div className="login">
          <Row>
            <Col className="col-7 p-0">
              <div className="position-relative">
                <img
                  className="img-fluid"
                  src="https://uploadkon.ir/uploads/e5c125_25Rectangle-3463f273.png"
                  alt=""
                />
              </div>
            </Col>
            <Col className="p-0">
              <div className="con-form">
                <h2 className="text-light">Enter OTP</h2>
                <h6 onClick={backForm} style={{cursor:"pointer"}}>
                  <MdArrowBackIos  color="#d4d4d4"/>
                  <span style={{color:"#d4d4d4"}}>Back</span>
                </h6>
                <p>
                  We have share a code of your registered email address
                  robertfox@example.com
                </p>
                <Form className="formCode">
                  <div className="d-flex">
                    <Form.Control
                      type="email"
                      id="inputPassword5"
                      aria-describedby="passwordHelpBlock"
                    />
                    <Form.Control
                      type="email"
                      id="inputPassword5"
                      aria-describedby="passwordHelpBlock"
                    />
                    <Form.Control
                      type="email"
                      id="inputPassword5"
                      aria-describedby="passwordHelpBlock"
                    />
                    <Form.Control
                      type="email"
                      id="inputPassword5"
                      aria-describedby="passwordHelpBlock"
                    />
                  </div>
                  <div className="d-flex justify-content-between mt-3 align-items-center"></div>
                  <Button
                 
                    className="border-0 w-100 bg-dark mb-3 "
                  >
                    Verify
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

export default EnterCode;
