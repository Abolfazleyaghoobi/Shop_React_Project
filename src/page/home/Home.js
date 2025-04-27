import { Col, Container, Row } from "react-bootstrap";
import NavBar from "../../components/nav/NavBar";
import Header from "../../components/header/Header";
// && file css
import "./Home.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// && components
import Deals from "../../components/components Home/Deals/Deals";
import ComentUser from "../../components/components Home/comentsInPageHome/cmt";
import Btn from "../../components/components Home/btn/Btn";
import Stories from "../../components/components Home/stories/Stories";
import BestsellerP from "../../components/components Home/Best Selling Products/BestsellerP";
import CardCategori from "../../components/components Home/cardCategories/Categori";
// && react icon
import { FaBox, FaDollarSign } from "react-icons/fa6";
import { MdHeadset } from "react-icons/md";
import { LuCreditCard } from "react-icons/lu";
// * footer
import Footer from "../../components/footer/Footer";

import LoaderProducts from "../../components/Animation/loader Animation/LoaderProducts";

function Home() {
  let [comentsUsers, setComentsUsers] = useState([]);
  const [BProducts, setBProducts] = useState([]);
  console.log("BProducts: ", BProducts);
  let [loading, setLoading] = useState(false);
  let [stories, setStories] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/coments")
      .then((e) => setComentsUsers(e.data));
    axios
      .get("http://localhost:5000/photoStories")
      .then((e) => setStories(e.data));
    // * req api Best Selling Products

    axios
      .get("http://localhost:8000/products?limit=8")
      .then((res) => setBProducts(res.data.products));
    // !_________________________________________________
    if (BProducts) {
      setLoading(false);
    }
  }, []);

  return (
    <>
      <NavBar />
      <Header />
      <Container>
        {/* cardC=>cardCategori */}

        <section className=" cardC">
          <CardCategori />
        </section>
        {/* bestseller product's */}
        <section className="sec-bestseller">
          <h2 className="text-center">Our Bestseller</h2>
          <Row className="position-relative">
            {BProducts && BProducts.length > 0 ? (
              BProducts.map((item) => (
                <Col className="gy-4" key={item._id}>
                  <BestsellerP {...item} />
                </Col>
              ))
            ) : (
              <LoaderProducts />
            )}
          </Row>
        </section>

        {/* Deals */}
        <section className="deal">
          <Deals />
        </section>
      </Container>
      {/* coments */}
      <section className="comentsUsers ">
        <Container>
          <div className="d-flex justify-content-between align-items-center">
            <h2>What our Customer say's?</h2>
            <Btn />
          </div>

          <Swiper
            rtl={false}
            loop={true}
            className="d-flex flex-column-reverse "
            spaceBetween={100}
            breakpoints={{
              1200: {
                slidesPerView: 3,
              },
              992: {
                slidesPerView: 2,
              },
            }}
          >
            {comentsUsers.map((cmt) => (
              <SwiperSlide key={cmt.id}>
                <ComentUser {...cmt} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </section>
      <Container>
        {/* stories */}
        <section className="stories">
          <h1 className="text-center">Our Instagram Stories</h1>
          <Row>
            {stories.map((stori) => (
              <Col key={stori.id}>
                <Stories {...stori} />
              </Col>
            ))}
          </Row>
        </section>
        <div className="d-flex justify-content-between con-FeaturesSection">
          <div className="FeaturesSection p-2">
            <span>
              <FaBox size={25} />
            </span>
            <h4 className="mt-3">Free Shipping</h4>
            <p>Free shipping for order above $150</p>
          </div>
          <div className="FeaturesSection p-2">
            <span>
              <FaDollarSign size={25} />
            </span>
            <h4 className="mt-3">Money Guarantee</h4>
            <p>Within 30 days for an exchange</p>
          </div>
          <div className="FeaturesSection p-2">
            <span>
              <MdHeadset size={25} />
            </span>
            <h4 className="mt-3">Online Support</h4>
            <p>24 hours a day, 7 days a week</p>
          </div>
          <div className="FeaturesSection p-2">
            <span>
              <LuCreditCard size={25} />
            </span>
            <h4 className="mt-3">Flexible Payment</h4>
            <p>Pay with multiple credit cards</p>
          </div>
        </div>
      </Container>
      <section className="footer-section pt-5">
        <Container>
          <Footer />
        </Container>
      </section>
    </>
  );
}

export default Home;
