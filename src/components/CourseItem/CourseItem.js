import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import styles from './CourseItem.module.scss';
import Image from '../../components/Image';
import images from '../../assets/images';
import { Button, Rate, Select } from 'antd';
import { BsCalendar3, BsFillPersonFill } from 'react-icons/bs';
import { RiMoneyDollarCircleFill } from 'react-icons/ri';
import { priceFormat } from '../../utils/format';
const cx = classNames.bind(styles);

function CourseItem({ className, data }) {
    return (
        <div className={cx('course-item', className)}>
            <div className={cx('course-item__header')}>
                <Image src={data.courseImg} className={cx('course-item__img')} />
                <Image src={data.mentorImg} className={cx('course-item__mentorImg')} />
            </div>
            <div className={cx('course-item__body')}>
                <Image
                    src={
                        data.level === 1
                            ? images.courseLevel1
                            : data.level === 2
                            ? images.courseLevel2
                            : data.level === 3
                            ? images.courseLevel3
                            : images.courseLevel4
                    }
                    className={cx('course-item__levelIcon')}
                />
                <h2 className={cx('course-item__title')}>{data.courseName}</h2>
                <h4 className={cx('course-item__subtile')}>
                    Mentor <span>{data.MentorName}</span>
                </h4>
                <h4 className={cx('course-item__quantity')}>
                    <BsFillPersonFill />
                    {data.NumStudent} Học viên
                    <span className={cx({ active: data.type === 'Online' })}>{data.type}</span>
                </h4>
                <h5 className={cx('course-item__info')}>{data.info}</h5>

                <Rate className={cx('rate-wrapper')} allowHalf defaultValue={2.5} />
                <div className={cx('d-flex', 'align-items-center')}>
                    <div className={cx('course-item__price')}>{priceFormat(data.price)} VNĐ</div>
                    <div className={cx('course-item__sessions')}>
                        <BsCalendar3 className={cx('calendar-icon')} /> {data.numSessions} buổi học
                    </div>
                </div>
                <div className={cx('divider')}></div>

                <Button type="primary" className={cx('course-item__btn')}>
                    Xem chi tiết
                </Button>
            </div>
        </div>
    );
}

export default CourseItem;
