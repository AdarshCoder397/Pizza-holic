import React from 'react'
import { Link } from 'react-router-dom'
import './Product.css'

const Product = ({product}) => {
  return (
    <Link className='productCard' to={`/item/${product.link}`}>
        <img src={product.images[0].url} alt={product.name}/>
        <p>{product.name}</p>
        <span>{`₹${product.price}`}</span>
    </Link>
  )
}

export default Product