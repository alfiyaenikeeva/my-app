import React from "react";

import { Link } from "react-router-dom";

import './Modal.scss';

const LoginModal = () => (
  <div className="modal">
    <div className="modal-inner">
      <div className="modal-close"></div>
      <p className="modal-title">Log in to your account</p>
      <form className="modal-form">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" placeholder="Your email" id="email"/>

        <label htmlFor="password">Password</label>
        <input type="password" name="password" placeholder="Enter your password" id="password"/>

        <button className="modal-btn">
          Log in
        </button>
      </form>

      <div className="modal-footer">
        <p className="modal-text">No account? <Link to="/register">Create one</Link></p>

      </div>
    </div>
  </div>
);

export default LoginModal;
