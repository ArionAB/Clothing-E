import { CustomButton } from "../custom-button/custom-button.component";
import { CartItem } from "../cart-item/cart-item";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/Cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../../redux/Cart/cart.actions";

import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
      }}
      inverted
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

/* const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
}); */
// using this our car items/qty do not need to rerender when we sign out

/* const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});
This was before reselect library */

//because of the connect that looks like this all props come in the components
//example: dispatch
export default withRouter(connect(mapStateToProps)(CartDropdown));
//exp 136, min 8 gives us acces to History
