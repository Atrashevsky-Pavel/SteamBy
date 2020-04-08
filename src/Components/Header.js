import React from "react";
import './styles/Header.scss';
import userImg from './imagesSVG/user.svg';
import arrowDownImg from './imagesSVG/arrow-down.svg';
import basketImg from './imagesSVG/basket.svg';
import bellImg from './imagesSVG/bell.svg';
import walletImg from './imagesSVG/wallet.svg';
import threeDots from './imagesSVG/threeDots.svg';
export default (props) => {
    return(
        <div id="headerItem">
                    <img alt='nothing' src={userImg}/>
                    <p className='myAccount'>MY ACCOUNT</p>
                    <img className='arrowDown' alt='nothing' src={arrowDownImg}/>
                    <img className='threeDots' alt='nothing' src={threeDots}/>
                    <img alt='nothing' src={walletImg}/>
                    <img className='threeDots' alt='nothing' src={threeDots}/>
                    <img alt='nothing' src={bellImg}/>
                    <img className='threeDots' alt='nothing' src={threeDots}/>
                    <p className='basketQuantity'>{props.quantityProducts}</p>
                    <img onClick={props.basket} className='basket' alt='nothing' src={basketImg}/>
        </div>
    )
}
