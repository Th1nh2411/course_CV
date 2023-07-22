import styles from './CoursePage.module.scss';
import classNames from 'classnames/bind';
import Image from '../../components/Image';
import images from '../../assets/images';
import { Col, Row } from 'react-bootstrap';
import { Button, Rate, Select } from 'antd';
import config from '../../config';
import { Link } from 'react-router-dom';
import { BsArrowDownShort, BsCalendar3, BsFillPersonFill } from 'react-icons/bs';
import { RiMoneyDollarCircleFill } from 'react-icons/ri';
import { priceFormat } from '../../utils/format';
import { useEffect, useState } from 'react';
const cx = classNames.bind(styles);

const courseItems = [
    {
        courseImg: images.netCourse,
        mentorImg: images.mentor1,
        courseName: '.NET Core API',
        level: 1,
        MentorName: 'Trần Hoà Hiệp',
        NumStudent: 92,
        info: ' .NET Core API là một framework được tạo ra bởi Microsoft để xây dựng các ứng dụng web API và microservices microservices microservices',
        reviews: 5,
        price: 1500000,
        numSessions: 28,
        type: 'Offline',
        field: 'Database',
    },
    {
        courseImg: images.phpCourse,
        mentorImg: images.mentor1,
        courseName: 'Khoá học Php',
        level: 1,
        MentorName: 'Trần Hoà Nghĩa',
        NumStudent: 58,
        info: ' Reactjs là một framework được tạo ra bởi Microsoft để xây dựng các ứng dụng web API và microservices microservices microservices',
        reviews: 3,
        price: 2500000,
        numSessions: 24,
        type: 'Online',
        field: 'Back-End',
    },
    {
        courseImg: images.frontendCourse,
        mentorImg: images.mentor3,
        courseName: 'Khoá học frontend',
        level: 2,
        MentorName: 'Trần Hoà Hiệp',
        NumStudent: 77,
        info: ' .NET Core API là một framework được tạo ra bởi Microsoft để xây dựng các ứng dụng web API và microservices microservices microservices',
        reviews: 4,
        price: 3400000,
        numSessions: 25,
        type: 'Offline',
        field: 'Front-End',
    },
    {
        courseImg: images.devopsCourse,
        mentorImg: images.mentor2,
        courseName: 'Khoá học DevOps',
        level: 3,
        MentorName: 'Trần Hoà Hiệp',
        NumStudent: 84,
        info: ' DevOps là một framework được tạo ra bởi Microsoft để xây dựng các ứng dụng web API và microservices microservices microservices',
        reviews: 3,
        price: 3000000,
        numSessions: 14,
        type: 'Online',
        field: 'Database',
    },
    {
        courseImg: images.frontendCourse,
        mentorImg: images.mentor3,
        courseName: 'Khoá học frontend 3',
        level: 4,
        MentorName: 'Trần Hoà Hiệp',
        NumStudent: 112,
        info: ' .NET Core API là một framework được tạo ra bởi Microsoft để xây dựng các ứng dụng web API và microservices microservices microservices',
        reviews: 4,
        price: 1000000,
        numSessions: 22,
        type: 'Offline',
        field: 'Front-End',
    },
    {
        courseImg: images.dotMVCCourse,
        mentorImg: images.mentor2,
        courseName: 'Khoá học DOT NET MVC',
        level: 4,
        MentorName: 'Trần Hoà Hưng',
        NumStudent: 95,
        info: ' DOT NET MVC là một framework được tạo ra bởi Microsoft để xây dựng các ứng dụng web API và microservices microservices microservices',
        reviews: 4,
        price: 2000000,
        numSessions: 20,
        type: 'Online',
        field: 'Back-End',
    },
    {
        courseImg: images.dotMVCCourse,
        mentorImg: images.mentor2,
        courseName: 'Khoá học DOT NET MVC 2',
        level: 3,
        MentorName: 'Trần Hoà Hưng',
        NumStudent: 65,
        info: ' DOT NET MVC là một framework được tạo ra bởi Microsoft để xây dựng các ứng dụng web API và microservices microservices microservices',
        reviews: 3.5,
        price: 1200000,
        numSessions: 24,
        type: 'Online',
        field: 'Front-End',
    },
    {
        courseImg: images.frontendCourse,
        mentorImg: images.mentor3,
        courseName: 'Khoá học frontend 2',
        level: 1,
        MentorName: 'Trần Hoà Hiệp2',
        NumStudent: 89,
        info: ' .NET Core API là một framework được tạo ra bởi Microsoft để xây dựng các ứng dụng web API và microservices microservices microservices',
        reviews: 4.5,
        price: 2700000,
        numSessions: 25,
        type: 'Online',
        field: 'Front-End',
    },
    {
        courseImg: images.devopsCourse,
        mentorImg: images.mentor2,
        courseName: 'Khoá học Back end Expressjs',
        level: 2,
        MentorName: 'Trần Hoà Hiệp',
        NumStudent: 67,
        info: ' Expressjs là một framework được tạo ra bởi Microsoft để xây dựng các ứng dụng web API và microservices microservices microservices',
        reviews: 3,
        price: 1200000,
        numSessions: 22,
        type: 'Offline',
        field: 'Back-End',
    },
];

