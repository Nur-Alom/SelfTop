import React from 'react';
import './UserProfile.css';
import userImg from '../../../Images/user.jpg';

const UserProfile = () => {
    const data = [
        {
            "title": "hello1",
            "text": "100"
        },
        {
            "title": "hello2",
            "text": "100"
        },
        {
            "title": "hello3",
            "text": "100"
        },
        {
            "title": "hello4",
            "text": "100"
        },
        {
            "title": "hello5",
            "text": "100"
        },
        {
            "title": "hello6",
            "text": "100"
        },
        {
            "title": "hello7",
            "text": "100"
        },
        {
            "title": "hello8",
            "text": "100"
        },
        {
            "title": "hello9",
            "text": "100"
        },
        {
            "title": "hello10",
            "text": "100"
        },
    ]

    return (
        <div className='master-div'>
            <div className='profile-main'>
                <div className='user-section'>
                    <img className='profile-img' src={userImg} alt="" />
                    <br />
                    <div className='d-flex justify-content-center'>
                        <small style={{ color: 'white', backgroundColor: '#AED39A', padding: '5px 10px', borderRadius: '19px', fontWeight: 'bold', marginRight: '10px' }}><i className="bi bi-person-check"></i> User ID : ST-001</small>
                        <button style={{ color: 'white', backgroundColor: 'green', padding: '4px 20px', borderRadius: '19px', border: 'none' }}><i className="bi bi-arrow-clockwise"></i> ৳ 1000.00</button>
                    </div>
                    <hr style={{ margin: '13px 0 0', height: '0' }} />
                    <ul>
                        <div>
                            <li><span><i className="bi bi-person"></i> User Name </span></li>
                            <li>:<strong> Nur Alom Islam</strong></li>
                        </div>
                        <div>
                            <li><span><i className="bi bi-phone"></i> User Phone </span></li>
                            <li>:<strong> 01990589959</strong></li>
                        </div>
                        <div>
                            <li><span><i className="bi bi-envelope"></i> User Mail </span></li>
                            <li>:<strong> nuralom.dev@gmail.com</strong></li>
                        </div>
                    </ul>
                </div>
                <div className='information-section'>
                    <h5>Basic Information <i className="bi bi-arrow-down-circle"></i></h5>
                    <hr style={{ margin: '5px 0' }} />
                    <ul>
                        <p>Hello</p>
                        <p>Hello</p>
                        <p>Hello</p>
                        <p>Hello</p>
                        <p>Hello</p>
                        <p>Hello</p>
                    </ul>
                    <h5>Recent Activities <i className="bi bi-arrow-down-circle"></i></h5>
                    <hr style={{ margin: '5px 0' }} />
                    <div className='ra-div'>
                        {
                            data.map(dt =>
                                <div key={dt.title} className='ra-item d-flex bg-white mb-2 py-2 px-3'>
                                    <h4>{dt.title}</h4>
                                    <p>{dt.text}</p>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    );
};

export default UserProfile;