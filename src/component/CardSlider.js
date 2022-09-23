import React from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";

import BlogComp from './pages/BlogComp';

// import image
import image1 from '../img/image1.JPG';
import image2 from '../img/image2.jpg'
import image3 from '../img/image3.JPG'
import image4 from '../img/image4.jpg'
import image5 from '../img/image5.jpg'
import image6 from '../img/image6.JPG'


const CardSlider = () => {
    return (
        <>
            <h1>BLOG & NEWS</h1>
            <div className="card-slider">
                <div className="card-slider-container container">
                    <div className="card-slider">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={10}
                            modules={[Pagination, Navigation]}
                            className="mySwiper"
                            loop={true}
                            loopFillGroupWithBlank={true}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            breakpoints={{
                                640: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                },
                            }}
                        >
                            <SwiperSlide>
                                <BlogComp data={{
                                    category: "News",
                                    img: image1,
                                    title: "Youth For Indonesia Batch 1 at Sorobali, Kabupaten Bima, Nusa Tenggara Barat.",
                                    dates: "2 February 2021"
                                }} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <BlogComp data={{
                                    category: "Blogs",
                                    img: image2,
                                    title: "A Story from Sorobali.",
                                    dates: "4 February 2021"
                                }} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <BlogComp data={{
                                    category: "News",
                                    img: image3,
                                    title: "Youth For Indonesia Batch 2 at Semokan Ruak, Kabupaten Lombok Utara, Nusa Tenggara Barat.",
                                    dates: "15 October 2021"
                                }} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <BlogComp data={{
                                    category: "Blogs",
                                    img: image4,
                                    title: "A Short Story from Semokan Ruak.",
                                    dates: "16 October 2021"
                                }} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <BlogComp data={{
                                    category: "News",
                                    img: image5,
                                    title: "Youth For Indonesia Batch 2 Trip To Gili Trawangan.",
                                    dates: "15 October 2021"
                                }} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <BlogComp data={{
                                    category: "Blogs",
                                    img: image6,
                                    title: "Anniversary Youth For Indonesia.",
                                    dates: "20 October 2021"
                                }} />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </>

    )
}

export default CardSlider