const selectFilters = [
    {
        value: 0,
        label: (
            <span className={cx('d-flex', 'align-items-center')}>
                Theo trình độ
                <BsArrowDownShort className={cx('filter-icon', 'up')} />
            </span>
        ),
    },
    {
        value: 1,
        label: (
            <span className={cx('d-flex', 'align-items-center')}>
                Theo trình độ
                <BsArrowDownShort className={cx('filter-icon', 'down')} />
            </span>
        ),
    },
    {
        value: 2,
        label: (
            <span className={cx('d-flex', 'align-items-center')}>
                Theo giá khoá học
                <BsArrowDownShort className={cx('filter-icon', 'up')} />
            </span>
        ),
    },
    {
        value: 3,
        label: (
            <span className={cx('d-flex', 'align-items-center')}>
                Theo giá khoá học
                <BsArrowDownShort className={cx('filter-icon', 'down')} />
            </span>
        ),
    },

    {
        value: 4,
        label: (
            <span className={cx('d-flex', 'align-items-center')}>
                Theo lượng học viên
                <BsArrowDownShort className={cx('filter-icon', 'up')} />
            </span>
        ),
    },
    {
        value: 5,
        label: (
            <span className={cx('d-flex', 'align-items-center')}>
                Theo lượng học viện
                <BsArrowDownShort className={cx('filter-icon', 'down')} />
            </span>
        ),
    },
];
function CourseList({ filter }) {
    const [courseList, setCourseList] = useState(courseItems);
    useEffect(() => {
        if (!filter) {
            setCourseList(courseItems);
        } else {
            const { bottomPrice, topPrice, formLearns, levels, fields } = filter;
            console.log(Number(bottomPrice) <= 1 <= Number(topPrice));
            setCourseList(
                courseItems.filter(
                    (item) =>
                        Number(bottomPrice) <= item.price &&
                        item.price <= Number(topPrice) &&
                        formLearns.some((tp) => tp === item.type) &&
                        levels.some((lv) => lv === item.level) &&
                        fields.some((fd) => fd === item.field),
                ),
            );
        }
    }, [filter]);
    const handleChangeArrangeBox = (value) => {
        if (value === 0) {
            setCourseList(courseList.slice().sort((a, b) => a.level - b.level));
        } else if (value === 1) {
            setCourseList(courseList.slice().sort((a, b) => b.level - a.level));
        } else if (value === 2) {
            setCourseList(courseList.slice().sort((a, b) => a.price - b.price));
        } else if (value === 3) {
            setCourseList(courseList.slice().sort((a, b) => b.price - a.price));
        } else if (value === 4) {
            setCourseList(courseList.slice().sort((a, b) => a.NumStudent - b.NumStudent));
        } else if (value === 5) {
            setCourseList(courseList.slice().sort((a, b) => b.NumStudent - a.NumStudent));
        }
    };
    return (
        <>
            <div className={cx('course-header')}>
                <div className={cx('course-quantity')}>{courseList.length} khoá</div>
                <Select
                    style={{ width: 185 }}
                    placeholder="Sắp xếp khoá học"
                    onChange={handleChangeArrangeBox}
                    options={selectFilters}
                />
            </div>
            <Row>
                {courseList.map((item, index) => (
                    <Col key={index} lg={4}>
                        <div className={cx('course-item')}>
                            <div className={cx('course-item__header')}>
                                <Image src={item.courseImg} className={cx('course-item__img')} />
                                <Image src={item.mentorImg} className={cx('course-item__mentorImg')} />
                            </div>
                            <div className={cx('course-item__body')}>
                                <Image
                                    src={
                                        item.level === 1
                                            ? images.courseLevel1
                                            : item.level === 2
                                            ? images.courseLevel2
                                            : item.level === 3
                                            ? images.courseLevel3
                                            : images.courseLevel4
                                    }
                                    className={cx('course-item__levelIcon')}
                                />
                                <h2 className={cx('course-item__title')}>{item.courseName}</h2>
                                <h4 className={cx('course-item__subtile')}>
                                    Mentor <span>{item.MentorName}</span>
                                </h4>
                                <h4 className={cx('course-item__quantity')}>
                                    <BsFillPersonFill />
                                    {item.NumStudent} Học viên
                                    <span className={cx({ active: item.type === 'Online' })}>{item.type}</span>
                                </h4>
                                <h5 className={cx('course-item__info')}>{item.info}</h5>

                                <Rate className={cx('rate-wrapper')} allowHalf defaultValue={2.5} />
                                <div className={cx('d-flex', 'align-items-center')}>
                                    <div className={cx('course-item__price')}>{priceFormat(item.price)} VNĐ</div>
                                    <div className={cx('course-item__sessions')}>
                                        <BsCalendar3 className={cx('calendar-icon')} /> {item.numSessions} buổi học
                                    </div>
                                </div>
                                <div className={cx('divider')}></div>

                                <Button type="primary" className={cx('course-item__btn')}>
                                    Xem chi tiết
                                </Button>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </>
    );
}

export default CourseList;
