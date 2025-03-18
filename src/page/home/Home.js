import { Col, Container, Row } from "react-bootstrap";
import NavBar from "../../components/nav/NavBar";
import Header from "../../components/header/Header";
import CardCategori from "../../components/cardCategories/Categori";
import "./Home.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Bestseller from "../../components/cardBestseller/Bestseller";
import Deals from "../../components/Deals/Deals";
import ComentUser from "../../components/comentsInPageHome/cmt";
import SwiperBTN from "../../components/swiperBTN/SwiperBTN";
import Btn from "../../components/btn/Btn";
import Stories from "../../components/stories/Stories";
import { FaBox, FaDollarSign } from "react-icons/fa6";
import { MdHeadset } from "react-icons/md";
import { LuCreditCard } from "react-icons/lu";
import Footer from "../../components/footer/Footer";

function Home() {
  let [categories, setCategories] = useState([]);
  let [bestseller, setBestseller] = useState([]);
  let [comentsUsers, setComentsUsers] = useState([]);
  let [stories, setStories] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:2000/categories")
      .then((e) => setCategories(e.data));
    axios
      .get("http://localhost:2000/Bestseller")
      .then((e) => setBestseller(e.data));
    axios
      .get("http://localhost:2000/coments")
      .then((e) => setComentsUsers(e.data));
    axios
      .get("http://localhost:2000/photoStories")
      .then((e) => setStories(e.data));
  }, []);
  //* prev & next style

  return (
    <>
      <NavBar />
      <Header />
      <Container>
        {/* cardC=>cardCategori */}

        <section className="  cardC">
          <Swiper
            rtl={false}
            loop={true}
            className="d-flex flex-column-reverse "
            spaceBetween={40}
            breakpoints={{
              1400: {
                slidesPerView: 5,
              },
              1200: {
                slidesPerView: 4,
              },
              992: {
                slidesPerView: 3,
              },
            }}
          >
            <div className="d-flex justify-content-between align-items-center">
              <h2>Shop by Categories</h2>
              <SwiperBTN />
            </div>
            {categories.map((categori) => (
              <SwiperSlide key={categori.id}>
                <CardCategori {...categori} />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
        {/* this part is bestseller */}
        <section className="mt-5">
          <div className="text-center">
            <h2>Our Bestseller</h2>
          </div>
          <Row>
            {bestseller.map((best) => (
              <Col key={best.id}>
                <Bestseller {...best} />
              </Col>
            ))}
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
          <Row>
            {comentsUsers.map((cmt) => (
              <Col key={cmt.id}>
                <ComentUser {...cmt} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      {/* stories */}
      <Container>
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
