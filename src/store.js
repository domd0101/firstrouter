import React, {Component} from 'react';
import {Route} from 'react-router-dom'
import { Link } from 'react-router-dom';
import axios from 'axios';


class Store extends Component{

  constructor(props){
    super(props)

    this.state={
      products:[]
    }
  }

  componentDidMount(){
    axios.get('https://practiceapi.devmountain.com/products')
    .then(response => {
      this.setState({
        products: response.data
      })
    })
  }

  render(){
    var products = this.state.products.map((product,index)=>{
      return(
        <div key={index}>
          <Link to={'/product/' + product.id}>
            <img height='100px' src={product.image}/>
            <h1>{product.title}</h1>
          </Link>
        </div>
      )
    })
    return(
      <div>
        <h1>This is store page</h1>
        {products}
      </div>
    )
  }
}

export default Store
