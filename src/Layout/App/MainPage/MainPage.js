import React, { Component } from 'react';
import { Helmet } from "react-helmet";

import classes from './MainPage.module.scss'

import Header from '../../../Components/Header/Header'
import Offer from '../../../Components/Offer/Offer'
import Advantages from '../../../Components/Advantages/Advantages'
import Products from '../../../Components/Products/Products';
import Footer from '../../../Components/Footer/Footer'
import SideDrawer from '../../../Components/SideDrawer/SideDrawer'
import BackDrop from '../../../Components/BackDrop/BackDrop'

import utility from '../Container.module.scss'
import $ from 'jquery'

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

  render() {
    let backdrop;

    if(this.state.sideDrawerOpen){
      backdrop = <BackDrop click = {this.backdropClickHandler}/>
    }
    return (
      <div className={classes.mainPage}>
        <Helmet>
        <title>СпецСталь | Главная</title>
        <meta name="description" itemprop="description" content="Металлобаза Никополь. ЧП Спецсталь - крупнейший участник рынка по продаже металлопрокат инструментальная сталь. Оптовая и розничная торговля металлом."></meta>
        <meta name="keywords" itemprop="keywords" content="&quot;купить металлопрокат Киев&quot;,
        &quot;металлобаза&quot;,
        &quot;купить металлопрокат&quot;,
        &quot;металлопрокат&quot;,
        &quot;ХВГ&quot;,
        &quot;Х12&quot;,
        &quot;Х6ВФ&quot;
        &quot;3Х3М3Ф&quot;,
        &quot;ЧП Спецсталь&quot;,
        &quot;спецсталь&quot;,
        &quot;0676324785&quot;,"></meta>
      </Helmet>
        <div className={classes.offer__bg}>
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
