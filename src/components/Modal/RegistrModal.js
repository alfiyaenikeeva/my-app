import React from "react";

import './Modal.scss';

const RegisterModal = ({ setIsModal, setIsRegistered }) => (
  <div
    role="button"
    onClick={() => {
      setIsModal(false);
    }}
    className="modal"
  >
    <div
      onClick={e => e.stopPropagation()}
      className="modal-inner"
    >
      <div
        onClick={() => setIsModal(false)}
        className="modal-close"
      ></div>
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
        <a
          onClick={() => {
            console.log('sign in');
            setIsRegistered(true);
          }}
        >Sing in</a>
      </div>
    </div>
  </div>
);

export default RegisterModal;
