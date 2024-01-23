import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToBasket } from '../redux/features/basket/basketSlice'

function ProductCard() {

    const [products, setProducts] = useState([])
    const dispatch = useDispatch()

    const getProducts = async () => {
        await fetch("https://fakestoreapi.com/products").then(x => x.json()).then(x => setProducts(x))
    }

    useEffect(() => {
        getProducts()
        
    }, [])

    console.log(products);

    return (
        <div className='container m-auto '>
            <div className="grid grid-cols-1 p-4 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
                {
                    products.map((data, index) => (
                        <div className="my-6" key={index}>
                            <img className="rounded w-[400px] h-[300px]" src={data.image} alt="" />
                            <div className="mt-2">
                                <div>
                                    <div className="text-xs text-slate-600 uppercase font-bold tracking-wider"> {data.category} </div>
                                    <div className="font-bold text-slate-700 leading-snug">
                                        <span className="hover:underline">
                                            <Link to={"/detail/"+data.id}>{data.title}</Link>
                                        </span>
                                    </div>
                                    <div className="mt-2 text-sm text-slate-600">{data.price} </div>
                                    <div onClick={()=> dispatch(addToBasket())} className="mt-2 text-sm text-slate-600">
                                        Add to cart
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }


            </div>
        </div>
    )
}

export default ProductCard