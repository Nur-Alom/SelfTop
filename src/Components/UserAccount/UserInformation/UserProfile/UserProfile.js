import React, { useEffect, useState } from 'react';
import './UserProfile.css';
import userImg from '../../../Images/user.jpg';
import { Spinner } from 'react-bootstrap';
import Footer from '../../../Shared/Footer/Footer';

const UserProfile = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loading2, setLoading2] = useState(false);
    const [loadData, setLoadData] = useState(false);

    const balanceLoad = () => {
        setLoading(true)
        setLoading2(true)
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
                const reverseData = data.reverse()
                // const dataLimit = reverseData.slice(0, 3)
                setProducts(reverseData.slice(0, 3))
                setLoading(false)
                setLoading2(false)
            })
    }, [products, loadData])

    return (
        <div className='master-div'>
            <div className='profile-main'>
                <div className='user-section'>
                    <img className='profile-img' src={userImg} alt="" />
                    <br />
                    <div className='d-flex justify-content-center'>
                        <small><i className="bi bi-person-check"></i> User : ST-001</small>
                        {loading2 ?
                            <button style={{ background: "white", color: "#63e067", border: "1px solid #63e067", borderRadius: "18px", padding: "4px 20px" }}><Spinner animation="border" variant="info" size="sm" /> ৳ 1000.00</button>
                            :
                            <button onClick={balanceLoad} className='balance-btn'><i className="bi bi-arrow-clockwise"></i> ৳ 1000.00</button>
                        }
                    </div>
                    <hr style={{ margin: '13px 0 0', height: '0' }} />
                    <ul>
                        <div>
                            <li><span><i className="bi bi-person"></i> Name </span></li>
                            <li>:<strong> Nur Alom Islam</strong></li>
                        </div>
                        <div>
                            <li><span><i className="bi bi-phone"></i> Phone </span></li>
                            <li>:<strong> 01990589959</strong></li>
                        </div>
                        <div>
                            <li><span><i className="bi bi-envelope"></i> Mail </span></li>
                            <li>:<strong> nuralom.dev@gmail.com</strong></li>
                        </div>
                    </ul>
                </div>
                <div className='information-section'>
                    <h5>Basic Information <i className="bi bi-arrow-down-circle"></i></h5>
                    <hr style={{ margin: '10px 0' }} />
                    <ul>
                        <p>Hello</p>
                        <p>Hello</p>
                        <p>Hello</p>
                        <p>Hello</p>
                        <p>Hello</p>
                        <p>Hello</p>
                    </ul>
                    <h5>Recent Activities <i className="bi bi-arrow-down-circle"></i></h5>
                    <hr style={{ margin: '10px 0' }} />
                    {loading ?
                        <div style={{ textAlign: "center", paddingTop: "12%" }}>
                            <Spinner animation="border" variant="info" />
                        </div>
                        :
                        <div className='ra-div'>
                            {
                                products.map(product =>
                                    <div key={product.id} className='ra-item mb-2 py-2 px-3'>
                                        <img src={product.image} alt="" />
                                        <h6>{product.title.slice(0, 50)}</h6>
                                        <p>{product.price}</p>
                                    </div>
                                )
                            }
                        </div>}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default UserProfile;