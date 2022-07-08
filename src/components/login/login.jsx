import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css';

const Login = ({ authService }) => {
  const navigate = useNavigate();
  const gotoMaker = (userId) => {
    // https://reactrouter.com/docs/en/v6/hooks/use-navigate
    navigate('/maker', { pathname: '/maker', state: { id: userId } });
  };

  const onLogin = (e) => {
    authService
      .login(e.currentTarget.textContent) //
      .then((data) => gotoMaker(data.user.uid));
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      user && gotoMaker(user.uid);
    });
  });

  return (
    <section className={styles.login}>
      <Header />
      <section>
        <h1>Login</h1>
        <ul className={styles.list}>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>
              Google
            </button>
          </li>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>
              GitHub
            </button>
          </li>
        </ul>
      </section>
      <Footer />
    </section>
  );
};

export default Login;
