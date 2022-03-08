import React from 'react';
import './Wallet.css';
import walletImg from '../../../Images/wallet.png';
import BkashImg from '../../../Images/bKash.png';
import NogodImg from '../../../Images/nogodjpg.jpg';
import RocketImg from '../../../Images/rocket.png';
import UpayImg from '../../../Images/upay.jpg';

const Wallet = () => {
    const data = "2555"

    return (
        <div className='wallet-main'>
            <div className='wallet-action-div'>
                <img className='wallet-img' src={walletImg} alt="" />
                <br />
                <ul>
                    <strong>Select Your Payment Option. <i className="bi bi-arrow-down-circle"></i></strong>
                    <div className='wallet-pay-option'>
                        <li><input type="checkbox" name="Bkash" id="1" /><small>Bkash</small></li>
                        <li><input type="checkbox" name="Nogod" id="2" /><small>Nagad</small></li>
                        <li><input type="checkbox" name="Rocket" id="3" /><small>Rocket</small></li>
                        <li><input type="checkbox" name="Upay" id="4" /><small>Upay</small></li>
                    </div>
                    <hr style={{ color: 'gray' }} />
                    <li><i className="bi bi-person-circle"></i><input type="text" disabled defaultValue={data} /></li>
                    <li><i className="bi bi-123"></i><input type="number" placeholder='Sending Number' /></li>
                    <li><i className="bi bi-cash-coin"></i><input type="number" placeholder='Amount' /></li>
                    <li><i className="bi bi-send-check"></i><input type="text" placeholder='Transaction ID' /></li>
                    <li><button className='add-money-btn' type="submit">Add Money <i className="bi bi-plus-lg"></i></button></li>
                </ul>
            </div>
            <div className='wallet-info-div'>
                <div className='wallet-info-images'>
                    <li>
                        <img src={BkashImg} alt="" />
                        <strong>Bkash</strong>
                    </li>
                    <li>
                        <img src={NogodImg} alt="" />
                        <strong>Nagad</strong>
                    </li>
                    <li>
                        <img src={RocketImg} alt="" />
                        <strong>Rocket</strong>
                    </li>
                    <li>
                        <img src={UpayImg} alt="" />
                        <strong>Upay</strong>
                    </li>
                </div>
            </div>
        </div>
    );
};

export default Wallet;