import React from "react";

import { useState } from "react";

import './Modal.scss';

const RegisterModal = ({ setIsModal, setIsRegistered }) => {
  const [ value, setValue ] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [ isValid, setIsValid ] = useState({
    name: true,
    email: true,
    password: true,
  });

  function handleInputChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    setIsValid((prevState) => {
      return {
        ...prevState,
        [name]: true,
      }
    })

    setValue((prevState) => {
      return {
        ...prevState,
        [name]: value,
      }
    })
  }

  function onRegistrationClick(e) {
    e.preventDefault();

    if (value.name.length < 2) {
      setIsValid((prevState) => {
        return {
          ...prevState,
          name: false,
        }
      })
    }

    if (value.password.length < 6) {
      setIsValid((prevState) => {
        return {
          ...prevState,
          password: false,
        }
      })
    }

    const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (!re.test(value.email)) {
      setIsValid((prevState) => {
        return {
          ...prevState,
          email: false,
        }
      })
    }

    if (isValid.password && isValid.name && isValid.email) {
      localStorage.setItem('email', value.email);
      localStorage.setItem('password', value.password);

      setValue({
        name: '',
        email: '',
        password: '',
      });
    }
  }

  return (
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
        <form
          onSubmit={onRegistrationClick}
          className="modal-form"
        >
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            id="name"
            onChange={handleInputChange}
            value={value.name}
          />
          { isValid.name ? null : <p className="modal-error-msg">Add valid name!</p> }


          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Your email"
            id="email"
            onChange={handleInputChange}
            value={value.email}
          />
          { isValid.email ? null : <p className="modal-error-msg">Add valid email!</p> }

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            id="password"
            onChange={handleInputChange}
            value={value.password}
          />
          { isValid.password ? null : <p className="modal-error-msg">Add valid password!</p> }

          <button className="modal-btn" >
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
          >Sign in</a>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
