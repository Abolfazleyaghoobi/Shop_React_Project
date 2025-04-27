import "./Categori.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import SwiperBTN from "../swiperBTN/SwiperBTN";
function CardCategori({ categori, image }) {


  return (
    <>
      <Swiper
        spaceBetween={25}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        breakpoints={{
          1200: {
            slidesPerView: 4,
          },
          992: {
            slidesPerView: 3,
          },
        }}
        className="mySwiper d-flex flex-column-reverse"

      >
        <div className="d-flex justify-content-between align-items-center"> 
          <h2>Shop by Categories</h2>
          <SwiperBTN/>
        </div>
        <SwiperSlide>
          {/*  C-C-categori=>Container card categori  */}

          <div className="C-C-categori  overflow-hidden">
            <div className="cardc position-relative">
              <h2 className="position-absolute model-categori">{categori}</h2>

              <div className="con-img position-relative">
                <img
                  className="img-fluid"
                  src="https://s6.uupload.ir/files/categorisuit_euq.png"
                  alt=""
                />
              </div>
              <button className="position-absolute by-btn">Suit Wear</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/*  C-C-categori=>Container card categori  */}
          <div className="C-C-categori  overflow-hidden">
            <div className="cardc position-relative">
              <h2 className="position-absolute model-categori">{categori}</h2>

              <div className="con-img position-relative">
                <img
                  className="img-fluid"
                  src="https://s6.uupload.ir/files/categoriimage_9vo1.png"
                  alt=""
                />
              </div>
              <button className="position-absolute by-btn">Formal Wear</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="C-C-categori  overflow-hidden">
            <div className="cardc position-relative">
              <h2 className="position-absolute model-categori">{categori}</h2>

              <div className="con-img position-relative">
                <img
                  className="img-fluid"
                  src="https://s6.uupload.ir/files/chatgpt_image_apr_21,_2025,_08_20_24_pm_irec.png"
                  alt=""
                />
              </div>
              <button className="position-absolute by-btn">Winter Wear</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="C-C-categori  overflow-hidden">
            <div className="cardc position-relative">
              <h2 className="position-absolute model-categori">{categori}</h2>

              <div className="con-img position-relative">
                <img
                  className="img-fluid"
                  src="https://s6.uupload.ir/files/chatgpt_image_apr_21,_2025,_10_59_52_pm_8p58.png"
                  alt=""
                />
              </div>
              <button className="position-absolute by-btn">Kids Wear</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/*  C-C-categori=>Container card categori  */}

          <div className="C-C-categori  overflow-hidden">
            <div className="cardc position-relative">
              <h2 className="position-absolute model-categori">{categori}</h2>

              <div className="con-img position-relative">
                <img
                  className="img-fluid"
                  src="https://s6.uupload.ir/files/a7fd8a0f-b536-40a1-aba0-29dda034137c_ko6r.jpg"
                  alt=""
                />
              </div>
              <button className="position-absolute by-btn">T-Shirt</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="C-C-categori  overflow-hidden">
            <div className="cardc position-relative">
              <h2 className="position-absolute model-categori">{categori}</h2>

              <div className="con-img position-relative">
                <img
                  className="img-fluid"
                  src="https://s6.uupload.ir/files/ublulkeojedguw5qwfvr--0--b2lps_bg-rmvd_8ly5.png"
                  alt=""
                />
              </div>
              <button className="position-absolute by-btn">watch</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default CardCategori;
