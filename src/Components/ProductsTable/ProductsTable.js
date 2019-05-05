import React from 'react'
import classes from './ProductsTable.module.scss'

import Skeleton from 'react-loading-skeleton';

class ProductsTable extends React.Component{
    fetchData(){
            return this.props.data.map((item,index) => {
                if(item.category === this.props.category){
                    return(
                    <tr key = {index}>
                        <td>{item.measures ? item.measures : '-'}</td>
                        <td>{item.pieces ? item.pieces : '-' }</td>
                        <td>{item.steeltype ? item.steeltype : '-'}</td>
                        <td>{item.weight ? item.weight : '-'}</td>
                        <td>{item.price ? item.price : '-'}</td>
                    </tr>
                )
                }
            }
        )
    }
    render(){
        if (this.props.data){
            return(
                <>
                <h3>Каталог</h3>
                <table style = {{textAlign:'center'}}>
                <tr className = {classes.table__head}>
                    <th>Размер</th>
                    <th>шт.</th>
                    <th>Тип стали</th>
                    <th>В наличии/т.</th>
                    <th>Цена/т. с НДС</th>
                </tr>
                    <tbody>
                        {this.fetchData()}
                    </tbody>
                </table>
                </>
            )
        } else{
            return <Skeleton count = {30} height = {30} />
        }
    }
}
export default ProductsTable
    
    