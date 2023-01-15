import React from 'react';
import PropTypes from 'prop-types';
import UserModel from '../models/UserModel';

class ShopItemClass extends React.Component {
  render() {
    return(
      <div className="main-content">
        <h2>Tiger of Sweden</h2>
        <h1>Leonard coat</h1>
        <h3>Minimalistic coat in cotton-blend</h3>
        <div className="description">
          Men's minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.
        </div>
        <div className="highlight-window mobile"><div className="highlight-overlay"></div></div>
        <div className="divider"></div>
        <div className="purchase-info">
          <div className="price">£399.00</div>
          <button>Добавить в корзину</button>
        </div>
      </div>
    );
  }
}

ShopItemClass.propTypes = {
  user: PropTypes.instanceOf(UserModel).isRequired
}

export default ShopItemClass;
