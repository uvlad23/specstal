import React from 'react'
import classes from './ProductsTableHeader.module.scss'
import polosa from '../../i/products/polosa.jpg'
import krug from '../../i/products/krug.jpg'
import kvadrat from '../../i/products/kvadrat.jpg'
import pokovka from '../../i/products/pokovka.jpg'


class ProductsTableHeader extends React.Component{
    state = {
        productsHeaderData:[{
            category: 'Полоса',
            img: polosa,
            desc: `Полоса стальная - это изделие металлопроката, которое нашло свое применение начиная от тяжёлого машиностроения и авиастроения, заканчивая строительством и даже художественной ковкой`
        },
        {
            category: 'Поковка',
            img: pokovka,
            desc: `Поковка – это такое изделие или заготовка (промежуточное звено в производстве какой-либо детали, оборудования), изготавливаемое из стали прочных марок, применение которого широко распространено во многих отраслях промышленности, автомобилестроении, сельском хозяйстве. Особенностью такой заготовки является ее схожесть про форме и размеру с будущим изделием.`
        },{
            category: 'Квадрат',
            img: kvadrat,
            desc: `Квадрат стальной - это металлический профиль с формой разреза буквой "Г".`
        },{
            category: 'Круг',
            img: krug,
            desc: `Стальной круг – изделие, представляющее собой прут с круглым поперечным сечением различных диаметров`
        },{
            category: 'Круг-блин',
            img: krug,
            desc: `Стальной круг – изделие, представляющее собой прут с круглым поперечным сечением различных диаметров`
        },
        
            
        ]
    }

    render(){
        return(
            <>
            <hr/>
                <div className={classes.products__table__header}>
                    {/* <img src={require('../../i/300.png')} alt="PlaceHolder"/>
                        <div>
                        <h2>{this.props.category}</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolorem ipsa accusantium velit veritatis, id dolorum earum quae necessitatibus sint hic numquam architecto laborum repudiandae voluptas molestias. Saepe, optio in.</p>
                        </div> */}
                        {this.state.productsHeaderData.map(item =>{
                            if (item.category === this.props.category){
                                return(
                                    <>
                                    <img src={item.img} alt="PlaceHolder"/>
                                    <div>
                                    <h2>{item.category}</h2>
                                    <p>{item.desc}</p>
                                    </div>
                                    </>
                                )
                            }
                        })}
                </div>
            <hr/>
            </>
        )
    }
} 
export default ProductsTableHeader