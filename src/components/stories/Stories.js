import { useRef } from "react";
import "./Stories.css";
import { BsInstagram } from "react-icons/bs";
function Stories({image}) {
  const iconInsta = useRef(null);
  const showIconInsta = () => {
    iconInsta.current.style = " visibility: visible";
  };
  const hiddenIconInsta = () => {
    iconInsta.current.style = " visibility: hidden";
  };
  return (
    <>
      <div
        onMouseEnter={showIconInsta}
        onMouseLeave={hiddenIconInsta}
        className="con-stories position-relative overflow-hidden mb-4 mt-5"
      >
        <span ref={iconInsta} className="iconsInsta position-absolute">
          <BsInstagram color="white" size={35} />
        </span>
        <img
          className="img-fluid "
          src={image}
          alt=""
        />
      </div>
    </>
  );
}

export default Stories;
