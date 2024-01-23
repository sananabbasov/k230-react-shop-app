import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useFetcher, useParams } from 'react-router-dom'
import { addBasketByAmout } from '../redux/features/basket/basketSlice'

function DetailPage() {

  const { id } = useParams()
  const [product, setProduct] = useState([])
  const [cartAmout, setCartAmout] = useState(0)

  let dispatch = useDispatch()

  const getDate = async () => {
    await fetch(`https://fakestoreapi.com/products/${id}`).then(x => x.json()).then(x => setProduct(x))
  }

  console.log(product);
  useEffect(() => {
    getDate()
  }, [])


  return (
    <div>
      <img src={product.image} width="500" height="500" alt="" />
      <h5>{product.category}</h5>
      <input type="number" onChange={(e) => setCartAmout(e.target.value)} />
      <button onClick={() => dispatch(addBasketByAmout(cartAmout*1))}>Add to cart</button>
    </div>
  )
}

export default DetailPage