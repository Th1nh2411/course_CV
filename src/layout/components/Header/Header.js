import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '../../../assets/images';
import Image from '../../../components/Image';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import config from '../../../config';
import { useContext, useEffect, useState } from 'react';
import LocalStorageManager from '../../../utils/LocalStorageManager';

import { StoreContext, actions } from '../../../store';
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
                                <img
                                    src="https://www.learnworlds.com/app/themes/learnworlds/dist/images/logo.svg"
                                    className={cx('logo')}
                                    alt="logo"
                                />
                            </div>
                        </Link>
                    </div>
                    <div className={cx('side-group')}>
                        <nav className={cx('header-nav')}>
                            <NavLink
                                className={(nav) => cx('header-nav_item', { active: nav.isActive })}
                                to={config.routes.home}
                            >
                                Trang chủ
                            </NavLink>
                            <NavLink
                                className={(nav) => cx('header-nav_item', { active: nav.isActive })}
                                to={config.routes.aboutUs}
                            >
                                Về chúng tôi
                            </NavLink>
                            <NavLink
                                className={(nav) => cx('header-nav_item', { active: nav.isActive })}
                                to={config.routes.STEMCourse}
                            >
                                Khoá học STEM
                            </NavLink>
                            <NavLink
                                className={(nav) => cx('header-nav_item', { active: nav.isActive })}
                                to={config.routes.course}
                            >
                                Khoá học
                            </NavLink>
                            <NavLink
                                className={(nav) => cx('header-nav_item', { active: nav.isActive })}
                                to={config.routes.mentor}
                            >
                                Mentor
                            </NavLink>
                            <NavLink
                                className={(nav) => cx('header-nav_item', { active: nav.isActive })}
                                to={config.routes.blog}
                            >
                                Blog
                            </NavLink>
                        </nav>
                    </div>
                    <div className={cx('cart-wrapper')}>
                        <Image src={images.shoppingCart} alt="cart" className={cx('cart-img')} />
                        <span className={cx('cart-quantity')}>3</span>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
