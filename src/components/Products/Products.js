import React, {useState,useEffect} from 'react';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    const [items,setItems]=useState([]);

    useEffect( ()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setItems(data))
    },[]);

    return (
        <div className="shoe-container">
            {
                items.map(item=><Product 
                    key={item.id}
                    item={item}
                ></Product>)
            }
            
        </div>
    );
};

export default Products;