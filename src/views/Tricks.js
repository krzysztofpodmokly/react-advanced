import React, { useRef, useEffect } from 'react';
import styles from './Tricks.module.scss';
import TweenMax from 'gsap/TweenMax';

const Tricks = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    TweenMax.from(boxRef.current, 1, { x: '-100%', opacity: 0, scale: 5 });
  });

  return (
    <div className={styles.wrapper}>
      <h2 className='title is-3'>Components</h2>
      <div ref={boxRef} className={styles.box}></div>
    </div>
  );
};

export default Tricks;
