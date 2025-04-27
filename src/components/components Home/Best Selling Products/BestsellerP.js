import {  useRef, useState } from "react";
import "./BestsellerP.css";
import Card from "react-bootstrap/Card";
import notFoundImg from "../../../assets/img/notFound.png";
// && react-icons
import { FaStar, FaRegStar } from "react-icons/fa";
import { GoEye } from "react-icons/go";
import { Button } from "bootstrap";
function BestsellerP({ name = "Product Name", brand, images, price }) {
  const [isClicked, setIsClicked] = useState(true);

  const option = useRef(null);


  return (
    <>
      <Card
        className="B-card"
        style={{ width: "18rem" }}
        onMouseEnter={() => (option.current.style.display = "block")}
        onMouseLeave={() => (option.current.style.display = "none")}
      >
        <div className="position-relative">
          <Card.Img variant="top" src={images[0] || notFoundImg} />
          {/* show options when mouse hover on card */}
          <div ref={option} className="Options">
            <div className=" mt-3 ">
              <span onClick={() => setIsClicked((prev) => !prev)}>
                {isClicked ? <FaRegStar size={25} /> : <FaStar size={25} />}
              </span>
            </div>
            <div className=" mt-3 ">
              <span>
                <GoEye size={25} />
              </span>
            </div>
          <button className="btn-Add position-absolute">Add to Cart</button>
          </div>
        </div>
        <Card.Body className="border border-top-1">
          {/* Clothing Brand */}
          <Card.Title>{brand}</Card.Title>
          <Card.Text>{name}</Card.Text>
          <Card.Text>
            $ {price}
            <span
              className="d-inline-block ms-2"
              style={{ textDecoration: "line-through", color: "gray" }}
            >
              $ 15.99
            </span>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
export default BestsellerP;
// Men's Cotton T-Shirt
// http://downloadfile2.free.nf/file/t-shirt/t-shirt.jpg
