import React from "react";
import { connect } from "react-redux";
import { formatMoney } from "../../pipes/priceFormatter";
import CartItem from "../../components/CartItem/CartItem";
import axios from "axios";
const ShoppingCart = (props) => {
  const handlePay = async () => {
    try {
      const { data } = await axios.post("http://localhost:8080/api/pay", {
        amount: props.totalPrice,
      });
      console.log(data);
      window.open(data.paymentLink);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="container" style={{ paddingTop: "6rem" }}>
        <div className="card shopping-cart">
          <div className="card-header bg-dark text-light">
            <i className="fa fa-shopping-cart pr-2" aria-hidden="true"></i>
            Shipping cart
            <div className="clearfix"></div>
          </div>
          <div className="card-body">
            {props.cartItemCount ? (
              props.cartItems.map((cart) => (
                <CartItem {...cart} img={cart.images[0]} />
              ))
            ) : (
              <h1 className="display-4 mt-5 text-center">
                There is no product in your cart
              </h1>
            )}
          </div>
          <div className="card-footer">
            {/* <div className="pull-right" style={{ margin: "10px" }}>
             
             
            </div> */}
            <div class="d-flex flex-row bd-highlight mb-3 justify-content-around">
              <div style={{ width: "200px" }}>
                Total price: <b>{formatMoney(props.totalPrice)}€</b>
              </div>
              <button
                type="button"
                class="btn btn-success"
                onClick={handlePay}
                style={{ width: "200px" }}
              >
                PAY
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  console.log(state, "state has changed");

  return {
    cartItems: state.shop.cart,
    cartItemCount: state.shop.cart.reduce((count, curItem) => {
      return count + curItem.quantity;
    }, 0),
    totalPrice: state.shop.cart.reduce((count, curItem) => {
      return count + curItem.price * curItem.quantity;
    }, 0),
  };
};

export default connect(mapStateToProps, null)(ShoppingCart);
