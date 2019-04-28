import React from 'react'
import classes from './Products.module.scss'

import utility from '../Container.module.scss'

import Header from '../../../Components/Header/Header'
import Footer from '../../../Components/Footer/Footer'
import SideDrawer from '../../../Components/SideDrawer/SideDrawer'
import BackDrop from '../../../Components/BackDrop/BackDrop'
import { link } from 'fs';


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
        fetch('https://specstal-backend.firebaseio.com/features.json')
            .then(res=>res.json())
            .then(json=>this.setState({myData: json}))
    }

    fetchData(){
        

        if(this.state.myData){
            return this.state.myData.map(item => (
                <li>The Price is {item.properties.Price ? item.properties.Price : 'NoData'}The Category is {item.properties.Amount ? item.properties.Amount: 'NoAmount'}</li>
            ))
        }else{
            return 'Data is loading'
        }
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
                <ul>
                    {this.fetchData()}
                </ul>
                    Hello world!
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