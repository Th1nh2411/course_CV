import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import styles from './Slide.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function Slide({ children, numItemPerSlide = 1, className, autoPlay = false, numTransitionItem }) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const childrenArray = React.Children.toArray(children);
    const thumbsPerView = Math.ceil(childrenArray.length / numItemPerSlide);
    return (
        <>
            <Swiper
                slidesPerView={numItemPerSlide}
                spaceBetween={50}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Pagination, Navigation, Autoplay]}
                speed={1500}
                className={cx('swiper')}
            >
                {childrenArray.map((item, index) => (
                    <SwiperSlide key={index}>{item}</SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}

export default Slide;
