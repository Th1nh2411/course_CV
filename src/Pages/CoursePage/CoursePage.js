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
import CourseList from './CourseList';
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
function CoursePage() {
    const [bottomPrice, setBottomPrice] = useState(0);
    const [topPrice, setTopPrice] = useState(10000000);
    const [formLearn, setFormLearn] = useState([]); // 0 = offline, 1 = online
    const [field, setField] = useState([]);
    const [level, setLevel] = useState(0);

    return (
        <div className={cx('wrapper')}>
            <section className={cx('banner-wrapper')}>
                <div className={cx('banner-content')}>
                    <div className={cx('banner-title')}>Danh sách khoá học</div>
                    <div className={cx('breadcrumb-wrapper')}>
                        <Breadcrumb separator=">" className={cx('breadcrumb-wrapper')}>
                            <Breadcrumb.Item>
                                <Link to={config.routes.home} className={cx('breadcrumb-text')}>
                                    Trang chủ
                                </Link>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item>
                                <Link to={config.routes.course} className={cx('breadcrumb-text')}>
                                    Khoá học
                                </Link>
                            </Breadcrumb.Item>
                        </Breadcrumb>
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
                                <Input value={bottomPrice} onChange={(e) => setBottomPrice(e.target.value)} />
                                <div className={cx('sidebar-subtitle')}>Đến giá</div>
                                <Input value={topPrice} onChange={(e) => setTopPrice(e.target.value)} />
                            </div>
                            <div className={cx('form-learn')}>
                                <div className={cx('sidebar-title')}>Hình thức học</div>
                                <Checkbox
                                    value="Online"
                                    onChange={(e) => setFormLearn((prev) => [...prev, e.target.value])}
                                >
                                    Online
                                </Checkbox>
                                <br />
                                <Checkbox
                                    value="Offline"
                                    onChange={(e) => setFormLearn((prev) => [...prev, e.target.value])}
                                >
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
                                <Checkbox
                                    value="Back-End"
                                    onChange={(e) => setFormLearn((prev) => [...prev, e.target.value])}
                                >
                                    Back-End
                                </Checkbox>
                                <br />
                                <Checkbox
                                    value="Front-end"
                                    onChange={(e) => setFormLearn((prev) => [...prev, e.target.value])}
                                >
                                    Front-end
                                </Checkbox>
                                <br />
                                <Checkbox
                                    value="Database"
                                    onChange={(e) => setFormLearn((prev) => [...prev, e.target.value])}
                                >
                                    Database
                                </Checkbox>
                                <br />
                                <Checkbox
                                    value="Cấp tốc"
                                    onChange={(e) => setFormLearn((prev) => [...prev, e.target.value])}
                                >
                                    Cấp tốc
                                </Checkbox>
                                <br />
                                <Checkbox
                                    value="Other"
                                    onChange={(e) => setFormLearn((prev) => [...prev, e.target.value])}
                                >
                                    Other
                                </Checkbox>
                                <br />
                                <Checkbox
                                    value="STEM"
                                    onChange={(e) => setFormLearn((prev) => [...prev, e.target.value])}
                                >
                                    STEM
                                </Checkbox>
                            </div>
                            <Button type="primary" className={cx('sidebar-confirm-btn')}>
                                Tìm kiếm
                            </Button>
                        </div>
                    </Col>
                    <Col md={9}>
                        <div className={cx('course-header')}>
                            <div className={cx('course-quantity')}>33 khoá</div>
                            <div className={cx('course-filter')}>
                                <Dropdown
                                    menu={{
                                        items: filterItems,
                                    }}
                                    trigger={['click']}
                                >
                                    <Button>
                                        Sắp xếp khoá học <AiOutlineDown className={cx('down-icon')} />
                                    </Button>
                                </Dropdown>
                            </div>
                        </div>
                        <CourseList />
                    </Col>
                </Row>
            </section>
        </div>
    );
}

export default CoursePage;
