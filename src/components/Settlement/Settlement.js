import React, { Component } from 'react'
import './settlement.css'

class Settlement extends Component {
  state ={
    items:[]
  }
  componentWillMount = () => {
    this.setState({
      items: this.props.items.filter(t => t.completed===true)
    })
  }
  render() {
    const { items } =this.props
    const totals =this.props.caltotals(items)
    const itemsL =this.props.items.filter(t => t.completed===true)
    const SettlementItemsList =itemsL.map(t => (
      <div className='Settlement-item' key={t.id}>

        <div className='Settlement-item-img' style= {{backgroundImage : `url(${t.imgUrl})`}}
          >
        </div>
        <div className="Settlement-item-info">

        </div>
        <div className="Settlement-item-num">
          <div className='Settlement-item-num-increment'
            onClick={() =>this.props.increment(t.id)}>＋</div>
          <div className='number'> { t.count }</div>
          <div className='Settlement-item-num-decrement'
            onClick={() =>this.props.decrement(t.id)}>－</div>
        </div>
      </div>
    ))
    return (
      <div className="settlement">
        <div className="Settlement-price">
          ￥ ： {totals} 元
        </div>
        <div className="Settlement-items">
          <h3>购物车</h3>
          {SettlementItemsList}
        </div>
      </div>
    )
  }
}

export default Settlement
