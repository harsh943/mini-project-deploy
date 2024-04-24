import React from 'react'
import './productdisplay.css'
import start_icon from '../Assets/star_icon.png'
import star_dull from '../Assets/star_dull_icon.png'
import { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'

export const Productdisplay = (props) => {
    const { product} = props;
    const {addToCart} = useContext(ShopContext);

  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.image} alt="" />
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
                <img src={start_icon} alt="" />
                <img src={start_icon} alt="" />
                <img src={start_icon} alt="" />
                <img src={start_icon} alt="" />
                <img src={star_dull} alt="" />
                <p>(143)</p>

            </div>
            <div className="productdipslay-right-prices">
                <div className="productdisplay-right-price-old">Rs {product.old_price}</div>
                <div className="productdisplay-right-price-new">Rs {product.new_price}</div>
            </div>
            <div className="productdisplay-right-description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque fuga debitis ut. Eos repellendus 
                numquam illum id autem fugit modi optio, dolor ullam et, minus nisi atque in, repellat dolores.
            </div>
            <div className="productdisplay-right-size">
                <h1>Select Size</h1>
                <div className="productdisplay-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>Add to Cart</button>
            <p className='productdisplay-right-category'><span>Category: </span>Women,Tshirt,Skirts</p>
            <p className='productdisplay-right-category'><span>Tags: </span>Modern,Latest</p>
        </div>
    </div>
  )
}
