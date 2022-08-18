import React, {useState,useEffect}  from 'react';
import './Shop.css';
// import Products from '../Products/Products';
import Product from '../Product/Product';


const Shop = () => {

    // const [items,setItems]=useState([]);
    const [products,setProducts] =useState([]);

    const [cart, setCart] = useState([]);


    useEffect( ()=>{
        fetch('products.json')
        .then(res=>res.json())
        // .then(data=>setItems(data))
        .then(data=>setProducts(data))
    },[]);

    /*  const handleAddToCart = ()=>{
          console.log('clicked');
    } */

    const handleAddToCart = (product)=>{
         console.log(product);
         // do not do this: cart.push(product);
        const newCart = [...cart, product];
        setCart(newCart);
    } 

   /*  const handleAddToCart = (id)=>{
        console.log(id);
    } */

    return (
        <div className="shop-container">
            <div className="product-container">
            <h3>This is for products: {products.length}</h3>
              {/* <Products/> */}

             <div className="shoe-container">
             {
                products.map(product=><Product
                key={product.id}
                product={product}
                handleAddToCart={handleAddToCart}
                ></Product>)
              }
             </div>

            </div>
            <div className="cart-container">
               <h4>Order Summary</h4>
               <p>Selected Items: {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;