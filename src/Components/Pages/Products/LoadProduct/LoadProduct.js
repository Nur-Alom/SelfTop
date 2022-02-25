import './LoadProduct.css';
import React, { useEffect, useState } from 'react';

const LoadProduct = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    return (
        <div style={{ padding: '0 3%' }}>
            <div className='py-3 product-container'>
                <h5 className='fw-bold'>ALL PRODUCTS</h5>
                <hr />
            </div>
            <div className='products'>
                {
                    products.map(product => <div className='product' key={product.title}>
                        <img src={product.img} alt="" />
                        <h3>{product.title}</h3>
                    </div>)
                }
            </div>
        </div>
    );
};

export default LoadProduct;