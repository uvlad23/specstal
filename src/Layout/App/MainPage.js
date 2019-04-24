import React, { Component } from 'react';
import classes from './MainPage.module.scss'
import Header from '../../Components/Header/Header'
import Offer from './../../Components/Offer/Offer'
import Advantages from './../../Components/Advantages/Advantages'
import Products from './../../Components/Products/Products';
import Footer from './../../Components/Footer/Footer'

class App extends Component {
  render() {
    return (
      <div className={classes.mainPage}>
        <div className={classes.offer__bg} data-scale="1.1">
          <div className={classes.container}>
            <Header/>
            <Offer/>
          </div>
        </div>
        <div className={classes.container}>
          <Advantages/>
        </div>
        <div className={classes.blue__bg}>
          <div className={classes.container}>
            <Products/>
          </div>
        </div>
        <footer>
          <div className={classes.container}>
            <Footer/>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
