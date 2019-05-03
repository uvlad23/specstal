import React from 'react'
import classes from './Products.module.scss'
import { Helmet } from "react-helmet";

import utility from '../Container.module.scss'

import Header from '../../../Components/Header/Header'
import Footer from '../../../Components/Footer/Footer'
import SideDrawer from '../../../Components/SideDrawer/SideDrawer'
import BackDrop from '../../../Components/BackDrop/BackDrop'

import ProductsTable from '../../../Components/ProductsTable/ProductsTable'
import ProductsNav from '../../../Components/ProductsNav/ProductsNav'
import ProductsTableHeader from '../../../Components/ProductsTableHeader/ProductsTableHeader';




class Products extends React.Component{
    state ={
        myData:null

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
        fetch('https://specstal-backend.firebaseio.com/products.json')
            .then(res=>res.json())
            .then(json=>this.setState({myData: json}))
    }


    render(props){
        let backdrop;

        if(this.state.sideDrawerOpen){
        backdrop = <BackDrop click = {this.backdropClickHandler}/>
        }
        return(
            
            <div className = {classes.products}>
            <Helmet>
                <title>Каталог инструментальной стали - {this.props.category}, купить в Никополе и по Украине | СпецСталь</title>
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
                &quot;0676324785&quot;,">
                </meta>
                <meta property="og:title" content="Каталог инструментальной стали - {this.props.category}, купить в Никополе и по Украине | СпецСталь"/>
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
                    <div className={classes.products__info}>
                        <ProductsNav/>
                        <div className={classes.products__table}>
                            <ProductsTableHeader category = {this.props.category}/>
                            <ProductsTable data = {this.state.myData} category = {this.props.category}/>
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

export default Products