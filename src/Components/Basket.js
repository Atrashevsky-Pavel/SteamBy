import React from "react";
import './styles/Basket.scss';
import imgDea from './imagesPNG/DEA.png';
import imgBFT from './imagesPNG/BFT.png';
import imgAnMotors from './imagesPNG/AnMotors.png';
import imgNice from './imagesPNG/Nice.png';
import upArrow from './imagesSVG/up-arrow.svg'
import Garbage from "./imagesPNG/garbage.png"
export default (props) => {
    let img = null;
    if(props.brand === 'Dea') {
        img = imgDea;
    }else if (props.brand === 'BFT') {
        img = imgBFT;
    }else if (props.brand === 'An-Motors') {
        img = imgAnMotors;
    }else if (props.brand === 'Nice')  {
        img = imgNice;
    }
    return(
        <div className='basketItem'>
            <div className='basketItemImg'>
                <div className='basketItemImg1'>
                    <img  alt='nothing' src={img}/>
                </div>
                <div className='basketItemImg2'
                onClick={props.delete}
                >
                    <img alt='nothing' src={Garbage}/>
                </div>
            </div>
            <div className='basketItemTitles'>
                <span>{props.brand}</span>
                <span> {props.name}</span>
                <span>{props.power}Wt</span>
            </div>
            <div className="basketItemButtons">
                <div>
                    <div className='basketItemButtonsInto1'>
                        <img alt='nothing'
                         id='upArrow1'
                         onClick={props.lessProduct}
                         src={upArrow}/>
                         <span id = 'quantity'>{props.quantity}</span>
                         <img alt='nothing'
                         id='upArrow2'
                         onClick={props.moreProduct}
                         src={upArrow}/>
                    </div>
                </div>
                <div>
                    <div className='basketItemButtonsInto2'>
                        <span>${props.sum}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
