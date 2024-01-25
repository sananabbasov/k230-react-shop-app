import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, json } from 'react-router-dom'
import { addToBasket } from '../redux/features/basket/basketSlice'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
function ProductCard() {

    const [products, setProducts] = useState([])
    const dispatch = useDispatch()

    const getProducts = async () => {
        await fetch("http://localhost:3000/products").then(x => x.json()).then(x => setProducts(x))
    }

    const addToCartHandler = async (productName,productPrice) => {

        dispatch(addToBasket())
        toast.success('🦄 Wow so easy!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });

        await fetch("http://localhost:3000/basket", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: productName,
                price: productPrice,
                quantity: 1
            })
        })
    }

    useEffect(() => {
        getProducts()

    }, [])

    console.log(products);

    return (
        <div className='container m-auto '>
            <ToastContainer
            />
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
                                            <Link to={"/detail/" + data.id}>{data.title}</Link>
                                        </span>
                                    </div>
                                    <div className="mt-2 text-sm text-slate-600">{data.price} </div>
                                    <div onClick={() => addToCartHandler(data.title,data.price)} className="mt-2 text-sm text-slate-600">
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