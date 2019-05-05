import React from 'react'
import classes from './ProductsTableHeader.module.scss'

import polosa from '../../i/products/bg/polosa.jpg'
import krug from '../../i/products/bg/krug.jpg'
import krugBlin from '../../i/products/bg/krug-blin.jpg'
import kvadrat from '../../i/products/bg/kvadrat.jpg'
import pokovka from '../../i/products/bg/pokovka.jpg'
import utility from'./../../Layout/App/Container.module.scss'


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
            desc: `Квадрат стальной - это металлический профиль с формой разреза буквой "Г". Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, et.`
        },{
            category: 'Круг',
            img: krug,
            desc: `Стальной круг – изделие, представляющее собой прут с круглым поперечным сечением различных диаметров`
        },{
            category: 'Круг-блин',
            img: krugBlin,
            desc: `Стальной круг – изделие, представляющее собой прут с круглым поперечным сечением различных диаметров`
        },
        
            
        ]
    }
//linear-gradient(0deg,rgba(255,0,150,0.3),rgba(255,0,150,0.3)),url(${item.img)
    render(){
        return(
            <>
                <div >
                        {this.state.productsHeaderData.map((item, index) =>{
                            if (item.category === this.props.category){
                                return(
                                    <div className={classes.products__table__header} key = {index} style = {{background:`linear-gradient(0deg,rgba(0,0,0,0.3),rgba(0,0,0,0.6)),url(${item.img})`, backgroundRepeat: 'no-repeat',backgroundPosition: 'center',backgroundSize: 'cover'}}>
                                        <div className = {utility.container}>
                                        <h2 data-aos="fade-right" data-aos-duration="1000">{item.category}</h2>
                                        <p data-aos="fade-right" data-aos-duration="1000">{item.desc}</p>
                                        </div>
                                    </div>
                                )
                            }
                        })}
                </div>
            </>
        )
    }
} 
export default ProductsTableHeader