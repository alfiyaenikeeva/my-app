import React from 'react';

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setIsModal } from "../../../actions";

import user from "../../../assets/images/svg/user.svg";
import cartIcon from "../../../assets/images/svg/cart.svg";
import './Menu.scss';

const Menu = ({ open, setIsModal, cartsTotal, isRegistered }) => {
  const signUpLink = (
    <a
      className="button"
      onClick={() => setIsModal(true)}
    >
      <img src={user} alt="user" />
      <span>Sign up</span>
    </a>
  );

  const signInLink = (
    <a
      className="button"
      onClick={() => setIsModal(true)}
    >
      <img src={user} alt="user" />
      <span>Sign in</span>
    </a>
  );

  return (
    <div
      className={open ? "header-nav open" : "header-nav"}
    >
      {
        isRegistered ? signInLink : signUpLink
      }

      <Link to='/basket' className="button">
        <img src={cartIcon} alt="user" />
        {cartsTotal ? <div>{cartsTotal}</div> : null}
        <span>Cart</span>
      </Link>

    </div>
  );
};

const mapStateToProps = ({ cartsTotal, isRegistered }) => {
  return { cartsTotal, isRegistered };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setIsModal: (bool) => dispatch(setIsModal(bool)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
