import image from "../../assets/img/pic/Louis Philippe Sxxport.png";

import "./Bestseller.css"
function Bestseller() {
    return ( 
      <>
      <div className="cardBest mb-4 ">
        <div className="imgBest pt-4">
          <img className="img-fluid" src={image} alt="" />
        </div>
        <div className="infoBest ps-2 pt-4 
        ">
            <h5 className="modelName m-0">Roadstar</h5>
            <p className="title m-0">
            Printed Cotton T-Shirt
            </p>
            <p className="off">
            <i class="bi bi-currency-dollar"></i>
            <span>
              38.00
            </span>
            <span className="offer">
            <i class="bi bi-currency-dollar"></i>
              40.00
            </span>
            </p>
        </div>
      </div>
      
      </>


     );
}

export default Bestseller;