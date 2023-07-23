import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import Image from '../../components/Image';
import images from '../../assets/images';
import { Col, Row } from 'react-bootstrap';
import { useContext, useEffect, useState } from 'react';
import { StoreContext, actions } from '../../store';
import { Button } from 'antd';
import Slide from '../../components/Slide';
const cx = classNames.bind(styles);

function Home() {
    const [state, dispatch] = useContext(StoreContext);
    const introduceItems = state.introduceItems;
    return (
        <div className={cx('wrapper')}>
            <section className={cx('banner-section')}>
                <div className={cx('banner-content')}>
                    <h3 className={cx('banner-title')}>Khởi đầu sự nghiệp của bạn</h3>
                    <h1 className={cx('banner-subtitle')}>Trở thành lập trình viên chuyên nghiệp tại BSMART</h1>
                    <h4 className={cx('banner-info')}>
                        Với đội ngũ Mentor có nhiều năm kinh nghiệm giảng dạy cùng các khoá học chất lượng. BSMART sẽ
                        giúp các bạn có định hướng về nghề nghiệp và phát triển bản thân trên con đường trở thành lập
                        trình viên chuyên nghiệp
                    </h4>
                    <Button type="primary" className={cx('primary-custom-btn')}>
                        Xem khoá học
                    </Button>
                </div>
            </section>
            <section className={cx('aboutUs-section')}>
                <div className={cx('aboutUs-content')}>
                    <h1 className={cx('section-title')}>Về chúng tôi</h1>
                    <Row className={cx('g-6')}>
                        <Col>
                            <div className={cx('aboutUs-leftSide')}>
                                <h4 className={cx('aboutUs-info')}>
                                    BSMART là một đội ngũ mentor tận tâm và đam mê trong việc mang đến những khoá học
                                    lập trình chất lượng nhất cho cộng đồng học viên đam mê công nghệ thông tin. Chúng
                                    tôi tin rằng việc đào tạo và phát triển tư duy lập trình không chỉ giúp bạn xây dựng
                                    những ứng dụng thực tế, mà còn mở ra cơ hội mới và định hướng tương lai. Với sứ mệnh
                                    "Khám phá tài năng thông qua mã nguồn," chúng tôi cam kết đồng hành cùng học viên
                                    trên hành trình khám phá, học hỏi và phát triển kỹ năng lập trình vững mạnh. Đội ngũ
                                    mentor của chúng tôi không chỉ là những chuyên gia hàng đầu về lập trình, mà còn là
                                    những người yêu thích truyền đạt kiến thức và đam mê giúp đỡ người khác thành công.
                                </h4>
                                <div className={cx('aboutUs-actions')}>
                                    <Button type="primary" className={cx('primary-custom-btn')}>
                                        Xem khoá học
                                    </Button>
                                    <Button type="primary" className={cx('primary-custom-btn')}>
                                        Hỗ trợ tư vấn
                                    </Button>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <Image className={cx('aboutUs-img')} src={images.banner2} />
                        </Col>
                    </Row>
                </div>
            </section>
            <section className={cx('introduce-section')}>
                <h1 className={cx('section-title')}>Điểm ưu việt tại BSmart</h1>
                <div className={cx('introduce-body')}>
                    <Row className={cx('g-6')}>
                        {introduceItems.map((item, index) => (
                            <Col md={4} key={index}>
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
            <section className={cx('levelSelection-section')}>
                <Row className={cx('g-0')}>
                    <Col md={6}>
                        <div className={cx('levelSelection-img')}>
                            <Image src={images.banner3} />
                            <div className={cx('img-overlay')}></div>
                            <div className={cx('levelSelection-content')}>
                                <h1 className={cx('levelSelection-title')}>Trái ngành</h1>
                                <h3 className={cx('levelSelection-subtitle')}>From Zero to Hero</h3>
                            </div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className={cx('levelSelection-img', 'reflect')}>
                            <div className={cx('img-overlay')}></div>
                            <Image src={images.banner4} />
                            <div className={cx('levelSelection-content')}>
                                <h1 className={cx('levelSelection-title')}>Đã biết lập trình</h1>
                                <h3 className={cx('levelSelection-subtitle')}>
                                    Đã có kiến thức tư duy lập trình và OOP
                                </h3>
                            </div>
                        </div>
                    </Col>
                </Row>
            </section>
            <section className={cx('course-section')}>
                <h1 className={cx('section-title')}>Khoá học tiêu biểu</h1>
                <Slide numItemPer={2}>
                    <h2>hehe</h2>
                    <h2>hehe</h2>
                    <h2>hehe</h2>
                    <h2>hehe</h2>
                    <h2>hehe</h2>
                </Slide>
            </section>
        </div>
    );
}

export default Home;
