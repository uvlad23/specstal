import React from 'react'
import './ProductsTable.module.scss'

import Skeleton from 'react-loading-skeleton';

class ProductsTable extends React.Component{
    fetchData(){
            return this.props.data.map(item => {
                if(item.category === this.props.category){
                    return(
                    <tr>
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
                <table style = {{textAlign:'center'}}>
                <tr>
                    <th>Размер</th>
                    <th>шт.</th>
                    <th>Тип стали</th>
                    <th>В наличии/т.</th>
                    <th>Цена/т. с НДС</th>
                </tr>
                    {this.fetchData()}
            </table>
            )
        } else{
            return <Skeleton count = {30} height = {30} />
        }
    }
}
export default ProductsTable
    
    