import React from 'react';
import Author from './Author';
import Contacts from './Contacts';
import Menu from './Menu';
import styles from './Sidebar.module.scss';
import { useSiteMetadata } from '../../hooks';

const Sidebar = ({ isIndex }) => {
  const { author, menu } = useSiteMetadata();

  return (
    <div className={styles['sidebar']}>
      <div className={styles['sidebar__inner']}>
        <Author author={author} isIndex={isIndex} />
        <Menu menu={menu} />
        <p>I'm currently available for freelance projects 👍</p>
        <Contacts contacts={author.contacts} />
      </div>
    </div>
  );
};

export default Sidebar;
