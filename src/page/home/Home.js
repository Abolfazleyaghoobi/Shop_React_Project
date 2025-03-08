import { Col, Container, Row } from "react-bootstrap";
import NavBar from "../../components/nav/NavBar";
import Header from "../../components/header/Header";
import CardCategori from "../../components/cardCategories/Categori";
import "./Home.css";
import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  let [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:2000/categories")
      .then((e) => setCategories(e.data));
    console.log(categories);
  }, []);
  return (
    <>
      <NavBar />
      <Header />
      <Container>
        {/* cardC=>cardCategori */}

        <section className="  cardC">
          <h2>Shop by Categories</h2>
          <Row>
            {categories.map((e) => (
              <Col>
                <CardCategori {...e} />
              </Col>
            ))}
          </Row>
        </section>
      </Container>
    </>
  );
}

export default Home;
