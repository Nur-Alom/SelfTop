import React from 'react';
import './UserProfile.css';
import userImg from '../../../Images/user.jpg';

const UserProfile = () => {
    return (
        <div className='profile-main'>
            <div className='user-section'>
                <img className='profile-img' src={userImg} alt="" />
                <br />
                <small style={{ color: 'white', backgroundColor: 'pink', padding: '5px 10px', borderRadius: '19px', fontWeight: 'bold' }}><i className="bi bi-person-check"></i> User ID : ST-001</small>
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
                <h2>Hello From information Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores eveniet beatae autem nihil facilis ut earum ducimus aut, sit praesentium excepturi? Labore </h2>
            </div>
        </div>
    );
};

export default UserProfile;