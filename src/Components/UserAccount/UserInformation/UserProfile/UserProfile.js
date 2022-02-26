import React from 'react';
import './UserProfile.css';
import Header from '../../../Shared/Header/Header';

const UserProfile = () => {
    return (
        <div style={{ background: 'whiteSmoke', marginTop: '10%' }}>
            <Header />
            <div>
                <h2>Hello From Profile</h2>
            </div>
        </div>
    );
};

export default UserProfile;