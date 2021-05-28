import React from "react";

import './Modal.scss';

const LoginModal = ({setIsRegistered, setIsModal}) => (
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
          <p className="modal-text">No account? <a
            onClick={() => setIsRegistered(false)}
          >Create one</a></p>
        </div>
      </div>
    </div>
  );

export default LoginModal;
