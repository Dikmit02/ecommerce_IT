import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

const Header = ({ cartLength }) => {
  const gotoLogin=()=>{
    // axios.post('')
    // console.log("hishi")
    window.location="http://localhost:8080/login"
  }
  return (
   
    <div className="d-flex flex-row justify-content-around bg-dark fixed-top navbar navbar-expand-lg navbar-dark ">
      <NavLink className="navbar-brand" to="/">
        TShirt Store
      </NavLink>

      <div
        className="d-flex flex-row justify-content-end "
        style={{ marginLeft: "10px" }}
      >
        <NavLink className="nav-link" to={"/cart"}>
          <i className="fa fa-shopping-cart mr-2" aria-hidden="true" />
          Cart
          {cartLength ? `(${cartLength})` : ""}
        </NavLink>

        {/* <NavLink className="nav-link" to={""}> */}
          <button type="button" class="btn btn-success" onClick={gotoLogin}>
            Login
          </button>
        {/* </NavLink> */}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartLength: state.shop.cart.length,
  };
};

export default connect(mapStateToProps, null)(Header);

/*





  <div>
    <ul className="nav nav-tabs bg-dark">
      <li className="nav-item">
        <Link style={currentTab(history, "/")} className="nav-link" to="/">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          style={currentTab(history, "/cart")}
          className="nav-link"
          to="/cart"
        >
          Cart
        </Link>
      </li>
      {isAutheticated() && isAutheticated().user.role === 0 && (
        <li className="nav-item">
          <Link
            style={currentTab(history, "/user/dashboard")}
            className="nav-link"
            to="/user/dashboard"
          >
            U. Dashboard
          </Link>
        </li>
      )}
      {isAutheticated() && isAutheticated().user.role === 1 && (
        <li className="nav-item">
          <Link
            style={currentTab(history, "/admin/dashboard")}
            className="nav-link"
            to="/admin/dashboard"
          >
            A. Dashboard
          </Link>
        </li>
      )}
      {!isAutheticated() && (
        <Fragment>
          <li className="nav-item">
            <Link
              style={currentTab(history, "/signup")}
              className="nav-link"
              to="/signup"
            >
              Signup
            </Link>
          </li>
          <li className="nav-item">
            <Link
              style={currentTab(history, "/signin")}
              className="nav-link"
              to="/signin"
            >
              Sign In
            </Link>
          </li>
        </Fragment>
      )}
      {isAutheticated() && (
        <li className="nav-item">
          <span
            className="nav-link text-warning"
            onClick={() => {
              signout(() => {
                history.push("/");
              });
            }}
          >
            Signout
          </span>
        </li>
      )}
    </ul>
  </div>







*                         <li className="nav-item active">
                            <a className="nav-link" href="#">Home
                                <span className="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
* */
