import React from 'react'

import MainPage from './Layout/App/MainPage/MainPage';
import Contact from './Layout/App/Contact/Contact';
import Products from './Layout/App/Products/Products'
import {Route} from 'react-router-dom'


class App extends React.Component{
    state = {
        isOffer:true
    }
    render(props){
        return(
            <div className="app">
                <Route path exact = '/' render = {() => <MainPage/>}/>
                <Route path = '/contact' render={() => {return (<Contact/>)}}/>
                <Route path = '/products' render ={() => <Products/>}/>
            </div>
        )
    }
}

export default App