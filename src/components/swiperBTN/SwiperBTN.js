import "./SwiperBTN.css";
import { GrLinkPrevious } from "react-icons/gr";
import { GrLinkNext } from "react-icons/gr";
import { useSwiper } from "swiper/react";
function SwiperBTN() {
    const swiper = useSwiper();
  const slideBTN = (e) => {
    const icon = e.currentTarget.querySelector("svg");
    if (icon) {
      icon.style.color = "#5db7e8";
    }
  };
  const slideBTNMouseLeave = (e) => {
    e.currentTarget.style.background = "#ffebeb";
    const icon = e.currentTarget.querySelector("svg");
    if (icon) {
      icon.style.color = "black";
    }
  };
  return (
    <div className="PN-btn mb-4">
      {/* prev btn*/}
      <button
        value="prev"
        onMouseEnter={slideBTN}
        onMouseLeave={slideBTNMouseLeave}
        onClick={() => swiper.slideNext()}
      >
        <GrLinkPrevious size={23} />
      </button>
      {/* next btn */}
      <button
        value="next"
        onMouseEnter={slideBTN}
        onMouseLeave={slideBTNMouseLeave}
    
        onClick={() => swiper.slidePrev()}
      >
        <GrLinkNext size={23} />
      </button>
    </div>
  );
}

export default SwiperBTN;
