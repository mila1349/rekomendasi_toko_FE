import React from "react";
import './style.scss'
import CurrencyFormat from "react-currency-format";

class Product extends React.Component {

    render() {
      return <div className="product">
      <img src={this.props.item.Img} alt="" />
      <h4>{this.props.item.Name}</h4>
      <span>
          <div className="tag">
              <i class="fa-light fa-coin-front"></i>
              <h5><CurrencyFormat value={this.props.item.Price} displayType={'text'} thousandSeparator={true} prefix={'Rp '} /></h5>
          </div>
          {/* <div className="tag">
              <i class="fa-regular fa-star"></i>
              <h5>{this.props.item.Rating}</h5>
          </div> */}
      </span>
  </div>;
    }
  }

  export default Product;