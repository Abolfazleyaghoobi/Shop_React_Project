import { Col, Container, Row } from "react-bootstrap";
import NavBar from "../../components/nav/NavBar";
import Header from "../../components/header/Header";
import CardCategori from "../../components/cardCategories/Categori";
import "./Home.css";
import { useEffect, useState } from "react";
import axios from "axios";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
function Home() {
  let [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:2000/categories")
      .then((e) => setCategories(e.data));
   
  }, []);
  return (
    <>
      <NavBar />
      <Header />
      <Container>
        {/* cardC=>cardCategori */}

        <section className="  cardC">
          <h2>Shop by Categories</h2>
          <Swiper
            slidesPerView={5}
            spaceBetween={10}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
            loop={true}
            breakpoints={{
              1400: {
                slidesPerView: 5,
              },
              1200: {
                slidesPerView: 4,
              },
              992: {
                slidesPerView: 3,
              }
             
            }}
          >
            {categories.map((e) => (
              <SwiperSlide key={e.id} className="swiperSlide">
                <CardCategori  {...e} />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </Container>
    </>
  );
}

export default Home;
