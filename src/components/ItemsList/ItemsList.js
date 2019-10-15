import React from 'react';
import styles from './ItemsList.module.scss';
import cx from 'classnames';
import Collapse from '../../providers/Collapse';

const items = [
  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias nesciunt exercitationem atque voluptas',
  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias nesciunt exercitationem atque voluptas',
  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias nesciunt exercitationem atque voluptas',
  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias nesciunt exercitationem atque voluptas'
];

const ItemsList = ({ isCollapsed, toggle }) => {
  const listClass = isCollapsed =>
    cx(styles.list, {
      [styles.isCollapsed]: isCollapsed
    });
  return (
    <Collapse
      render={({ isCollapsed, toggle }) => (
        <div>
          <button className='button is-dark is-large' onClick={toggle}>
            Collapse
          </button>
          <ul className={listClass(isCollapsed)}>
            {items.map(item => (
              <li className='notification is-primary'>{item}</li>
            ))}
          </ul>
        </div>
      )}
    />
  );
};
export default ItemsList;
