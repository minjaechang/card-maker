import styles from './card_add_form.module.css';
import Button from '../button/button';
import ImageFileInput from '../image_file_input/image_file_input';
import { useRef } from 'react';

const CardAddForm = ({ onAdd }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    const card = {
      id: Date.now(),
      name: nameRef.current.value || '',
      company: companyRef.current.value || '',
      theme: themeRef.current.value,
      title: titleRef.current.value || '',
      email: emailRef.current.value || '',
      message: messageRef.current.value || '',
      fileName: '',
      fileURL: '',
    };

    formRef.current.reset();
    onAdd(card);
  };

  return (
    <form ref={formRef} className={styles.form}>
      <input
        ref={nameRef}
        className={styles.input}
        type='text'
        name='name'
        placeholder='name'
      />
      <input
        ref={companyRef}
        className={styles.input}
        type='text'
        name='company'
        placeholder='company'
      />
      <select
        ref={themeRef}
        className={styles.select}
        name='theme'
        placeholder='theme'
      >
        <option placeholder='light'>light</option>
        <option placeholder='dark'>dark</option>
        <option placeholder='colorful'>colorful</option>
      </select>
      <input
        ref={titleRef}
        className={styles.input}
        type='text'
        name='title'
        placeholder='title'
      />
      <input
        ref={emailRef}
        className={styles.input}
        type='email'
        name='email'
        placeholder='email'
      />
      <textarea
        ref={messageRef}
        className={styles.textarea}
        name='message'
        placeholder='message'
      ></textarea>
      <div className={styles.fileInput}>
        <ImageFileInput />
      </div>
      <Button name='Add' onClick={onSubmit} />
    </form>
  );
};

export default CardAddForm;
