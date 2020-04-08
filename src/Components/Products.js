import React from "react";
import './styles/Products.scss';
import './styles/ProductsHover.scss';
import imgDea from './imagesPNG/DEA.png';
import imgBFT from './imagesPNG/BFT.png';
import imgAnMotors from './imagesPNG/AnMotors.png';
import imgNice from './imagesPNG/Nice.png';

export default (props) => {
    let img;
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
      <div className='productsItem'>
              <div>
                  <span>{props.brand}</span>
                  <span> {props.name}</span>
              </div>
              <div>
                  <span className='productsItem_power'>{props.power}Wt</span>
              </div>
              <div>
                  <img alt='nothing' src={img}/>
              </div>
              <div>
                  <span className='productsItem_price'>${props.price}</span>
              </div>
              <div className='productsItemHover'>
                  <div id = "intoHover">
                          <div>
                              <span>{props.brand}</span>
                              <span>{ props.name}</span>
                          </div>
                          <div>
                              <span id='intoHoverPrice'>${props.price}</span>
                          </div>
                          <div>
                              <select>
                                  <option>11/ht rate</option>
                                  <option>12/ht rate</option>
                                  <option>13/ht rate</option>
                              </select>
                          </div>
                          <div>
                              <button>Details</button><button
                              onClick={props.Add}
                              >Add to cart</button>
                          </div>
                  </div>
              </div>
      </div>
    )
}
