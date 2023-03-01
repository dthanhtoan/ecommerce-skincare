import React from 'react'
import css from "./Testimonial.module.css"
// import "../../components/Slider/Slider.css"

// import imgs
import Hero from "../../assets/testimonialHero.png"

// import swiper
import {Swiper, SwiperSlide} from 'swiper/react'

// import testimonialsData
import { TestimonialsData } from "../../data/testimonials"

const Testimonial = () => {
  return (
    <div className={css.testimonials}>

        <div className={css.wrapper}>
            <div className={css.container}>
                <span>Top Rate</span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto asperiores itaque aliquam nesciunt fugiat autem ea quae obcaecati ullam vel magnam laborum labore quia, sunt id optio? Pariatur, unde voluptate.</span>
            </div>

            <img src={Hero} alt="" />

            <div className={css.container}>
                <span>100k</span>
                <span>Happy Customer with us</span>
            </div>

        </div>

        <div className={css.review}>Review</div>

        <div className={css.carousal}>
            <Swiper 
                slidesPerView={3}
                slidesPerGroup={1}
                spaceBetween={20}
            >
                {
                    TestimonialsData.map((testimonial, i) => (
                        <SwiperSlide>
                            <div className={css.testimonial}>
                                <img src={testimonial.image} alt="" />
                                <span>{testimonial.comment}</span>

                                <hr />
                                
                                <span>{testimonial.name}</span>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    </div>
  )
}

export default Testimonial