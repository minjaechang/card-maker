import styles from './maker.module.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import { useState } from 'react';

const Maker = ({ authService }) => {
  // {key: card}의 형태로 만들었음
  // map을 이용하는 경우에 발생하는 성능 저하 방지
  const [cards, setCards] = useState({
    1: {
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
    2: {
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
    3: {
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
  });

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

  const createdOrUpdateCard = (card) => {
    // setCards를 호출할 때의 cards의 state를 그대로 복사!
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          cards={cards}
          addCard={createdOrUpdateCard}
          updateCard={createdOrUpdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
