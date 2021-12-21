import { CustomButton } from "../custom-button/custom-button.component";
import { CartItem } from "../cart-item/cart-item";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/Cart/cart.selectors";
import { createSelectorCreator, createStructuredSelector } from "reselect";

import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton inverted>GO TO CHECKOUT</CustomButton>
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

export default connect(mapStateToProps)(CartDropdown);
