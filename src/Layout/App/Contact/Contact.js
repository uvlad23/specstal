import React from 'react'
import classes from './Contact.module.scss'
import utility from '../Container.module.scss'

import Header from '../../../Components/Header/Header'
import Footer from '../../../Components/Footer/Footer'
import SideDrawer from '../../../Components/SideDrawer/SideDrawer'
import BackDrop from '../../../Components/BackDrop/BackDrop'

class Contact extends React.Component{
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

    render(props){
        let backdrop;

        if(this.state.sideDrawerOpen){
        backdrop = <BackDrop click = {this.backdropClickHandler}/>
        }
        return(
            
        <div className={classes.contacts}>

        <div className={classes.black__bg} data-scale="1.1">
          <div className={utility.container}>
            <Header drawerClickHandler = {this.drawerToggleClickHandler}/>
            <SideDrawer show = {this.state.sideDrawerOpen}/>
            {backdrop}
          </div>
        </div>
        
        <div className={utility.container}>
        <p style={{height:'76.4vh'}}>
        <strong>Почта:</strong>x834@ukr.net <br/>
        <br/>
        <strong>Наши телефоны:</strong><br/>
        <br/>
        +380676324785 , +380509502530 - Директор Андрей<br/>
        <br/>
        +380975359697 , +380664540173 -  Менеджер по продажам Ольга<br/>
        <br/>
        т.ф. - (05662) 2-22-18 <br/>
        <br/>
        <strong>Адрес:</strong>ул.Войкова 58а. г. Никополь Днепропетровская область. П/И 53220<br/>
        </p>
        </div>

        <footer>
          <div className={utility.container}>
            <Footer/>
          </div>
        </footer>
      </div>
        )
    }
}

export default Contact