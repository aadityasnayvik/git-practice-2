import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import sliderImage1 from "../assets/images/slider-1.jpg";
import sliderImage2 from "../assets/images/slider-2.jpg";
import sliderImage3 from "../assets/images/slider-3.jpg";

export default function Slider() {
  return (
    <div className="container-fluid px-0">
      <div className="slider-container">
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false
      }}
      loop={true}
    >
      <SwiperSlide>
        <div className="slider-1">
            {/* <img src={sliderImage1} alt="Slider Image 1" className="img-fluid"/> */}
            <div className="slider-text">
                <h1>Explore the Universe from your Inbox </h1>
                <h3>Stay up-to-date on the latest news from NASA–from Earth to the Moon, the Solar System and beyond.</h3>
                <p>We will never share your email address.</p>
                <button className="btn btn-primary">Sign Up</button>
            </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="slider-2">
            <div className="slider-text">
                <h1>25 Years of Scientific Discovery</h1>
                <h3>Stay up-to-date on the latest news from NASA–from Earth to the Moon, the Solar System and beyond.</h3>
                <p>We will never share your email address.</p>
                <button className="btn btn-primary">Sign Up</button>
            </div>        
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="slider-3">
            <div className="slider-text">
                <h1>Send Name Around the Moon </h1>
                <h3>Stay up-to-date on the latest news from NASA–from Earth to the Moon, the Solar System and beyond.</h3>
                <p>We will never share your email address.</p>
                <button className="btn btn-primary">Sign Up</button>
            </div>        
        </div>
      </SwiperSlide>
    </Swiper>
    </div>
    </div>
  );
}
