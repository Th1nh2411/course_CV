import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '../../../assets/images';
import Image from '../../../components/Image';
import Search from '../Search';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import config from '../../../config';
import { HiShoppingCart, HiUserCircle } from 'react-icons/hi';
import { MdOutlineHistoryEdu } from 'react-icons/md';
import { useContext, useEffect, useState } from 'react';
import LocalStorageManager from '../../../utils/LocalStorageManager';

import { StoreContext, actions } from '../../../store';
import { BiCart } from 'react-icons/bi';
const cx = classNames.bind(styles);

function Header() {
    const localStorageManager = LocalStorageManager.getInstance();
    const [state, dispatch] = useContext(StoreContext);
    const currentPath = useLocation().pathname;
    const navigate = useNavigate();

    return (
        <>
            <header className={cx('wrapper')}>
                <div className={cx('inner')}>
                    <div className={cx('side-group')}>
                        <Link to={config.routes.home}>
                            <div className={cx('logo-wrapper')}>
                                <img src={images.logo} className={cx('logo')} alt="logo" />
                            </div>
                        </Link>
                    </div>
                    <div className={cx('side-group')}>
                        <ul className={cx('header-nav')}>
                            <li className={cx('header-nav_item')}>Trang chủ</li>
                            <li className={cx('header-nav_item')}>Về chúng tôi</li>
                            <li className={cx('header-nav_item')}>Khoá học STEM</li>
                            <li className={cx('header-nav_item')}>Khoá học</li>
                            <li className={cx('header-nav_item')}>Mentor</li>
                            <li className={cx('header-nav_item')}>Blog</li>
                        </ul>
                    </div>
                    <div className={cx('cart-wrapper')}>
                        <BiCart />
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
