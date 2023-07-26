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
    star: 4.5,
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
            name: '.NET Core API',
            level: 1,
            mentor: 'Trần Hoà Hiệp',
            NumStudent: 92,
            description:
                ' .NET Core API là một framework được tạo ra bởi Microsoft để xây dựng các ứng dụng web API và microservices microservices microservices',
            price: 1500000,
            lessons: 28,
            type: 'Offline',
            star: 4.5,
            field: 'Database',
        },
        {
            courseImg: images.phpCourse,
            mentorImg: images.mentor1,
            name: 'Khoá học Php',
            level: 1,
            mentor: 'Trần Hoà Nghĩa',
            NumStudent: 58,
            description:
                ' Reactjs là một framework được tạo ra bởi Microsoft để xây dựng các ứng dụng web API và microservices microservices microservices',
            price: 2500000,
            lessons: 24,
            type: 'Online',
            star: 3.5,
            field: 'Back-End',
        },
        {
            courseImg: images.frontendCourse,
            mentorImg: images.mentor3,
            name: 'Khoá học frontend',
            level: 2,
            mentor: 'Trần Hoà Hiệp',
            NumStudent: 77,
            description:
                ' .NET Core API là một framework được tạo ra bởi Microsoft để xây dựng các ứng dụng web API và microservices microservices microservices',
            price: 3400000,
            lessons: 25,
            type: 'Offline',
            star: 4,
            field: 'Front-End',
        },
        {
            courseImg: images.devopsCourse,
            mentorImg: images.mentor2,
            name: 'Khoá học DevOps',
            level: 3,
            mentor: 'Trần Hoà Hiệp',
            NumStudent: 84,
            description:
                ' DevOps là một framework được tạo ra bởi Microsoft để xây dựng các ứng dụng web API và microservices microservices microservices',
            price: 3000000,
            lessons: 14,
            type: 'Online',
            star: 5,
            field: 'Database',
        },
        {
            courseImg: images.frontendCourse,
            mentorImg: images.mentor3,
            name: 'Khoá học frontend 3',
            level: 4,
            mentor: 'Trần Hoà Hiệp',
            NumStudent: 112,
            description:
                ' .NET Core API là một framework được tạo ra bởi Microsoft để xây dựng các ứng dụng web API và microservices microservices microservices',
            price: 1000000,
            lessons: 22,
            type: 'Offline',
            star: 5,
            field: 'Front-End',
        },
        {
            courseImg: images.dotMVCCourse,
            mentorImg: images.mentor2,
            name: 'Khoá học DOT NET MVC',
            level: 4,
            mentor: 'Trần Hoà Hưng',
            NumStudent: 95,
            description:
                ' DOT NET MVC là một framework được tạo ra bởi Microsoft để xây dựng các ứng dụng web API và microservices microservices microservices',
            price: 2000000,
            lessons: 20,
            type: 'Online',
            star: 5,
            field: 'Back-End',
        },
        {
            courseImg: images.dotMVCCourse,
            mentorImg: images.mentor2,
            name: 'Khoá học DOT NET MVC 2',
            level: 3,
            mentor: 'Trần Hoà Hưng',
            NumStudent: 65,
            description:
                ' DOT NET MVC là một framework được tạo ra bởi Microsoft để xây dựng các ứng dụng web API và microservices microservices microservices',
            price: 1200000,
            lessons: 24,
            type: 'Online',
            star: 5,
            field: 'Front-End',
        },
        {
            courseImg: images.frontendCourse,
            mentorImg: images.mentor3,
            name: 'Khoá học frontend 2',
            level: 1,
            mentor: 'Trần Hoà Hiệp2',
            NumStudent: 89,
            description:
                ' .NET Core API là một framework được tạo ra bởi Microsoft để xây dựng các ứng dụng web API và microservices microservices microservices',
            price: 2700000,
            lessons: 25,
            type: 'Online',
            star: 3.5,
            field: 'Front-End',
        },
        {
            courseImg: images.devopsCourse,
            mentorImg: images.mentor2,
            name: 'Khoá học Back end Expressjs',
            level: 2,
            mentor: 'Trần Hoà Hiệp',
            NumStudent: 67,
            description:
                ' Expressjs là một framework được tạo ra bởi Microsoft để xây dựng các ứng dụng web API và microservices microservices microservices',
            price: 1200000,
            lessons: 22,
            type: 'Offline',
            star: 4.5,
            field: 'Back-End',
        },
    ],
};
export default COURSE_PAGE_DATA;
