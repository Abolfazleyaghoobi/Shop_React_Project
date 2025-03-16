import image from "../../assets/img/pic/Louis Philippe Sxxport.png";

import "./Bestseller.css"
function Bestseller({image,name,title,off,price}) {
    return ( 
      <>
      <div className="cardBest mb-4 ">
        <div className="imgBest ">
          <img className="img-fluid" src={image} alt="" />
        </div>
        <div className="infoBest ps-2 pt-3
        ">
            <h5 className="modelName m-0">{name}</h5>
            <p className="title m-0">
           {title}
            </p>
            <p className="off">
            <i className="bi bi-currency-dollar"></i>
            <span>
              {off}
            </span>
            <span className="offer">
            <i className="bi bi-currency-dollar"></i>
              {price}
            </span>
            </p>
        </div>
      </div>
      
      </>


     );
}

export default Bestseller;