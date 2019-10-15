import React from 'react';
import cx from 'classnames';
import styles from './Columns.module.scss';
import Authorisation from '../../providers/Authorisation';
import Collapse from '../../providers/Collapse';

const Columns = ({ toggle, isCollapsed, isAuthorised, toggleAuth }) => {
  const rowClass = isCollapsed =>
    cx('columns', {
      [styles.isCollapsed]: isCollapsed
    });

  return (
    <Collapse
      render={({ toggle, isCollapsed }) => (
        <Authorisation
          render={({ toggleAuth, isAuthorised }) => (
            <div className='columns'>
              <div className='column'>
                <p>Authorised: {isAuthorised.toString()}</p>
                <button className='button is-dark is-large' onClick={toggle}>
                  Hellow
                </button>
                <button
                  className='button is-large is-warning'
                  onClick={toggleAuth}
                >
                  {isAuthorised ? 'logout' : 'login'}
                </button>
                {isAuthorised ? (
                  <div className={rowClass(isCollapsed)}>
                    <div className='column'>
                      <div className='notification is-primary'>
                        First column
                      </div>
                    </div>
                    <div className='column'>
                      <div className='notification is-primary'>
                        Second column
                      </div>
                    </div>
                    <div className='column'>
                      <div className='notification is-primary'>
                        Third column
                      </div>
                    </div>
                    <div className='column'>
                      <div className='notification is-primary'>
                        Fourth column
                      </div>
                    </div>
                  </div>
                ) : (
                  <h2 className='title '>You must sign in</h2>
                )}
              </div>
            </div>
          )}
        />
      )}
    />
  );
};

export default Columns;
