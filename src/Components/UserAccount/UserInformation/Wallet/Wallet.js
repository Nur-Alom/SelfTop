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
                    <strong>Select Your Payment Method <i className="bi bi-arrow-down-circle"></i></strong>
                    <div className='wallet-pay-option'>
                        <li><input type="checkbox" name="Bkash" id="1" /><small>Bkash</small></li>
                        <li><input type="checkbox" name="Nogod" id="2" /><small>Nagad</small></li>
                        <li><input type="checkbox" name="Rocket" id="3" /><small>Rocket</small></li>
                        <li><input type="checkbox" name="Upay" id="4" /><small>Upay</small></li>
                    </div>
                    <hr style={{ color: 'gray' }} />
                    <h6 className='text-black fw-bold pb-2'>ADD MONEY SECTION <i className="bi bi-arrow-down-circle"></i></h6>
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
                <div className='text-start ps-3'>
                    <h4>bKash (01878238781)</h4>
                    <strong>টাকা যোগ করবেন কীভাবে?</strong>
                    <br />
                    <small>(যেকোন পার্সোনাল বিকাশ একাউন্ট হতে হবে)</small>
                </div>
                <div className='pt-3 ps-3 text-start'>
                    <strong>Step-1</strong>
                    <ul>
                        <li> প্রথমে উপরে দেওয়া সেল্ফটপ ওয়ালেট  নাম্বারটি কপি করুণ।</li>
                        <li> (bKash,Nagad,Rocket,Upay) App অথাবা Ussd কোডের মধ্যেমে একাউন্ট এ প্রোবেশ করুন।</li>
                        <li> একাউন্ট থেকে সেন্ড মানি অপশন সিলেক্ট করুণ।</li>
                        <li> সেল্ফটপ ওয়ালেট নাম্বার (-) প্রবেশ করুণ।</li>
                        <li> টোটাল এম্যাউন্ট অর্থাৎ কত টাকা যোগ করবেন তার পরিমাণ প্রবেশ করুণ।</li>
                        <li> রেফারেন্সে আপনার ইউজার আইডি প্রবেশ করুণ।</li>
                        <li> আপনার বিকাশ পিন নাম্বার প্রবেশ করে সেন্ট মানি সম্পুন্য করুণ।</li>
                    </ul>
                    <strong>Step-2</strong>
                    <ul>
                        <li> পেমেন্ট মেথড থেকে (bKash,Nagad,Rocket,Upay) যেকোন একটি সিলেক্ট করুন।</li>
                        <li> এড মানি সেকশনে প্রথম বক্সে আপনি যে নাম্বার থেকে টাকা পাঠিয়েছেন সেই নাম্বারটি লিখুন।</li>
                        <li> দ্বিতীয় বক্সে আপনি কত টাকা পাঠিয়েছেন সেটা লিখুন।</li>
                        <li> তিত্বীয় বক্সে আপনি আপনার ট্রানজেকশন আইডিটি লিখুন।</li>
                        <li> তারপর Add Money + বাটনে ক্লিক করুণ।</li>
                        <li> পাঁচ থেকে দশ মিনিটের মধ্যে আপনার ওয়ালেটে টাকা যোগ হয়ে যাবে।</li>
                        <li> অবশ্যই টাকা সেন্ট মানি করার পর এই কাজটি করবেন।</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Wallet;