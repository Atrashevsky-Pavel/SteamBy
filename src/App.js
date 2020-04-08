import React, {Component} from 'react';
import './App.scss';
import Header from './Components/Header.js';
import Products from './Components/Products.js';
import News from './Components/News.js';
import hamburger from './Components/imagesSVG/hamburger.svg';
import Basket from "./Components/Basket";
import Cancel from "./Components/imagesSVG/cancel.svg"
class App extends Component {
  state = {
    products: [
      {brand: 'Dea', name: 'livi1', power: 100, price: 150},
      {brand: 'Dea', name: 'livi2', power: 200, price: 200},
      {brand: 'Dea', name: 'livi3', power: 300, price: 250, new: true},
      {brand: 'Dea', name: 'livi4', power: 400, price: 300},
      {brand: 'Dea', name: 'livi5', power: 500, price: 350},
      {brand: 'Dea', name: 'livi6', power: 600, price: 400},
      {brand: 'Dea', name: 'livi7', power: 700, price: 450},
      {brand: 'Dea', name: 'livi8', power: 800, price: 500},
      {brand: 'Dea', name: 'livi9', power: 900, price: 550},
      {brand: 'Dea', name: 'livi10', power: 1000, price: 600},
      {brand: 'Dea', name: 'livi11', power: 1100, price: 650},
      {brand: 'Dea', name: 'livi12', power: 1200, price: 700},
      {brand: 'Dea', name: 'livi13', power: 1300, price: 750},
      {brand: 'Dea', name: 'livi14', power: 1400, price: 800, new: true},
      {brand: 'Dea', name: 'livi15', power: 1500, price: 850},
      {brand: 'BFT', name: 'Deimos BT 100', power: 100, price: 150},
      {brand: 'BFT', name: 'Deimos BT 200', power: 200, price: 200},
      {brand: 'BFT', name: 'Deimos BT 300', power: 300, price: 250},
      {brand: 'BFT', name: 'Deimos BT 400', power: 400, price: 300},
      {brand: 'BFT', name: 'Deimos BT 500', power: 500, price: 350},
      {brand: 'BFT', name: 'Deimos BT 600', power: 600, price: 400},
      {brand: 'BFT', name: 'Deimos BT 700', power: 700, price: 450, new: true},
      {brand: 'BFT', name: 'Deimos BT 800', power: 800, price: 500},
      {brand: 'BFT', name: 'Deimos BT 900', power: 900, price: 550},
      {brand: 'BFT', name: 'Deimos BT 1000', power: 1000, price: 600},
      {brand: 'BFT', name: 'Deimos BT 1100', power: 1100, price: 650},
      {brand: 'BFT', name: 'Deimos BT 1200', power: 1200, price: 700},
      {brand: 'BFT', name: 'Deimos BT 1300', power: 1300, price: 750},
      {brand: 'BFT', name: 'Deimos BT 1400', power: 1400, price: 800},
      {brand: 'BFT', name: 'Deimos BT 1500', power: 1500, price: 850, new: true},
      {brand: 'BFT', name: 'Deimos BT 1600', power: 1600, price: 900},
      {brand: 'An-Motors', name: 'A200', power: 200, price: 200},
      {brand: 'An-Motors', name: 'A300', power: 300, price: 300},
      {brand: 'An-Motors', name: 'A400', power: 400, price: 400},
      {brand: 'An-Motors', name: 'A500', power: 500, price: 500},
      {brand: 'An-Motors', name: 'A600', power: 600, price: 600},
      {brand: 'An-Motors', name: 'A700', power: 700, price: 700},
      {brand: 'An-Motors', name: 'A800', power: 800, price: 800},
      {brand: 'An-Motors', name: 'A900', power: 900, price: 900},
      {brand: 'An-Motors', name: 'A1000', power: 1000, price: 1000},
      {brand: 'An-Motors', name: 'A1100', power: 1100, price: 1100},
      {brand: 'An-Motors', name: 'A1200', power: 1200, price: 1200},
      {brand: 'An-Motors', name: 'A1300', power: 1300, price: 1300},
      {brand: 'Nice', name: 'Road 300', power: 300, price: 200},
      {brand: 'Nice', name: 'Road 400', power: 400, price: 300},
      {brand: 'Nice', name: 'Road 500', power: 500, price: 400},
      {brand: 'Nice', name: 'Road 600', power: 600, price: 500, new: true},
      {brand: 'Nice', name: 'Road 700', power: 700, price: 600, new: true},
      {brand: 'Nice', name: 'Road 800', power: 800, price: 700},
      {brand: 'Nice', name: 'Road 900', power: 900, price: 800},
      {brand: 'Nice', name: 'Road 1000', power: 1000, price: 900}
    ],
    basket: [
    ],
    basketShow: true,
    showMenu: false
    };
    sum = 0;
    quantityProducts = 0;
    newListProducts() {
    const newArray = [];
    this.state.products.forEach((item)=> {
      if(item.new) {
        newArray.push(item);
      }
    });
    return newArray;
    }
    BasketCall() {
        if(this.state.basketShow) {
            this.setState({
                basketShow: false
            })}else {
            this.setState({
                basketShow: true
            })}
    }
    callMenu(check) {
        let show;
        if(check) {
            show = true
        } else{
            show = false
        }
        this.setState({
            showMenu: show
        })
    }
    quantityProductsSum(value) {
        this.quantityProducts = 0;
        value.forEach((item) => {
            this.quantityProducts += item.quantity;
        });
        this.setState({
            basket: value
        });
    }
    AddProducts(name) {
       let pushBasket;
       if(this.state.basket.length === 0) {
           pushBasket = this.state.products.filter(item => item.name === name);
           pushBasket[0].quantity = 1;
           this.sum += pushBasket[0].price;
       }else {
          pushBasket = this.state.basket;
           let check = false;
           pushBasket.forEach((item) => {
           if (item.name === name) {
               item.quantity += 1;
               this.sum += item.price;
               check = true;
           }});
           if(!check){
               let find = this.state.products.filter(item => item.name === name)[0];
               find.quantity = 1;
               this.sum += find.price;
               pushBasket.push(find);
           }
       }
        this.quantityProductsSum(pushBasket);
    }
    AddProductsForBasket(name, check) {
        let pushBasket = this.state.basket;
        pushBasket.forEach((item,idx) => {
            if(item.name === name) {
               if(check) {
                   item.quantity++;
                   this.sum += item.price;
               }else {
                   item.quantity--;
                   if(item.quantity === 0){
                       pushBasket.splice(idx, 1);
                   }
                   this.sum -= item.price;
               }
            }
        });
        this.quantityProductsSum(pushBasket);
    }
    deleteProduct(name) {
    let pushBasket = this.state.basket;
    pushBasket.forEach((item,idx) => {
        if(item.name === name) {
          pushBasket.splice(idx, 1);
          return;
        }
    });
        this.quantityProductsSum(pushBasket);
    }
    removeBasket() {
        this.sum = 0;
        this.quantityProducts = 0;
        this.setState({
           basket: []
        });
    }
    render() {
    const products = this.state.products.map((item, idx) => {
      return (
          <Products
          key = {idx}
          brand = {item.brand}
          name = {item.name}
          power = {item.power}
          price = {item.price}
          Add = {this.AddProducts.bind(this, item.name)}
          />
      )
    });
    let newProductsList = this.newListProducts().map((item, idx) => {
        return (
            <Products
                key={idx}
                brand={item.brand}
                name={item.name}
                power={item.power}
                price={item.price}
            />)
    });
    return (
        <div id='App'>
          <div id='menu' style={(this.state.showMenu)? {'display': 'block'}: {'display': 'none'}}>
          <img alt='nothing' src={Cancel} onClick={this.callMenu.bind(this, false)}/>
          <span>HOME</span>
          <span>SELL</span>
          <span>HOST</span>
          <span>ABOUT US</span>
          <span>SUPPORT</span>
          </div>
          <div id="header">
              <img id='hamburger' alt='nothing' src={hamburger} onClick={this.callMenu.bind(this, true)}/>
              <Header
              quantityProducts = {this.quantityProducts}
              basket = {this.BasketCall.bind(this)}
              />
          </div>
          <div id = "mainTitles">
              <div className='mainTitlesItems'>
                <p>ON SALE</p>
              </div>
              <div className='mainTitlesItems'>
                <p>NEW LISTING</p>
              </div>
              <div className='mainTitlesItems'>
                <p>NEWS</p>
              </div>
          </div>
          <div id = "main">
              <div className='mainItemProduct'>
                {products}
              </div>
              <div style={(this.state.basketShow) ? {'display': 'none'}: {'display': 'block'}}  className='mainItemNewsProducts'>
                {newProductsList}
              </div>
              <div style={(this.state.basketShow) ? {'display': 'none'}: {'display': 'block'}} className='mainItemNews'>
                <News/>
              </div>
              <div style={(this.state.basketShow) ? {'display': 'block'}: {'display': 'none'}} className='mainItemBasket'>
                  <div id='headerBasket'>
                     <div>
                         <span>You have {this.state.basket.length} items in your cart</span>
                     </div>
                    <div>
                        <img onClick={this.BasketCall.bind(this)} alt='nothing' src={Cancel}/>
                    </div>
                  </div>
                   <div id = 'contentBasket'>
                       {this.state.basket.map((item, idx) => {
                           return (
                               <Basket
                                   key={idx}
                                   brand={item.brand}
                                   name={item.name}
                                   power={item.power}
                                   quantity = {item.quantity}
                                   sum={item.price * item.quantity}
                                   moreProduct = {this.AddProductsForBasket.bind(this, item.name, true)}
                                   lessProduct = {this.AddProductsForBasket.bind(this, item.name, false)}
                                   delete = {this.deleteProduct.bind(this, item.name)}
                               />)
                       })}
                  </div>
                  <div id='footerBasket'>
                      <button>Continue</button>
                      <button onClick={this.removeBasket.bind(this)}>Remove All</button>
                      <span>${this.sum}</span>
                  </div>
              </div>
              <div id = 'footer'>
              </div>
           </div>
        </div>
)}}
export default App;

