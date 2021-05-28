import React from "react";

import { Link } from "react-router-dom";

import './Modal.scss';

const RegisterModal = () => (
  <div className="modal">
    <div className="modal-inner">
      <div className="modal-close"></div>
      <p className="modal-title">Create an account</p>
      <form className="modal-form">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" placeholder="Your name" id="name" />

        <label htmlFor="email">Email</label>
        <input type="email" name="email" placeholder="Your email" id="email"/>

        <label htmlFor="password">Password</label>
        <input type="password" name="password" placeholder="Enter your password" id="password"/>

        <button className="modal-btn">
          Register
        </button>
      </form>

      <div className="modal-footer">
        <p className="modal-text">Do you already have an account? </p>
        <Link to="/register">Sing in</Link>
      </div>
    </div>
  </div>
);

export default RegisterModal;
