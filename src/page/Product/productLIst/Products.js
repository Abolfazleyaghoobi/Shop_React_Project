import { Col, Container, Row } from "react-bootstrap";
import Breadcrumbs from "../../../components/Breadcrumbs/Breadcrumbs";
import NavBar from "../../../components/nav/NavBar";

import "./Products.css";
import { useState } from "react";
import FilterSidebar from "../../../components/FilterSidebar/FilterSidebar";
function AllProducts() {
  const categories = [
    "Men",
    "Women",
    "Kids",
    "Bags",
    "Belts",
    "Wallets",
    "Watches",
    "WinterWear",
  ];

  const [selected, setSelected] = useState(null);
  const [isOpen, setIsOpen] = useState(true); // برای باز و بسته شدن آکاردئون

  const handleChange = (category) => {
    if (selected === category) {
      setSelected(null);
    } else {
      setSelected(category);
    }
  };

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <NavBar />
      <Container>
        <Breadcrumbs />
        <Row>
          <Col className="col-3">
           <FilterSidebar/>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
}

export default AllProducts;
