import React, { useEffect, useState } from 'react'
import {Swiper, SwiperSlide } from 'swiper/react'

function ProductSlider({ categoryName }) {
    const [products, setProducts] = useState([])


    const getProducts = async () => {
        await fetch(`https://fakestoreapi.com/products/category/${categoryName}`).then(x => x.json()).then(x => setProducts(x))
    }

    useEffect(() => {
        getProducts()
    }, [])


    return (
        <Swiper
            slidesPerView={3}
            loop={true}
        >
            {
                products.map((product, index) => (
                    <SwiperSlide key={index}>
                        <img className='w-[200px] h-[200px]' src={product.image} alt="" />
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}

export default ProductSlider