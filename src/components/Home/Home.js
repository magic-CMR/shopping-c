import React, { Component } from 'react';
import './home.css';
import Settlement from '../Settlement/Settlement'
class Home extends Component {
  state = {
    items: [
      {
        id:'1',
        imgUrl : 'https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=fb2f330eaaec08fa260014a161d55a50/960a304e251f95cadde40507c3177f3e67095269.jpg',
        price : 12,
        count: 0,
        completed: false
      },
      {
        id:'2',
        imgUrl : 'https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=5d0c7767073387449cc5287a6934bec4/d53f8794a4c27d1e793312f310d5ad6eddc438eb.jpg',
        price : 11,
        count: 0,
        completed: false
      },
      {
        id:'3',
        imgUrl : 'https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=df9a23ac9352982205333ec5eff11cf6/d000baa1cd11728bdea99349cbfcc3cec2fd2cd0.jpg',
        price : 10,
        count: 0,
        completed: false
      }
    ]
  }
  complete = (id) => {
    const { items } =this.state
    let newitems = items.map(t => {
      if(t.id === id){
        return {...t,completed: true,count:1}
      }
      return t
    })
    this.setState({
      items: newitems,
      total : this.caltotals(newitems)

    })
  }
  increment = (id) => {
    const { items } = this.state
    let newitems = items.map(t => {
      if(t.id === id ){
        return {...t,count:t.count+1}
        }
        return t
    })
    this.setState({
      items : newitems,
      total : this.caltotals(newitems)

      })
  }
  decrement = (id) =>{
    const { items } = this.state
    let newitems = items.map(t => {
      if(t.id === id && t.count !==0){
        return {...t,count:t.count-1}
        }
      return t
    })
    this.setState({
      items : newitems,
      total : this.caltotals(newitems)

    })
  }
  caltotals = (items) =>{
    const total = items.reduce((sum,t) =>{
      return sum + Number(t.price)*Number(t.count)
    },0)
    console.log(total)
    return total
  }
  render() {
    const imgList = this.state.items.map(t => (
      <div className='shopping-item' key={t.id}>
        <div className='shopping-item-img' style= {{backgroundImage : `url(${t.imgUrl})`}}
          ></div>
        <div className={`shopping-item-btn ${t.completed && 'active'}` }
          onClick={() => this.complete(t.id)}
          > {t.completed ? '已购' : '购买'}</div>
      </div>
    ))
    return (
      <div className="home">
        <div className="img-wrap">
          {imgList}
        </div>
        <Settlement items={ this.state.items }
          increment={this.increment}
          decrement={this.decrement}
          caltotals={this.caltotals}
          />
      </div>
    );
  }
}

export default Home;
