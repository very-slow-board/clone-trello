import React from 'react';
import styles from './Header.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Header = () => (
  <header className={cx('header')}>
    <div className={cs('header-left')}>
    </div>
    <div className={cs('header-right')}></div>
  </header>
);

export default Header;