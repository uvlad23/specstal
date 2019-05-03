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

  componentDidMount(){
    window.scrollTo(0,0);
}

  render() {
    let backdrop;

    if(this.state.sideDrawerOpen){
      backdrop = <BackDrop click = {this.backdropClickHandler}/>
    }
    return (
      <div className={classes.mainPage}>
        <Helmet>
        <title>Инструментальная сталь в Никополе с доставкой по всей Украине | СпецСталь</title>
        <meta name="description" itemprop="description" content="Металлобаза Никополь. СпецСталь - крупнейший участник рынка по продаже металлопрокат инструментальная сталь. Оптовая и розничная торговля металлом."></meta>
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
        <meta property="og:title" content="Инструментальная сталь в Никополе с доставкой по всей Украине | СпецСталь"/>
        <meta property="og:site_name" content="СпецСталь - металлобаза инструментальной стали в Никополе"/>
        <meta property="og:url" content="specstal.pp.ua"/>
        <meta property="og:description" content="Металлобаза Никополь. СпецСталь - крупнейший участник рынка по продаже металлопрокат инструментальная сталь. Оптовая и розничная торговля металлом."/>
        <meta property="og:type" content="website"/>
        <meta property="og:image" content=""/>        
      </Helmet>
        <div className={classes.offer__bg}>
        <img src={require('../../../i/offer-bg.jpg')} alt="Фон" style = {{display:'none'}}/>
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
