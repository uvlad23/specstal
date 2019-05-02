import React from 'react'
import classes from './Products.module.scss'

import utility from '../Container.module.scss'

import Header from '../../../Components/Header/Header'
import Footer from '../../../Components/Footer/Footer'
import SideDrawer from '../../../Components/SideDrawer/SideDrawer'
import BackDrop from '../../../Components/BackDrop/BackDrop'

import ProductsTable from '../../../Components/ProductsTable/ProductsTable'
import ProductsNav from '../../../Components/ProductsNav/ProductsNav'



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
                            <hr/>
                                <div className={classes.products__table__header}>
                                    <img src={require('../../../i/300.png')} alt="PlaceHolder"/>
                                    <div>
                                    <h2>{this.props.category}</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolorem ipsa accusantium velit veritatis, id dolorum earum quae necessitatibus sint hic numquam architecto laborum repudiandae voluptas molestias. Saepe, optio in.</p>
                                    </div>
                                </div>
                            <hr/>
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