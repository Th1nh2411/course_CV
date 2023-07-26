import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import Image from '../../components/Image';
import images from '../../assets/images';
import { Col, Row } from 'react-bootstrap';
import { useContext, useEffect, useState } from 'react';
import { StoreContext, actions } from '../../store';
import { Button } from 'antd';
import Slide from '../../components/Slide';
import CourseItem from '../../components/CourseItem';
import HOME_DATA from './data';
import { Link, useNavigate } from 'react-router-dom';
import config from '../../config';
import MentorItem from '../../components/MentorItem/MentorItem';
const cx = classNames.bind(styles);

function Home() {
    const navigate = useNavigate();
    return (
        <div className={cx('wrapper')}>
            {/* BANNER SECTION */}
            <section
                style={{ background: `url(${HOME_DATA.banner.image}) center / cover no-repeat` }}
                className={cx('banner-section')}
            >
                <div className={cx('banner-content')}>
                    <h3 className={cx('banner-title')}>{HOME_DATA.banner.title}</h3>
                    <h1 className={cx('banner-subtitle')}>{HOME_DATA.banner.caption}</h1>
                    <h4 className={cx('banner-info')}>{HOME_DATA.banner.description}</h4>
                    <Button
                        onClick={() => navigate(config.routes.course)}
                        type="primary"
                        className={cx('primary-custom-btn')}
                    >
                        Xem khoá học
                    </Button>
                </div>
            </section>
            {/* ABOUT US SECTION */}
            <section
                style={{ background: `url('${HOME_DATA.about.overlayImage}') center / cover no-repeat fixed` }}
                className={cx('aboutUs-section')}
            >
                <div className={cx('aboutUs-content')}>
                    <h1 className={cx('section-title')}>{HOME_DATA.about.title}</h1>
                    <Row className={cx('g-5', 'aboutUs-body')}>
                        <Col lg={6} xs={12}>
                            <div className={cx('aboutUs-leftSide')}>
                                <h3 className={cx('aboutUs-info')}>{HOME_DATA.about.description}</h3>
                                <div className={cx('aboutUs-actions')}>
                                    <Button
                                        onClick={() => navigate(config.routes.course)}
                                        type="primary"
                                        className={cx('primary-custom-btn')}
                                    >
                                        Xem khoá học
                                    </Button>
                                    <Button
                                        target="_blank"
                                        href={HOME_DATA.about.linkFb}
                                        type="primary"
                                        className={cx('primary-custom-btn')}
                                    >
                                        Hỗ trợ tư vấn
                                    </Button>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} xs={12}>
                            <Image className={cx('aboutUs-img')} src={HOME_DATA.about.aboutImage} />
                        </Col>
                    </Row>
                </div>
            </section>
            {/* INTRODUCE SECTION */}
            <section className={cx('introduce-section')}>
                <h1 className={cx('section-title')}>{HOME_DATA.advantages.title}</h1>
                <div className={cx('introduce-body')}>
                    <Row className={cx('g-6')}>
                        {HOME_DATA.advantages.items.map((item, index) => (
                            <Col xs={12} lg={4} key={index}>
                                <div className={cx('introduce-item')}>
                                    <h3 className={cx('introduce-title')}>
                                        <div className={cx('introduce-icon')}>{item.icon}</div> {item.title}
                                    </h3>
                                    <h5 className={cx('introduce-info')}>{item.content}</h5>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>
            </section>
            {/* LEVEL SELECT SECTION */}
            <section className={cx('levelSelection-section')}>
                <Row className={cx('g-0')}>
                    <Col xs={12} lg={6}>
                        <div className={cx('levelSelection-img')}>
                            <Image src={HOME_DATA.learning.left.image} />
                            <div className={cx('img-overlay')}></div>
                            <div className={cx('levelSelection-content')}>
                                <h1 className={cx('levelSelection-title')}>{HOME_DATA.learning.left.title}</h1>
                                <h3 className={cx('levelSelection-subtitle')}>{HOME_DATA.learning.left.subTitle}</h3>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} lg={6}>
                        <div className={cx('levelSelection-img', 'reflect')}>
                            <div className={cx('img-overlay')}></div>
                            <Image src={HOME_DATA.learning.right.image} />
                            <div className={cx('levelSelection-content')}>
                                <h1 className={cx('levelSelection-title')}>{HOME_DATA.learning.right.title}</h1>
                                <h3 className={cx('levelSelection-subtitle')}>{HOME_DATA.learning.right.subTitle}</h3>
                            </div>
                        </div>
                    </Col>
                </Row>
            </section>
            {/* TYPICAL COURSE SECTION */}
            <section className={cx('course-section')}>
                <h1 className={cx('section-title')}>{HOME_DATA.courses[0].title}</h1>
                <Slide numItemPerSlide={4} thumbSize={10}>
                    {HOME_DATA.courses[0].items.map((item, index) => (
                        <CourseItem key={index} data={item} />
                    ))}
                </Slide>
            </section>
            {/* QUICK COURSE SECTION */}
            <section className={cx('course-section')}>
                <h1 className={cx('section-title')}>{HOME_DATA.courses[1].title}</h1>
                <Slide numItemPerSlide={4} thumbSize={10}>
                    {HOME_DATA.courses[1].items.map((item, index) => (
                        <CourseItem key={index} data={item} />
                    ))}
                </Slide>
            </section>
            {/* MENTOR SECTION */}
            <section className={cx('mentor-section')}>
                <h1 className={cx('section-title')}>{HOME_DATA.mentors.title}</h1>
                <Slide space={30} numItemPerSlide={4} thumbSize={10}>
                    {HOME_DATA.mentors.items.map((item, index) => (
                        <MentorItem key={index} data={item} />
                    ))}
                </Slide>
            </section>
            {/* ROAD SECTION */}
            <section
                style={{ background: `url('${HOME_DATA.road.image}') center / cover no-repeat ` }}
                className={cx('road-section')}
            >
                <div className={cx('road-content')}>
                    <h1 className={cx('road-title')}>{HOME_DATA.road.title}</h1>
                    <h1 className={cx('section-title')}>{HOME_DATA.road.caption}</h1>
                    <div className={cx('aboutUs-actions')}>
                        <Button
                            onClick={() => navigate(config.routes.course)}
                            type="primary"
                            className={cx('primary-custom-btn', 'road-btn')}
                        >
                            Danh sách khoá học
                        </Button>
                        <Button
                            target="_blank"
                            href={HOME_DATA.about.linkFb}
                            type="primary"
                            className={cx('primary-custom-btn', 'road-btn')}
                        >
                            Tư vấn lộ trình
                        </Button>
                    </div>
                </div>
            </section>
            {/* PARTNER SECTION */}
            <section className={cx('partner-section')}>
                <div className={cx('partner-content')}>
                    <h1 className={cx('section-title', 'partner-title')}>{HOME_DATA.logos.title}</h1>
                    <Slide
                        breakpoints={{
                            767: {
                                slidesPerView: 4,
                                slidesPerGroup: 4,
                            },
                        }}
                        autoPlay
                        space={30}
                        numItemPerSlide={4}
                        numTransitionItem={4}
                        navigation={false}
                        loop
                    >
                        {HOME_DATA.logos.items.map((item, index) => (
                            <Image className={cx('partner-img')} key={index} src={item} />
                        ))}
                    </Slide>
                </div>
            </section>
        </div>
    );
}

export default Home;
