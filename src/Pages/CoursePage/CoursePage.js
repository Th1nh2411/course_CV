import styles from './CoursePage.module.scss';
import classNames from 'classnames/bind';
import Image from '../../components/Image';
import images from '../../assets/images';
import { Col, Row } from 'react-bootstrap';
import { useContext, useEffect, useState } from 'react';
import { StoreContext, actions } from '../../store';
import { Breadcrumb, Button, Checkbox, Dropdown, Input, InputNumber, Pagination, Radio } from 'antd';
import config from '../../config';
import { Link } from 'react-router-dom';
import { AiFillStar, AiOutlineDown, AiOutlineStar } from 'react-icons/ai';
import { BsCalendar3, BsFillPersonFill } from 'react-icons/bs';
import CourseList from './CourseList';
import { onlyNumber } from '../../utils/format';
const cx = classNames.bind(styles);
const breadcrumbItems = [
    {
        title: (
            <Link to={config.routes.home} className={cx('breadcrumb-text')}>
                Trang chủ
            </Link>
        ),
    },
    {
        title: (
            <Link to={config.routes.course} className={cx('breadcrumb-text')}>
                Khoá học
            </Link>
        ),
    },
];
function CoursePage() {
    const [bottomPrice, setBottomPrice] = useState(0);
    const [topPrice, setTopPrice] = useState(10000000);
    const [formLearn, setFormLearn] = useState([]); // 0 = offline, 1 = online
    const [field, setField] = useState([]);
    const [level, setLevel] = useState(0);
    const onChangeFormLearn = (e) => {
        if (formLearn.find((item) => item === e.target.value)) {
            setFormLearn((prev) => prev.filter((item) => item !== e.target.value));
        } else {
            setFormLearn((prev) => [...prev, e.target.value]);
        }
    };
    const onChangeField = (e) => {
        if (field.find((item) => item === e.target.value)) {
            setField((prev) => prev.filter((item) => item !== e.target.value));
        } else {
            setField((prev) => [...prev, e.target.value]);
        }
    };
    return (
        <div className={cx('wrapper')}>
            <section className={cx('banner-wrapper')}>
                <div className={cx('banner-content')}>
                    <div className={cx('banner-title')}>Danh sách khoá học</div>
                    <div className={cx('breadcrumb-wrapper')}>
                        <Breadcrumb separator=">" className={cx('breadcrumb-wrapper')} items={breadcrumbItems} />
                    </div>
                </div>
            </section>
            <section className={cx('course-wrapper')}>
                <Row>
                    <Col md={3}>
                        <div className={cx('sidebar-wrapper')}>
                            <div className={cx('price-range')}>
                                <div className={cx('sidebar-title')}>Khoảng giá</div>
                                <div className={cx('sidebar-subtitle')}>Từ giá</div>
                                <Input
                                    addonAfter="VNĐ"
                                    prefixCls="VNĐ"
                                    style={{ width: 100 + '%' }}
                                    value={bottomPrice}
                                    onChange={(e) => {
                                        console.log(e.target.value);
                                        if (onlyNumber(e.target.value)) {
                                            setBottomPrice(e.target.value);
                                        }
                                    }}
                                    status={bottomPrice > topPrice && 'error'}
                                />
                                <div className={cx('sidebar-subtitle')}>Đến giá</div>
                                <Input
                                    addonAfter="VNĐ"
                                    style={{ width: 100 + '%' }}
                                    value={topPrice}
                                    onChange={(value) => {
                                        if (onlyNumber(value)) {
                                            setTopPrice(value);
                                        }
                                    }}
                                    status={bottomPrice > topPrice && 'error'}
                                />
                                {bottomPrice > topPrice && (
                                    <p className={cx('price-error')}>Ngưỡng dưới không được quá ngưỡng trên</p>
                                )}
                            </div>
                            <div className={cx('form-learn')}>
                                <div className={cx('sidebar-title')}>Hình thức học</div>
                                <Checkbox value="Online" onChange={onChangeFormLearn}>
                                    Online
                                </Checkbox>
                                <br />
                                <Checkbox value="Offline" onChange={onChangeFormLearn}>
                                    Offline
                                </Checkbox>
                            </div>
                            <div className={cx('level')}>
                                <div className={cx('sidebar-title')}>Trình độ</div>
                                <div className={cx('level-radio')}>
                                    <Radio checked={level === 0} onChange={(e) => setLevel(0)}>
                                        Dễ
                                    </Radio>
                                    <Image className={cx('level-icon')} src={images.courseLevel1} />
                                </div>
                                <div className={cx('level-radio')}>
                                    <Radio checked={level === 1} onChange={(e) => setLevel(1)}>
                                        Trung bình
                                    </Radio>
                                    <Image className={cx('level-icon')} src={images.courseLevel2} />
                                </div>
                                <div className={cx('level-radio')}>
                                    <Radio checked={level === 2} onChange={(e) => setLevel(2)}>
                                        Khó
                                    </Radio>
                                    <Image className={cx('level-icon')} src={images.courseLevel3} />
                                </div>
                                <div className={cx('level-radio')}>
                                    <Radio checked={level === 3} onChange={(e) => setLevel(3)}>
                                        Cực khó
                                    </Radio>
                                    <Image className={cx('level-icon')} src={images.courseLevel4} />
                                </div>
                            </div>
                            <div className={cx('field')}>
                                <div className={cx('sidebar-title')}>Lĩnh vực</div>
                                <Checkbox value="Back-End" onChange={onChangeField}>
                                    Back-End
                                </Checkbox>
                                <br />
                                <Checkbox value="Front-end" onChange={onChangeField}>
                                    Front-end
                                </Checkbox>
                                <br />
                                <Checkbox value="Database" onChange={onChangeField}>
                                    Database
                                </Checkbox>
                                <br />
                                <Checkbox value="Cấp tốc" onChange={onChangeField}>
                                    Cấp tốc
                                </Checkbox>
                                <br />
                                <Checkbox value="Other" onChange={onChangeField}>
                                    Other
                                </Checkbox>
                                <br />
                                <Checkbox value="STEM" onChange={onChangeField}>
                                    STEM
                                </Checkbox>
                            </div>
                            <Button type="primary" className={cx('sidebar-confirm-btn')}>
                                Tìm kiếm
                            </Button>
                        </div>
                    </Col>
                    <Col md={9}>
                        <CourseList />
                        <Pagination className={cx('course-pagination')} defaultCurrent={1} total={50} />
                    </Col>
                </Row>
            </section>
        </div>
    );
}

export default CoursePage;
