import React from 'react'

import MainPage from './Layout/App/MainPage/MainPage';
import Contact from './Layout/App/Contact/Contact';
import Products from './Layout/App/Products/Products'
import { Redirect,Switch,Route} from 'react-router-dom'


class App extends React.Component{
    state = {
        isOffer:true
    }
    render(props){
        return(
            <div className="app">
                <Switch>
                    <Route path  = '/products/polosa' render ={() => <Products category = "Полоса"/>}/>
                    <Route path  = '/products/pokovka' render ={() => <Products category = "Поковка"/>}/>
                    <Route path  = '/products/kvadrat' render = {() => <Products category = "Квадрат"/>}/>
                    <Route path  = '/products/krug' render = {() => <Products category = "Круг"/>}/>
                    <Route path = '/products/krug-blin' render = {() => <Products category = "Круг-блин"/>}/>
                    <Route path = '/contact' render={() => {return (<Contact/>)}}/>
                    <Route path = '/products' render ={() => <Redirect to = '/products/polosa'/>}/>
                    <Route path = '/' render = {() => <MainPage/>}/>
                </Switch>
            </div>
        )
    }
}

export default App