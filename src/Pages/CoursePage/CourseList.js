import styles from './CoursePage.module.scss';
import classNames from 'classnames/bind';
import Image from '../../components/Image';
import images from '../../assets/images';
import { Col, Row } from 'react-bootstrap';
import { useContext, useEffect, useState } from 'react';
import { StoreContext, actions } from '../../store';
import { Breadcrumb, Button, Checkbox, Dropdown, Input, Radio } from 'antd';
import config from '../../config';
import { Link } from 'react-router-dom';
import { AiFillStar, AiOutlineDown, AiOutlineStar } from 'react-icons/ai';
import { BsCalendar3, BsFillPersonFill } from 'react-icons/bs';
const cx = classNames.bind(styles);
const filterItems = [
    {
        label: <span href="https://www.antgroup.com">Từ thấp xuống cao</span>,
        key: '0',
    },
    {
        label: <span href="https://www.aliyun.com">Từ cao xuống thấp</span>,
        key: '1',
    },
];
const courseItems = [
    {
        courseImg: images.netCourse,
        mentorImg: images.mentor1,
        courseName: '.NET Core API',
        levelImg: images.courseLevel1,
        MentorName: 'Trần Hoà Hiệp',
        NumStudent: 105,
        info: ' .NET Core API là một framework được tạo ra bởi Microsoft để xây dựng các ứng dụng web API và microservices microservices microservices',
        reviews: 5,
        price: 3000000,
        numSessions: 20,
    },
    {
        courseImg: images.netCourse,
        mentorImg: images.mentor1,
        courseName: '.NET Core API',
        levelImg: images.courseLevel1,
        MentorName: 'Trần Hoà Hiệp',
        NumStudent: 105,
        info: ' .NET Core API là một framework được tạo ra bởi Microsoft để xây dựng các ứng dụng web API và microservices microservices microservices',
        reviews: 5,
        price: 3000000,
        numSessions: 20,
    },
    {
        courseImg: images.netCourse,
        mentorImg: images.mentor1,
        courseName: '.NET Core API',
        levelImg: images.courseLevel1,
        MentorName: 'Trần Hoà Hiệp',
        NumStudent: 105,
        info: ' .NET Core API là một framework được tạo ra bởi Microsoft để xây dựng các ứng dụng web API và microservices microservices microservices',
        reviews: 5,
        price: 3000000,
        numSessions: 20,
    },
];
function CourseList() {
    return (
        <Row>
            {courseItems.map((item, index) => (
                <Col key={index} md={4}>
                    <div className={cx('course-item')}>
                        <div className={cx('course-item__header')}>
                            <Image src={item.courseImg} className={cx('course-item__img')} />
                            <Image src={item.mentorImg} className={cx('course-item__mentorImg')} />
                        </div>
                        <div className={cx('course-item__body')}>
                            <Image src={images.courseLevel1} className={cx('course-item__levelIcon')} />
                            <h2 className={cx('course-item__title')}>{item.courseName}</h2>
                            <h4 className={cx('course-item__subtile')}>
                                Mentor <span>{item.MentorName}</span>
                            </h4>
                            <h4 className={cx('course-item__quantity')}>
                                <BsFillPersonFill />
                                {item.NumStudent} Học viên
                            </h4>
                            <h5 className={cx('course-item__info')}>{item.info}</h5>
                            <div className={cx('course-item__reviews')}>
                                {[...Array(5)].map((star, index) => {
                                    if (index + 1 < item.reviews) {
                                        return <AiFillStar className={cx('star-icon')} />;
                                    } else {
                                        return <AiOutlineStar className={cx('star-icon')} />;
                                    }
                                })}
                            </div>
                            <div className={cx('d-flex', 'align-items-center')}>
                                <div className={cx('course-item__price')}>{item.price}</div>
                                <div className={cx('course-item__sessions')}>
                                    <BsCalendar3 className={cx('calendar-icon')} /> {item.numSessions} buổi học
                                </div>
                            </div>
                            <div className={cx('divider')}></div>

                            <Button className={cx('course-item__btn')}>Xem chi tiết</Button>
                        </div>
                    </div>
                </Col>
            ))}
        </Row>
    );
}

export default CourseList;
