import React from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/Cart/cart.actions";
import { selectCartItemsCount } from "../../redux/Cart/cart.selectors";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { createStructuredSelector } from "reselect";

import "./cart-icon.styles.scss";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});
/* const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state),
}); */

//code below works but rerenders everytime any state changes even
//if it's not related to CART. We will add memoitization
// const mapStateToProps = ({ cart: { cartItems } }) => ({
//   itemCount: cartItems.reduce(
//     (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
//     0
//   ),
// });

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
