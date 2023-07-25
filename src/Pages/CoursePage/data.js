import styles from './CoursePage.module.scss';
import classNames from 'classnames/bind';

import config from '../../config';
import { BsArrowDownShort, BsCalendar3, BsFillPersonFill } from 'react-icons/bs';
import images from '../../assets/images';
import { Link } from 'react-router-dom';
import Image from '../../components/Image/Image';
const cx = classNames.bind(styles);
const COURSE_PAGE_DATA = {
    breadcrumbItems: [
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
    ],
    formLearnOptions: [
        { label: 'Online', value: 'Online' },
        { label: 'Offline', value: 'Offline' },
    ],
    levelOptions: [
        {
            label: (
                <div className={cx('level-label')}>
                    Dễ
                    <Image className={cx('level-icon')} src={images.courseLevel1} />
                </div>
            ),
            value: 1,
        },
        {
            label: (
                <div className={cx('level-label')}>
                    Trung bình
                    <Image className={cx('level-icon')} src={images.courseLevel2} />
                </div>
            ),
            value: 2,
        },
        {
            label: (
                <div className={cx('level-label')}>
                    Khó
                    <Image className={cx('level-icon')} src={images.courseLevel3} />
                </div>
            ),
            value: 3,
        },
        {
            label: (
                <div className={cx('level-label')}>
                    Cực khó
                    <Image className={cx('level-icon')} src={images.courseLevel4} />
                </div>
            ),
            value: 4,
        },
    ],
    fieldOptions: [
        { label: 'Back-End', value: 'Back-End' },
        { label: 'Front-End', value: 'Front-End' },
        { label: 'Database', value: 'Database' },
        { label: 'Cấp tốc', value: 'Cấp tốc' },
        { label: 'STEM', value: 'STEM' },
        { label: 'Other', value: 'Other' },
    ],

    // CourseList Data
    selectFilters: [
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
    ],
    courseItems: [
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
    ],
};
export default COURSE_PAGE_DATA;
