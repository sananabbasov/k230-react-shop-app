import React, { useEffect, useState } from 'react'
import ProductSlider from '../components/ProductSlider'

function ShopPage() {

  const [categories, setCategory] = useState([])

  const getCategories = async () => {
    await fetch(`https://fakestoreapi.com/products/categories`).then(a => a.json()).then(a => setCategory(a))
  }

  useEffect(() => {
    getCategories();
  }, [])
  return (
    <div>
      {
        categories.map((category, index) => (
          <ProductSlider key={index} categoryName={category} />

        ))
      }
      <hr />
    </div>
  )
}

export default ShopPage