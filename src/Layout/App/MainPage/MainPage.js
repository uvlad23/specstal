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
        <meta name="keywords" content="База инструментального металлопроката, купить инструментальную сталь Украина, инструментальная сталь Никополь, инструментальная сталь, купить инструментальную сталь в Никополе, купить инструментальную сталь опт, купить полосу в Никополе, купить круг в Никополе, купить легированную сталь, купить лист в Никополе, купить металлопрокат в розницу, купить металлопрокат, легированные инструментальные стали, быстрорежущая сталь, легированный металлопрокат, марки инструментальных сталей, сталь инструментальная, легированная сталь, купить быстрорежущую сталь, купить углеродистую сталь, углеродистая сталь, быстрорежущая сталь, виды инструментальной стали, у8, круг хвг, сталь, сталь 9хф, лист у8а, 65г, х12мф, сталь 95х18, 9хс, лист 40х13, шх15, сталь 9хс, хвг, сталь р18, сталь х12мф, р6м5, хвг, сталь у8, сталь 3х2в8ф, сталь хгс, 40х13 лист, сталь 20х13 гост, сталь 40х13 гост, 9хс или х12мф, 3х2в8ф, круг 30х13, сталь 30хгсн2а, 40х13 круг, х12мф или 95х18, полоса р18, круг 12х1мф, круг 95х18, купить р18, лист 95х18, круг 40х13 купить, 20х13 сталь, марка стали у10, сталь 40хс, сталь 9хф купить, марка стали 65г, квадрат р6м5, 3х3м3ф, продам 95х18, квадрат 40х13, 5х3в3мфс, р6м5ф3, твердость стали, высокопрочная сталь"/>
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
