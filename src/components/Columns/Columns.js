import React from 'react';
import cx from 'classnames';
import styles from './Columns.module.scss';
import withCollapse from '../../hoc/withCollapse';
import withAuth from '../../hoc/withAuth';
import { compose } from 'recompose';

const Columns = ({ toggle, isCollapsed, isAuthorised, toggleAuth }) => {
  const rowClass = cx('columns', {
    [styles.isCollapsed]: isCollapsed
  });

  return (
    <div className='columns'>
      <div className='column'>
        <p>Authorised: {isAuthorised.toString()}</p>
        <button className='button is-dark is-large' onClick={toggle}>
          Hellow
        </button>
        <button className='button is-large is-warning' onClick={toggleAuth}>
          {isAuthorised ? 'logout' : 'login'}
        </button>
        {isAuthorised ? (
          <div className={rowClass}>
            <div className='column'>
              <div className='notification is-primary'>First column</div>
            </div>
            <div className='column'>
              <div className='notification is-primary'>Second column</div>
            </div>
            <div className='column'>
              <div className='notification is-primary'>Third column</div>
            </div>
            <div className='column'>
              <div className='notification is-primary'>Fourth column</div>
            </div>
          </div>
        ) : (
          <h2 className='title '>You must sign in</h2>
        )}
      </div>
    </div>
  );
};

export default compose(
  withAuth,
  withCollapse
)(Columns);
