import React from 'react';
import './Product.css';
import { BsFillCartCheckFill } from "react-icons/bs";



const Product = (props) => {
    // const Product = ({product,handleAddToCart}) => {

    //console.log(props.product);

    const {id,img,name,price,seller,ratings}= props.product;
    // const {id,img,name,price,seller,ratings}= product;
    // console.log(props);

    const {handleAddToCart} = props;
    // const {product,handleAddToCart} = props;

    return (
        <div className="product">
            {/* <h3>This is product</h3> */}
            <img src={img} alt="" />
            <div className='product-info'>
            <p className='title'>{name}</p>
                <p>Price: ${price}</p>
                <p><small>Seller: {seller}</small></p>
                <p className="rating"><small>Ratings: {ratings} stars</small></p>
            </div>
            <div className="shoe-btn">

           {/*  <button onClick={handleAddToCart} className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>
                //  <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
               < BsFillCartCheckFill></BsFillCartCheckFill>
            </button> */}

           {/*   <button onClick={()=>handleAddToCart(props.product)} className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>
                //   <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> 
               < BsFillCartCheckFill></BsFillCartCheckFill>
            </button>
            </div> */}

           {/*  <button onClick={()=>handleAddToCart(id)} className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>
                //  <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> 
               < BsFillCartCheckFill></BsFillCartCheckFill>
            </button> */}

            
            <button onClick={()=>handleAddToCart(props.product)} className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>
                {/* <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>  */}
               < BsFillCartCheckFill></BsFillCartCheckFill>
            </button> 
            </div>
            
        </div>
    );
};

export default Product;