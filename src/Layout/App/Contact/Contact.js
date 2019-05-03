import React from 'react'
import { Helmet } from 'react-helmet';

import classes from './Contact.module.scss'
import utility from '../Container.module.scss'

import Header from '../../../Components/Header/Header'
import Footer from '../../../Components/Footer/Footer'
import SideDrawer from '../../../Components/SideDrawer/SideDrawer'
import BackDrop from '../../../Components/BackDrop/BackDrop'

import Map from '../../../Components/Map/Map'
import ContactsData from '../../../Components/ContactsData/ContactsData'


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
            <Helmet>
            <title>Связаться с нами | СпецСталь</title>
            <meta name="description" itemprop="description" content="Контакты сотрудников ЧП&quot;Спецсталь&quot; Директор Хачатрян Армен Димитриевич - 0676324785, Менеджер по продажам Ольга - 0975359697"></meta>
            <meta name="keywords" itemprop="keywords" content="Металлобаза Киев. Металлопрокат,Никополь,Инструментальные стали,ХВГ,Р6М5,Х12,3Х3М3Ф,У8,У9,У10,5ХНМ"></meta>
            <meta property="og:title" content="Связаться с нами | СпецСталь"/>
            <meta property="og:site_name" content="СпецСталь - металлобаза инструментальной стали в Никополе"/>
            <meta property="og:url" content="specstal.pp.ua"/>
            <meta property="og:description" content="Металлобаза Никополь. СпецСталь - крупнейший участник рынка по продаже металлопрокат инструментальная сталь. Оптовая и розничная торговля металлом."/>
            <meta property="og:type" content="website"/>
            <meta property="og:image" content=""/>
          </Helmet>
        <div className={classes.black__bg} data-scale="1.1">
          <div className={utility.container}>
            <Header drawerClickHandler = {this.drawerToggleClickHandler}/>
            <SideDrawer show = {this.state.sideDrawerOpen}/>
            {backdrop}
          </div>
        </div>
        
        <div className={utility.container}>
        <div className={classes.contacts_data__container}>
          <div className = {classes.contacts_data}>
          <ContactsData/>
          </div>
          <div className = {classes.contacts_map}>
          <Map/>
          </div>
        </div>
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