import React, { Component } from 'react';

import classes from './MainPage.module.scss'

import Header from '../../../Components/Header/Header'
import Offer from '../../../Components/Offer/Offer'
import Advantages from '../../../Components/Advantages/Advantages'
import Products from '../../../Components/Products/Products';
import Footer from '../../../Components/Footer/Footer'
import SideDrawer from '../../../Components/SideDrawer/SideDrawer'
import BackDrop from '../../../Components/BackDrop/BackDrop'

import utility from '../Container.module.scss'

import $ from "jquery";

class App extends Component {
  state ={
    sideDrawerOpen:false,
  }

  drawerToggleClickHandler = () =>{
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen}
    })
  }

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen:false});
  }

  // offerMouseMoveHandler =(e) =>{
  //   var movementStrength = 25;
  //   var height = movementStrength / $(window).height();
  //   var width = movementStrength / $(window).width();
  //   var pageX = e.pageX - ($(window).width() / 2);
  //   var pageY = e.pageY - ($(window).height() / 2);
  //   var newvalueX = width * pageX * -1 - 25;
  //   var newvalueY = height * pageY * -1 - 50;
  //   $('#top-image').css("background-position", newvalueX+"px"+newvalueY+"px");
  // }

  render() {
    let backdrop;

    if(this.state.sideDrawerOpen){
      backdrop = <BackDrop click = {this.backdropClickHandler}/>
    }
    return (
      <div className={classes.mainPage}>

        <div className={classes.offer__bg} data-scale="1.1">
          <div className={utility.container}>
            <Header drawerClickHandler = {this.drawerToggleClickHandler}/>
            <SideDrawer show = {this.state.sideDrawerOpen}/>
            {backdrop}
            <Offer/>
          </div>
        </div>
        
        <div className={utility.container}>
          <Advantages/>
        </div>
        <div className={classes.blue__bg}>
          <div className={utility.container}>
            <Products/>
          </div>
        </div>
        <footer>
          <div className={utility.container}>
            <Footer/>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
