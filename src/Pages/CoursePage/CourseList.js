import styles from './CoursePage.module.scss';
import classNames from 'classnames/bind';

import { Col, Row } from 'react-bootstrap';
import { Button, Rate, Select } from 'antd';
import config from '../../config';
import { BsArrowDownShort, BsCalendar3, BsFillPersonFill } from 'react-icons/bs';
import { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../../store';
import CourseItem from '../../components/CourseItem/CourseItem';
import COURSE_PAGE_DATA from './data';
const cx = classNames.bind(styles);

function CourseList({ filter }) {
    const [courseList, setCourseList] = useState(COURSE_PAGE_DATA.courseItems);
    useEffect(() => {
        if (!filter) {
            setCourseList(COURSE_PAGE_DATA.courseItems);
        } else {
            const { bottomPrice, topPrice, formLearns, levels, fields } = filter;
            console.log(Number(bottomPrice) <= 1 <= Number(topPrice));
            setCourseList(
                COURSE_PAGE_DATA.courseItems.filter(
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
                    options={COURSE_PAGE_DATA.selectFilters}
                />
            </div>
            <Row>
                {courseList.map((item, index) => (
                    <Col key={index} lg={4}>
                        <CourseItem data={item} />
                    </Col>
                ))}
            </Row>
        </>
    );
}

export default CourseList;
