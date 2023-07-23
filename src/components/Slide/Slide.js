import styles from './Slide.module.scss';
import classNames from 'classnames/bind';
import React, { memo, useEffect, useState } from 'react';
import images from '../../assets/images';
import Modal from '../Modal/Modal';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Image from '../Image/Image';

const cx = classNames.bind(styles);
function splitArrayIntoChunks(arr, chunkSize) {
    const result = [];
    let i = 0;

    while (i < arr.length) {
        const chunk = arr.slice(i, i + chunkSize);
        result.push(chunk);
        i += chunkSize;
    }

    return result;
}
function Slide({ children, numItemPer = 1, className }) {
    const childrenArray = splitArrayIntoChunks(React.Children.toArray(children), numItemPer);
    const [sliderCheck, setSliderCheck] = useState(0);

    const handleClickChangeSlide = (value) => {
        setSliderCheck(value);
    };
    useEffect(() => {
        const slideInterval = setInterval(() => {
            setSliderCheck(sliderCheck + 1);
            if (sliderCheck === childrenArray.length - 1) {
                setSliderCheck(0);
            }
        }, 3000);
        return () => clearInterval(slideInterval);
    }, [sliderCheck]);

    return (
        <div className={cx('slider-wrapper', className)}>
            <div className={cx('slide-list')}>
                {childrenArray.map((slide, index) => (
                    <div
                        key={index}
                        className={cx('slide')}
                        src={slide}
                        style={index === 0 ? { marginLeft: sliderCheck * -100 + '%' } : {}}
                    >
                        {slide.map((item) => item)}
                    </div>
                ))}
            </div>
            <div className={cx('slide-dots')}>
                {childrenArray.map((slider, index) => (
                    <input
                        key={index}
                        onChange={() => handleClickChangeSlide(index)}
                        value={index}
                        checked={sliderCheck == index}
                        type="radio"
                        name="slide-dot"
                    />
                ))}
            </div>
            <div
                onClick={() => {
                    if (sliderCheck === 0) {
                        setSliderCheck(0);
                    } else {
                        setSliderCheck((prev) => prev - 1);
                    }
                }}
                className={cx('left-slide-btn')}
            >
                <FiChevronLeft />
            </div>
            <div
                onClick={() => {
                    if (sliderCheck === childrenArray.length) {
                        setSliderCheck(0);
                    } else {
                        setSliderCheck((prev) => prev + 1);
                    }
                }}
                className={cx('right-slide-btn')}
            >
                <FiChevronRight />
            </div>
        </div>
    );
}

export default Slide;