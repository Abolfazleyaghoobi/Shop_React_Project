import { useRef } from "react";

import "./Bestseller.css"
function Bestseller({image,name,title,off,price}) {
  const getBoxAddToCart=useRef(null);
  const addFavIcon=useRef(null);
  const showAddToCard=()=>{
   getBoxAddToCart.current.style="visibility: visible"
  }
  const hiddenAddToCard=()=>{
   getBoxAddToCart.current.style="visibility: hidden"
  }
  const addFav=()=>{
      if(addFavIcon.current.className=="bi bi-star-fill"){
        addFavIcon.current.className="bi bi-star"
      }else{
        addFavIcon.current.className="bi bi-star-fill"
      }
      
   
  }


    return ( 
      <>
      <div onMouseEnter={showAddToCard} onMouseLeave={hiddenAddToCard} className="cardBest mb-4 position-relative">
      
        <div ref={getBoxAddToCart} className="addToCard position-absolute">
         <span className="d-flex ">
         <p onClick={addFav}>
          <i ref={addFavIcon} className="bi bi-star"></i>
          </p>
          <p>
          <i className="bi bi-eye"></i>
          </p>
         </span>
          <button className="position-absolute">
            Add to Card
          </button>
        </div>
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