import { Container } from "react-bootstrap";

import NavBar from "../../components/nav/NavBar";
import Header from "../../components/header/Header";
import CardCategori from "../../components/cardCategories/Categori";
import "./Home.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
// import  icon
import { GrLinkPrevious } from "react-icons/gr";
import { GrLinkNext } from "react-icons/gr";
function Home() {
  let [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:2000/categories")
      .then((e) => setCategories(e.data));
  }, []);
  //* prev & next style
  const slideBTN = (e) => {
    const icon = e.currentTarget.querySelector("svg");
    if (icon) {
      icon.style.color = "#fff";
    }
  };
  const slideBTNMouseLeave = (e) => {
    e.currentTarget.style.background = "#6a6a6a";
    const icon = e.currentTarget.querySelector("svg");
    if (icon) {
      icon.style.color = "black";
    }
  };

  return (
    <>
      <NavBar />
      <Header />
      <Container>
        {/* cardC=>cardCategori */}

        <section className="  cardC">
          <div className="d-flex justify-content-between align-items-center">
            <h2>Shop by Categories</h2>
            {/* p=>prev & N=> Next */}
            <div className="PN-btn mb-4">
              {/* prev btn*/}
              <button
                value="prev"
                onMouseEnter={slideBTN}
                onMouseLeave={slideBTNMouseLeave}
              >
                <GrLinkPrevious size={23} />
              </button>
              {/* next btn */}
              <button
                value="next"
                onMouseEnter={slideBTN}
                onMouseLeave={slideBTNMouseLeave}
              >
                <GrLinkNext size={23} />
              </button>
            </div>
          </div>
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
              },
            }}
          >
            {categories.map((e) => (
              <SwiperSlide key={e.id} className="swiperSlide">
                <CardCategori {...e} />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </Container>
    </>
  );
}

export default Home;
