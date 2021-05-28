import React from 'react';

import { connect } from "react-redux";
import { setIsModal, setIsLogged } from "../../../actions";
import { withRouter } from 'react-router-dom';

import user from "../../../assets/images/svg/user.svg";
import cartIcon from "../../../assets/images/svg/cart.svg";
import './Menu.scss';

const Menu = ({ open, setIsModal, cartsTotal, isRegistered, setIsLogged, isLogged, history }) => {
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

  const signOutLink = (
    <a
      className="button"
      onClick={() => setIsLogged(false)}
    >
      <img src={user} alt="user" />
      <span>Sign out</span>
    </a>
  );

  return (
    <div
      className={open ? "header-nav open" : "header-nav"}
    >
      {
        isLogged ? signOutLink
          : isRegistered ? signInLink
          : signUpLink
      }

      <a
        onClick={
          () => {
            isLogged ? history.push('/basket') : setIsModal(true)
          }
        }
        className="button"
      >
        <img src={cartIcon} alt="user" />
        {cartsTotal ? <div>{cartsTotal}</div> : null}
        <span>Cart</span>
      </a>

    </div>
  );
};

const mapStateToProps = ({ cartsTotal, isRegistered, isLogged }) => {
  return { cartsTotal, isRegistered, isLogged };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setIsModal: (bool) => dispatch(setIsModal(bool)),
    setIsLogged: (bool) => dispatch(setIsLogged(bool)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Menu));
