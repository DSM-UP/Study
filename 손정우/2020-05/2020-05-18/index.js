import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';


const products = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];


class FilterableProductTable extends React.Component {
  render() {
    const products = this.props.products;
    return (
      <div>
        <SearchBar />
        <ProductTable products={products}/>
      </div>
    );
  }
}

class SearchBar extends React.Component {
  render() {
    return (
      <form>
        <input type='text'/>
        <input type='checkbox'/>
      </form>
    );
  }
}

class ProductTable extends React.Component {
  render() {
    const products = this.props.products;
    const products_classified =[];
    let rows = []

    
    for(const product of products) {
      //console.log(products_classified[product.category]);
      if(products_classified[product.category] === undefined) {
        products_classified[product.category] = [];

      }
      else {
        products_classified[product.category].push(product);
      }
    }

    for(const category in products_classified) { 
      console.log(category);
      rows.push(
        <ProductCategoryRow category={category}/>
      );
      for(const product of products_classified[category]) {
        rows.push(<ProductRow name={product.name} price={product.price}/>)
      }
    }


    return (
      <table>
        <thead>
          <th>Name</th>
          <th>Price</th>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }
}

class ProductCategoryRow extends React.Component {
  render() {
    const category = this.props.category;
    return (
      <>
        <tr>
          <th>{category}</th>
        </tr>
        
      </>
    );
  }
}

class ProductRow extends React.Component {
  render() {
    const name = this.props.name;
    const price = this.props.price;
    return (
      <tr>
        <td>
          {name}
        </td>
        <td>
          {price}
        </td>
      </tr>
    );
  }
}





ReactDOM.render(
  <React.StrictMode>
    <FilterableProductTable products={products}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
