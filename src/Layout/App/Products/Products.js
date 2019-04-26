import React from 'react'
import classes from './Products.module.scss'

import utility from '../Container.module.scss'

import Header from '../../../Components/Header/Header'
import Footer from '../../../Components/Footer/Footer'
import SideDrawer from '../../../Components/SideDrawer/SideDrawer'
import BackDrop from '../../../Components/BackDrop/BackDrop'


class Products extends React.Component{
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
            <div className = {classes.products}>
                <div className={classes.black__bg} data-scale="1.1">
                    <div className={utility.container}>
                        <Header drawerClickHandler = {this.drawerToggleClickHandler}/>
                        <SideDrawer show = {this.state.sideDrawerOpen}/>
                        {backdrop}
                    </div>
                </div>
                <div className={utility.container}>
                    <p>Тут будут продукты</p>
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