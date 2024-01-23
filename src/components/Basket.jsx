import React from 'react'
import { useSelector } from 'react-redux'

function Basket() {

  let {basket} = useSelector((state) => state)
  console.log(basket.value);
  return (
    <div>Cart <sup>{basket.value}</sup></div>
  )
}

export default Basket