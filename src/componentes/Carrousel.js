import { Swiper, SwiperSlide } from "swiper/react";
import placeObject from "../Hook/placeObject"


// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";


// import required modules
import { EffectFade, Navigation, Pagination,Autoplay } from "swiper";
import ContainerImage from "./containerImage";

const Carrousel =()=> {
  const [info]= placeObject()
  return (

      <Swiper
        spaceBetween={30}
        effect={"fade"}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay,EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        {info.map(element=>{
          return(
            <SwiperSlide><ContainerImage key={element.id} imagen={element.image}/></SwiperSlide>

          )
        })}
    </Swiper>
  );
}
export default Carrousel