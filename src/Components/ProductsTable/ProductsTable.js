import React from 'react'
import classes from './ProductsTable.module.scss'

import Skeleton from 'react-loading-skeleton';

class ProductsTable extends React.Component{
    fetchData(){
            return this.props.data.map((item,index) => {
                if(item.category === this.props.category){
                    const price = item.price ? item.price + '' : '';
                    return(
                    <tr key = {index}>
                        <td>{item.measures ? item.measures : '-'}</td>
                        <td>{item.pieces ? item.pieces : '-' }</td>
                        <td>{item.steeltype ? item.steeltype : '-'}</td>
                        <td>{item.weight ? item.weight : '-'}</td>
                        <td>{item.price ? item.price : '-'} {window.innerWidth >= '650' && price ?
                        <i className="fas fa-calculator"><div className={classes.tooltiptext}>
                        100кг = {parseInt(price.replace(/,/g, ''),10)/10}₴<br/>
                        10кг = {parseInt(price.replace(/,/g, ''),10)/100}₴<br/>
                        1кг = {parseInt(price.replace(/,/g, ''),10)/1000}₴</div></i> : null}
                        </td>
                    </tr>
                )
                }
            }
        )
    }

    render(){
            return(
                <>
                <h3>Каталог</h3>
                {this.props.data ? 
                <>
                    <table style = {{textAlign:'center'}}>
                        <tbody>
                        <tr className = {classes.table__head}>
                            <th>Размер</th>
                            <th>шт.</th>
                            <th>Тип стали</th>
                            <th>В наличии/т.</th>
                            <th>Цена/т. с НДС</th>
                        </tr>
                            {this.fetchData()}
                        </tbody>   
                    </table>
                    </> : <Skeleton count = {30} height = {30}/>}
                </>
            )
        } 
    }
export default ProductsTable
    
    