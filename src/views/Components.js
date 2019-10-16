import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import styles from './Components.module.scss';
import axios from 'axios';

const Components = () => {
  const [itemsList, setItemsList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        'http://www.mocky.io/v2/5ce7075e3300001ab373199e?mocky-delay=1000ms'
      );
      setItemsList(response.data);
    };
    fetchData();
  });

  return (
    <div className={styles.wrapper}>
      {itemsList.length ? (
        itemsList.map(item => (
          <div
            key={item.id}
            className={cx('notification is-info', styles.item)}
          >
            <button className='delete' />
            {item.content}
          </div>
        ))
      ) : (
        <button className='button is-loading is-info is-large'></button>
      )}
    </div>
  );
};

export default Components;
