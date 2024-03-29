import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import "swiper/css/autoplay";

// import required modules
import { EffectCards } from "swiper";

export default function Review() {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        navigation
        autoplay={{delay:5000}}
        modules={[EffectCards, Navigation, Autoplay]}
        className="lg:w-10/12 w-9/12 lg:h-80 overflow-hidden"
      >
        <SwiperSlide className="bg-white flex items-center border-2 border-green-200">
          <div className="text-center px-4 lg:px-10 py-3">
            <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1670478239/5mlog/Ellipse_794_uiydzc.png" alt="review" className="w-20 mx-auto mb-3" />
            <p className="pb-3 fw-600">Green Mouse</p>
            <p className="fs-500">Culpa amet occaecat commodo id cupidatat amet irure est consequat ex esse cupidatat. Mollit nulla duis nulla cupidatat voluptate minim. Nulla consequat ad aute sunt incididunt nostrud pariatur veniam officia dolor non tempor. Aliqua sint aute aliquip do.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-white flex items-center border-2 border-green-200">
          <div className="text-center px-4 lg:px-10 py-3">
            <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1670478239/5mlog/Ellipse_794_uiydzc.png" alt="review" className="w-20 mx-auto mb-3" />
            <p className="pb-3 fw-600">Afo Promise</p>
            <p className="fs-500">Culpa amet occaecat commodo id cupidatat amet irure est consequat ex esse cupidatat. Mollit nulla duis nulla cupidatat voluptate minim. Nulla consequat ad aute sunt incididunt nostrud pariatur veniam officia dolor non tempor. Aliqua sint aute aliquip do.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-white flex items-center border-2 border-green-200">
          <div className="text-center px-4 lg:px-10 py-3">
            <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1670478239/5mlog/Ellipse_794_uiydzc.png" alt="review" className="w-20 mx-auto mb-3" />
            <p className="pb-3 fw-600">Chukka Daniel</p>
            <p className="fs-500">Culpa amet occaecat commodo id cupidatat amet irure est consequat ex esse cupidatat. Mollit nulla duis nulla cupidatat voluptate minim. Nulla consequat ad aute sunt incididunt nostrud pariatur veniam officia dolor non tempor. Aliqua sint aute aliquip do.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-white flex items-center border-2 border-green-200">
          <div className="text-center px-4 lg:px-10 py-3">
            <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1670478239/5mlog/Ellipse_794_uiydzc.png" alt="review" className="w-20 mx-auto mb-3" />
            <p className="pb-3 fw-600">Grace Shutter</p>
            <p className="fs-500">Culpa amet occaecat commodo id cupidatat amet irure est consequat ex esse cupidatat. Mollit nulla duis nulla cupidatat voluptate minim. Nulla consequat ad aute sunt incididunt nostrud pariatur veniam officia dolor non tempor. Aliqua sint aute aliquip do.</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}