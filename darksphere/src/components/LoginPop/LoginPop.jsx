import React, { useState } from 'react';
import './LoginPop.css';
import { assets } from '../../assets/assets';

const LogingPop = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState('Sign Up');

  return (
    <div className="login-pop">
      <form className="login-pop-container">
        <div className="login-pop-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross}
            alt="Close"
            aria-label="Close Login Popup"
          />
        </div>
        <div className="login-pop-inputs">
          {currState === 'Sign Up' && (
            <input
              type="text"
              placeholder="Your name"
              required
              aria-label="Your name"
            />
          )}
          <input
            type="email"
            placeholder="Your email"
            required
            aria-label="Your email"
          />
          <input
            type="password"
            placeholder="Your password"
            required
            aria-label="Your password"
          />
        </div>
        <button type="submit">{currState}</button>
        {currState === 'Sign Up' && (
          <div className="login-pop-condition">
            <input
              type="checkbox"
              required
              aria-label="Agree to terms and privacy policy"
            />
            <p>
              By continuing, I agree to the <strong>Terms of Use</strong> &
              <strong> Privacy Policy</strong>.
            </p>
          </div>
        )}
        {currState === 'Login' ? (
          <p>
            Create a new account?{' '}
            <span onClick={() => setCurrState('Sign Up')} style={{ cursor: 'pointer' }}>
              Click here
            </span>
          </p>
        ) : (
          <p>
            Already have an account?{' '}
            <span
              onClick={() => setCurrState('Login')}
              style={{ cursor: 'pointer' }}
            >
              Login here
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LogingPop;

