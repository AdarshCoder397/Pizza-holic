import React from 'react'
import './Product.css'
import {Link} from 'react-router-dom'

const Product = ({product}) => {
  return (
    <a className='productCard' href={`${product.link}`} target="_blank">
        <img src={product.images[0].url} alt={product.name}/>
        <p>{product.name}</p>
        <span>{`₹${product.price}`}</span>
    </a>
  )
}

export default Product