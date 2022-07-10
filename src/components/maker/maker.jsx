import styles from './maker.module.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import { useState } from 'react';

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: '1',
      name: 'Ellie',
      company: 'Samsung',
      theme: 'light',
      title: 'Software engineer',
      email: 'ellie@gmail.com',
      message: 'go for it!',
      fileName: 'ellie',
      fileURL: null,
    },
    {
      id: '2',
      name: 'Ellie',
      company: 'Samsung',
      theme: 'dark',
      title: 'Software engineer',
      email: 'ellie@gmail.com',
      message: 'go for it!',
      fileName: 'ellie',
      fileURL: null,
    },
    {
      id: '3',
      name: 'Ellie',
      company: 'Samsung',
      theme: 'colorful',
      title: 'Software engineer',
      email: 'ellie@gmail.com',
      message: 'go for it!',
      fileName: 'ellie',
      fileURL: 'ellie.png',
    },
  ]);

  const navigate = useNavigate();

  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        navigate('/');
      }
    });
  });

  const addCard = (card) => {
    const updated = [...cards, card];
    setCards(updated);
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} addCard={addCard} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
