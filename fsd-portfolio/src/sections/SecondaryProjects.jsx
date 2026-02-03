import { skillsFe } from '../datas/skills';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/effect-cards';

import '../styles/swipe.css';


import { EffectCards } from 'swiper/modules';

export default function SecondaryProjects() {
  return (
    <>
    <h5 className='text-center mt-5'>More About Technical Skills & Implementation</h5>
    <div className="swiper-con container  d-flex ">
   <div className="feSwipe">
     <div className="feh">
          FrontEnd
     </div>
  <Swiper
    effect="cards"
    grabCursor={true}
    modules={[EffectCards]}
    className="mySwiper"
  >
    {skillsFe.map((skill, index) => (
      <SwiperSlide key={index}>
        <div className="skill-card">
          <h6>{skill.work}</h6>
          <p>{skill.desc}</p>
          <small>{skill.projects}</small>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>

     <div className="beSwipe">
 <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
     </div>
     <div className="dbSwipe">
 <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
     </div>
    </div>
     
       
    </>
  );
}
