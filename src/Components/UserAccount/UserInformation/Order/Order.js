import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Footer from '../../../Shared/Footer/Footer';
import './Order.css';

const Order = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loading2, setLoading2] = useState(false);
    const [loadData, setLoadData] = useState(false);

    const dataLoading = () => {
        setLoading(true);
        setLoading2(true);
        if (loadData === true) {
            setLoadData(false)
        } else {
            setLoadData(true)
        }
    }

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(req => req.json())
            .then(data => {
                setOrders(data)
                setLoading(false)
                setLoading2(false)
            })
    }, [orders, loadData])

    return (
        <div className='order-div'>
            <div className='container'>
                <div className='d-flex align-items-center justify-content-between'>
                    <p>Order List</p>
                    {loading2 ?
                        <button style={{ background: "white", width: "108px", color: "#63e067", border: "1px solid #63e067" }}>Reload <Spinner animation="border" variant="info" size="sm" /></button>
                        :
                        <button onClick={dataLoading}>Reload <i className="bi bi-arrow-clockwise"></i></button>
                    }
                </div>
                <hr />
                {loading ?
                    <div style={{ height: "100vh", paddingTop: "17%" }}>
                        <Spinner animation="border" variant="info" />
                    </div>
                    :
                    <div>
                        {
                            orders.map(order => <div className='order-list mb-2 py-2 px-3'
                                key={order.image}>
                                <img style={{ width: "80px", height: "80px" }} src={order.image} alt="" />
                                <h6>{order.title}</h6>
                                <h6>{order.price}</h6>
                            </div>)
                        }
                    </div>
                }
            </div>
            <Footer />
        </div>
    );
};

export default Order;