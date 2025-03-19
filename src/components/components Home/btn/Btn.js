import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import "./Btn.css"
function Btn() {
    
    const slideBTN = (e) => {
      const icon = e.currentTarget.querySelector("svg");
      if (icon) {
        icon.style.color = "#fff";
      }
    };
    const slideBTNMouseLeave = (e) => {
      e.currentTarget.style.background = "#c9c9c9";
      const icon = e.currentTarget.querySelector("svg");
      if (icon) {
        icon.style.color = "black";
      }
    };
    return ( <>
     <div className="PN-btn mb-4">
      {/* prev btn*/}
      <button
        value="prev"
        onMouseEnter={slideBTN}
        onMouseLeave={slideBTNMouseLeave}

      >
        <GrLinkPrevious size={23} />
      </button>
      {/* next btn */}
      <button
        value="next"
        onMouseEnter={slideBTN}
        onMouseLeave={slideBTNMouseLeave}
    
       
      >
        <GrLinkNext size={23} />
      </button>
    </div>
    
    </> );
}

export default Btn;