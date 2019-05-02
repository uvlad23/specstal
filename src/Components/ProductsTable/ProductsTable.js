import React from 'react'
import classes from './ProductsTable.module.scss'

class ProductsTable extends React.Component{
    fetchData(){
        

        if(this.props.data){
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
                return null
            }
            )
        }else{
            return 'Data is loading'
        }
    }
    render(){
        return(
            <table style = {{textAlign:'center'}}>
            <tr>
                <th>Размер</th>
                <th>Количество/шт.</th>
                <th>Тип стали</th>
                <th>Количество/кг.</th>
                <th>Цена тонна с НДС</th>
            </tr>
                {this.fetchData()}
        </table>
        )
    }
}
export default ProductsTable
    
    