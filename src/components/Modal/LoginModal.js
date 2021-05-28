import React, {useState} from "react";

import './Modal.scss';

const LoginModal = ({setIsRegistered, setIsModal, setIsLogged}) => {
  const [ value, setValue ] = useState({
    email: '',
    password: '',
  });

  const [ isValid, setIsValid ] = useState({
    email: true,
    password: true,
    data: true,
  });

  function handleInputChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    setIsValid((prevState) => {
      return {
        ...prevState,
        data: true,
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

  function onLoginClick(e) {
    e.preventDefault();

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

    if (isValid.password && isValid.email) {
      console.log(value);

      const email = localStorage.getItem('email');
      const password = localStorage.getItem('password');

      if (email === value.email && password === value.password) {
        setIsLogged(true);
        setIsModal(false);
      } else {
        console.log('dannye ne verny')
        setIsValid((prevState) => {
          return {
            ...prevState,
            data: false,
          }
        })
      }

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
        <p className="modal-title">Log in to your account</p>
        <form
          onSubmit={onLoginClick}
          className="modal-form"
        >
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
          { !isValid.password ? <p className="modal-error-msg">Add valid password!</p>
            : isValid.data ? null : <p className="modal-error-msg">Email or password is not valid!</p>
          }

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
};

export default LoginModal;
