import React, { useEffect, useState } from 'react'
import { useFetcher, useParams } from 'react-router-dom'

function DetailPage() {

  const { id } = useParams()
  const [product, setProduct] = useState([])

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
    </div>
  )
}

export default DetailPage