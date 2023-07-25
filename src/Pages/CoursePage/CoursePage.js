import styles from './CoursePage.module.scss';
import classNames from 'classnames/bind';
import { Col, Row } from 'react-bootstrap';
import { useContext, useEffect, useState } from 'react';
import { Breadcrumb, Button, Checkbox, Dropdown, Input, InputNumber, Pagination, Radio } from 'antd';
import { BsCalendar3, BsFillCaretRightFill, BsFillPersonFill } from 'react-icons/bs';
import CourseList from './CourseList';
import COURSE_PAGE_DATA from './data';
const cx = classNames.bind(styles);

function CoursePage() {
    const [bottomPrice, setBottomPrice] = useState(0);
    const [topPrice, setTopPrice] = useState(10000000);
    const [formLearns, setFormLearn] = useState([]); // 0 = offline, 1 = online
    const [levels, setLevel] = useState([]);
    const [fields, setField] = useState([]);
    const [showPriceRangeMb, setShowPriceRangeMb] = useState(false);
    const [showFormLearnMb, setShowFormLearnMb] = useState(false);
    const [showLevelMb, setShowLevelMb] = useState(false);
    const [showFieldMb, setShowFieldMb] = useState(false);
    const [filter, setFilter] = useState(null);
    const onChangeFormLearn = (checkedValues) => {
        setFormLearn(checkedValues);
    };
    const onChangeLevel = (checkedValues) => {
        setLevel(checkedValues);
    };
    const onChangeField = (checkedValues) => {
        setField(checkedValues);
    };
    const handleClickFilterOff = () => {
        setFilter(null);
        setBottomPrice(0);
        setTopPrice(10000000);
        setFormLearn([]);
        setLevel([]);
        setField([]);
    };
    const handleClickFilter = () => {
        setFilter({
            bottomPrice,
            topPrice,
            formLearns:
                formLearns.length !== 0 ? formLearns : COURSE_PAGE_DATA.formLearnOptions.map((item) => item.value),
            levels: levels.length !== 0 ? levels : COURSE_PAGE_DATA.levelOptions.map((item) => item.value),
            fields: fields.length !== 0 ? fields : COURSE_PAGE_DATA.fieldOptions.map((item) => item.value),
        });
    };
    console.log(bottomPrice);
    return (
        <div className={cx('wrapper')}>
            <section className={cx('banner-section')}>
                <div className={cx('banner-content')}>
                    <div className={cx('banner-title')}>Danh sách khoá học</div>
                    <div className={cx('breadcrumb-wrapper')}>
                        <Breadcrumb
                            separator=">"
                            className={cx('breadcrumb-wrapper')}
                            items={COURSE_PAGE_DATA.breadcrumbItems}
                        />
                    </div>
                </div>
            </section>
            <section className={cx('course-section')}>
                <Row className={cx('g-6')}>
                    <Col md={3}>
                        <div className={cx('sidebar-wrapper')}>
                            <div className={cx('sidebar-header')}>
                                <h2 className={cx('sidebar-header__title')}>Lọc khoá học</h2>
                                <h5 className={cx('filter-off')} onClick={handleClickFilterOff}>
                                    Xoá lọc
                                </h5>
                            </div>
                            <div className={cx('price-range')}>
                                <div
                                    className={cx('sidebar-title')}
                                    onClick={() => setShowPriceRangeMb(!showPriceRangeMb)}
                                >
                                    Khoảng giá{' '}
                                    <BsFillCaretRightFill
                                        className={cx('sidebar-title-icon', { active: showPriceRangeMb })}
                                    />
                                </div>
                                <div className={cx('hide-on-mb', { active: showPriceRangeMb })}>
                                    <div className={cx('sidebar-subtitle')}>Từ giá</div>
                                    <InputNumber
                                        size="large"
                                        addonAfter="VNĐ"
                                        prefixCls="VNĐ"
                                        style={{ width: 100 + '%' }}
                                        value={bottomPrice}
                                        formatter={(value) => value.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                        parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
                                        onChange={(value) => {
                                            setBottomPrice(Number(value));
                                        }}
                                        status={bottomPrice > topPrice && 'error'}
                                    />
                                    <div className={cx('sidebar-subtitle')}>Đến giá</div>
                                    <InputNumber
                                        size="large"
                                        addonAfter="VNĐ"
                                        style={{ width: 100 + '%' }}
                                        value={topPrice}
                                        formatter={(value) => value.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                        parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
                                        onChange={(value) => {
                                            setTopPrice(Number(value));
                                        }}
                                        status={bottomPrice > topPrice && 'error'}
                                    />
                                    {bottomPrice > topPrice && (
                                        <p className={cx('price-error')}>Ngưỡng dưới không được quá ngưỡng trên</p>
                                    )}
                                </div>
                            </div>
                            <div className={cx('form-learn')}>
                                <div
                                    className={cx('sidebar-title')}
                                    onClick={() => setShowFormLearnMb(!showFormLearnMb)}
                                >
                                    Hình thức học{' '}
                                    <BsFillCaretRightFill
                                        className={cx('sidebar-title-icon', { active: showFormLearnMb })}
                                    />
                                </div>
                                <div className={cx('hide-on-mb', { active: showFormLearnMb })}>
                                    <Checkbox.Group
                                        options={COURSE_PAGE_DATA.formLearnOptions}
                                        onChange={onChangeFormLearn}
                                        value={formLearns}
                                    />
                                </div>
                            </div>
                            <div className={cx('level')}>
                                <div className={cx('sidebar-title')} onClick={() => setShowLevelMb(!showLevelMb)}>
                                    Trình độ{' '}
                                    <BsFillCaretRightFill
                                        className={cx('sidebar-title-icon', { active: showLevelMb })}
                                    />
                                </div>
                                <div className={cx('hide-on-mb', { active: showLevelMb })}>
                                    <Checkbox.Group
                                        value={levels}
                                        style={{ flexDirection: 'column' }}
                                        options={COURSE_PAGE_DATA.levelOptions}
                                        onChange={onChangeLevel}
                                    />
                                </div>
                            </div>
                            <div className={cx('field')}>
                                <div className={cx('sidebar-title')} onClick={() => setShowFieldMb(!showFieldMb)}>
                                    Lĩnh vực{' '}
                                    <BsFillCaretRightFill
                                        className={cx('sidebar-title-icon', { active: showFieldMb })}
                                    />
                                </div>
                                <div className={cx('hide-on-mb', { active: showFieldMb })}>
                                    <Checkbox.Group
                                        value={fields}
                                        options={COURSE_PAGE_DATA.fieldOptions}
                                        onChange={onChangeField}
                                        style={{ flexDirection: 'column' }}
                                    />
                                </div>
                            </div>
                            <Button onClick={handleClickFilter} type="primary" className={cx('sidebar-confirm-btn')}>
                                Tìm kiếm
                            </Button>
                        </div>
                    </Col>
                    <Col md={9}>
                        <CourseList filter={filter} />
                        <Pagination className={cx('course-pagination')} defaultCurrent={1} total={50} />
                    </Col>
                </Row>
            </section>
        </div>
    );
}

export default CoursePage;
