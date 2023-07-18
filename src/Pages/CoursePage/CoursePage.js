import styles from './CoursePage.module.scss';
import classNames from 'classnames/bind';
import Image from '../../components/Image';
import images from '../../assets/images';
import { Col, Row } from 'react-bootstrap';
import { useContext, useEffect, useState } from 'react';
import { StoreContext, actions } from '../../store';
const cx = classNames.bind(styles);

function CoursePage() {
    const [orderType, setOrderType] = useState(1);
    const [menu, setMenu] = useState([]);
    const [state, dispatch] = useContext(StoreContext);

    return <div className={cx('wrapper')}>CoursePage page</div>;
}

export default CoursePage;
