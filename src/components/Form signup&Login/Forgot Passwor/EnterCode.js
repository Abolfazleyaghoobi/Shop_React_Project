import { Button, Col, Row } from "react-bootstrap";
import { MdArrowBackIos } from "react-icons/md";
import "./ForgotPasswor.css";
import Form from "react-bootstrap/Form";
import "./EnterCode.css";
import logoSite from "../../../assets/img/Logo + Text.png";
import { GetStatusBTNForgotPassword } from "./ForgotPage";
import { useContext, useRef, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate, useRoutes } from "react-router-dom";
function EnterCode() {
  const {
    setShowEnterCode,
    getEmail,
    setGetShowPopup,
    verifyCode,
    setGetNumber,
  } = useContext(GetStatusBTNForgotPassword);
  const nativ = useNavigate();
  const inputRefs = useRef([]);
  const showChangePassRef = useRef(null);
  //! emInputeNpass=>empityInputePassword
  const emInputeNpass = useRef(null);
  //! emInputeConfirmpass=>emInputeConfirmpass
  const emInputeConfimPass = useRef(null);
  let [number, setNumver] = useState(0);
  const [otp, setOtp] = useState(["", "", "", ""]);
  let [newPass, setNewPass] = useState("");
  let [confirmPass, setConfirmPass] = useState("");
  // ! show alert
  function showAlert(title, icon, customC) {
    Swal.fire({
      title: title,
      icon: icon,
      showConfirmButton: false,
      background: "rgb(53, 53, 53)",
      color: "#fff",
      draggable: true,
      customClass: {
        popup: customC,
        title: customC,
      },
    });
  }
  // isValidPassword
  function isValidPassword(pass) {
    let isValid =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;"'<>,.?/\\|`~-]).{8,}$/;
    return isValid.test(pass);
  }
  const backForm = () => {
    setShowEnterCode(false);
    setGetShowPopup("hide");
    setOtp(["", "", "", ""]);
  };
  const otpString = otp.join("");
  const handleChange = (index, event) => {
    const { value } = event.target;
    if (!/^[0-9]*$/.test(value)) return; // فقط اعداد مجاز هستند

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };
  const handleKeyDown = (index, event) => {
    if (event.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };
  const CheckingTheVerificationCode = () => {
    if (verifyCode == otpString) {
      showChangePassRef.current.style.display = "block";
    } else {
      Swal.fire({
        title: "Error",
        text: "The code entered is not valid!",
        icon: "warning",
        customClass: {
          popup: "widthPopUp",
        },
      });
    }
  };
  const SuccessfullyPasswordChange = () => {
    if (newPass == "" && confirmPass == "") {
      showAlert("Don't leave the field blank", "error", "w-Success-Popup");
    } else {
      let isValidPass = isValidPassword(newPass);
      console.log("isValidPass: ", isValidPass);
      if (isValidPass) {
        if (newPass != confirmPass) {
          showAlert("Trouble with password", "warning");
        } else {
          if (newPass == confirmPass) {
            showChangePassRef.current.style.display = "none";
            showAlert(
              `The password change was successful
                Log in again`,
              "success",
              "w-Success-Popup"
            );
            nativ("/login");
          }
        }
      } else {
        showAlert(
          `
          Your password is weak , 
The emerald must include:
At least 8 characters.
At least one lowercase letter.
At least one uppercase letter.
At least one number.
At least one special character.
  `,
          "warning",
          "w-Success-Popup"
        );
      }
    }
  };
  const getNewValue = (e) => {
    if (e.target.name == "newPass") {
      setNewPass(e.target.value);
    } else if (e.target.name == "confirmPass") {
      setConfirmPass(e.target.value);
    }
  };
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
                <h6 onClick={backForm} style={{ cursor: "pointer" }}>
                  <MdArrowBackIos color="#d4d4d4" />
                  <span style={{ color: "#d4d4d4" }}>Back</span>
                </h6>
                <p>
                  We have share a code of your registered email address{" "}
                  {getEmail}
                </p>
                <Form className="formCode">
                  <div className="d-flex">
                    <div className="flex gap-2">
                      {otp.map((digit, index) => (
                        <input
                          key={index}
                          ref={(el) => (inputRefs.current[index] = el)}
                          type="tel"
                          maxLength="1"
                          value={digit}
                          onChange={(event) => handleChange(index, event)}
                          onKeyDown={(event) => handleKeyDown(index, event)}
                          className="w-10 h-10 text-center border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      ))}
                    </div>
                  </div>
                  <div className="d-flex justify-content-between mt-3 align-items-center"></div>
                  <Button
                    onClick={CheckingTheVerificationCode}
                    className="border-0 w-100 bg-dark mb-3 "
                  >
                    Verify
                  </Button>
                  <Button
                    onClick={() => {
                      setNumver(++number);
                      setGetNumber(number);
                    }}
                    className="border-0 w-75 mt-3 btn btn-outline-warning bg-success  mb-3 "
                  >
                    Get New Code
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div
        ref={showChangePassRef}
        className="password-change position-absolute px-3"
      >
        <img className="img-fluid" src={logoSite} alt="" />
        <Form autoComplete="off">
          <Form.Label className=" mt-3" htmlFor="inputPassword5">
            New Password
          </Form.Label>
          <Form.Control
            onChange={getNewValue}
            ref={emInputeNpass}
            type="text"
            id="inputPassword5"
            name="newPass"
            className=" mt-2"
          />
          <Form.Label className="mt-3" htmlFor="inputPassword5">
            confirm Password
          </Form.Label>
          <Form.Control
            onChange={getNewValue}
            ref={emInputeConfimPass}
            type="text"
            id="inputPassword5"
            className=" mt-2"
            name="confirmPass"
          />
          <Button
            onClick={SuccessfullyPasswordChange}
            className="bg-dark border-0 mt-3"
          >
            Change Password
          </Button>
        </Form>
        {/* <ul>
          <li>At least 8 characters</li>
          <li>At least one lowercase letter</li>
          <li>At least one uppercase letter</li>
          <li>At least one number</li>
          <li>At least one special character</li>
        </ul> */}
      </div>
    </>
  );
}

export default EnterCode;
