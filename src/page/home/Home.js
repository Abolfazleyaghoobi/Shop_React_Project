import { Container } from "react-bootstrap";

import NavBar from "../../components/nav/NavBar";
import Header from "../../components/header/Header";
import CardCategori from "../../components/cardCategories/Categori";
import "./Home.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import  icon

import SwiperBTN from "../../components/swiperBTN/SwiperBTN";
import Bestseller from "../../components/cardBestseller/Bestseller";
function Home() {
  let [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:2000/categories")
      .then((e) => setCategories(e.data));
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
              }
            
            }}
          >
            <div className="d-flex justify-content-between align-items-center">
              <h2>Shop by Categories</h2>
              {/* p=>prev & N=> Next */}
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
            <Bestseller/>
        </section>

      </Container>
    </>
  );
}

export default Home;
