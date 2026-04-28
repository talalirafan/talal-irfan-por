import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Splash.css';

const Splash = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Talal Irfan | Login';

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      setError('Please fill in both email and password.');
      return;
    }

    setError('');
    onLogin();
    navigate('/home');
  };

  return (
    <main className="splash-screen">
      <div className="splash-background">
        <span className="glow glow-1"></span>
        <span className="glow glow-2"></span>
        <span className="glow glow-3"></span>
        <span className="grid-dot dot-1"></span>
        <span className="grid-dot dot-2"></span>
        <span className="grid-dot dot-3"></span>
      </div>

      {isLoading ? (
        <div className="splash-loader">
          <div className="loader-ring"></div>
          <div className="loader-text">Preparing your secure login…</div>
        </div>
      ) : (
        <div className="splash-container container">
          <section className="splash-panel">
            <div className="splash-copy">
            <h1>Welcome back,</h1>
            <p>
              Enter your credentials to unlock your portfolio dashboard with a polished
              animated splash experience.
            </p>
            <div className="hero-stat">
              <div>
                <span>01</span>
                <p>Secure access</p>
              </div>
              <div>
                <span>02</span>
                <p>Live portfolio</p>
              </div>
              <div>
                <span>03</span>
                <p>Modern UI</p>
              </div>
            </div>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            <h2>Sign in to continue</h2>
            <div className="form-row">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
              />
            </div>
            <div className="form-row">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>
            {error && <p className="form-error">{error}</p>}
            <button type="submit" className="btn primary">
              Unlock Portfolio
            </button>
            <button
              type="button"
              className="btn secondary"
              onClick={() => {
                onLogin();
                navigate('/home');
              }}
            >
              Continue as Guest
            </button>
          </form>
        </section>
      </div>
      )}
    </main>
  );
};

export default Splash;
