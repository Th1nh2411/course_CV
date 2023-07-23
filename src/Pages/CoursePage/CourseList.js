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
import { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../../store';
const cx = classNames.bind(styles);

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
    const [state, dispatch] = useContext(StoreContext);
    const courseItems = state.courseItems;
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
