import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function Slider() {
    const [categories, setCategory] = useState([])

    const getCategories = async () => {
        await fetch(`https://fakestoreapi.com/products/category/electronics`).then(a => a.json()).then(a => setCategory(a))
    }

    useEffect(() => {
        getCategories();
    }, [])

    return (
        <div>
            <Swiper
                slidesPerView={3}
                loop={true}
            >
                {
                    categories.map((c, index) => (
                        <SwiperSlide key={index}>
                            <img className='w-[100%] h-[500px]' src={c.image} alt="" />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default Slider