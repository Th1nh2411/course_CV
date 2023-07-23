import classNames from 'classnames/bind';
import { useEffect, useReducer } from 'react';
import UserContext from './Context';
import reducer from './reducer';
import { actions } from '.';
import LocalStorageManager from '../utils/LocalStorageManager';
import { FaGripfire } from 'react-icons/fa';
import { MdSettingsSuggest } from 'react-icons/md';
import { HiQrcode, HiUserGroup } from 'react-icons/hi';
import { BiCheckCircle, BiMoneyWithdraw } from 'react-icons/bi';
import images from '../assets/images';
const courseItems = [
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
];
const mentorItems = [
    {
        name: 'Đỗ Minh Quân',
        img: images.mentor1,
        info: 'Tôi tên là Đỗ Minh Quân. Một Lập trình viên với đam mê mãnh liệt về công nghệ thông tin. Tôi đã làm việc trong ngành này trong một vài năm và có kinh nghiệm làm việc đáng kể',
    },
    {
        name: 'Hà Anh Tài',
        img: images.mentor2,
        info: 'Tôi tên là Hà Anh Tài. Một Lập trình viên với đam mê mãnh liệt về công nghệ thông tin. Tôi đã làm việc trong ngành này trong một vài năm và có kinh nghiệm làm việc đáng kể',
    },
    {
        name: 'Lê Đức Tân',
        img: images.mentor3,
        info: 'Tôi tên là Lê Đức Tân. Một Lập trình viên với đam mê mãnh liệt về công nghệ thông tin. Tôi đã làm việc trong ngành này trong một vài năm và có kinh nghiệm làm việc đáng kể',
    },
    {
        name: 'Lê Mậu Đức',
        img: images.mentor4,
        info: 'Tôi tên là Lê Mậu Đức. Một Lập trình viên với đam mê mãnh liệt về công nghệ thông tin. Tôi đã làm việc trong ngành này trong một vài năm và có kinh nghiệm làm việc đáng kể',
    },
    {
        name: 'Trần Nhật Cường',
        img: images.mentor5,
        info: 'Tôi tên là Trần Nhật Cường. Một Lập trình viên với đam mê mãnh liệt về công nghệ thông tin. Tôi đã làm việc trong ngành này trong một vài năm và có kinh nghiệm làm việc đáng kể',
    },
    {
        name: 'Trần Hoà Hiệp',
        img: images.mentor6,
        info: 'Tôi tên là Trần Hoà Hiệp. Một Lập trình viên với đam mê mãnh liệt về công nghệ thông tin. Tôi đã làm việc trong ngành này trong một vài năm và có kinh nghiệm làm việc đáng kể',
    },
    {
        name: 'Tô Lý Hữu Nhân',
        img: images.mentor7,
        info: 'Tôi tên là Tô Lý Hữu Nhân. Một Lập trình viên với đam mê mãnh liệt về công nghệ thông tin. Tôi đã làm việc trong ngành này trong một vài năm và có kinh nghiệm làm việc đáng kể',
    },
    {
        name: 'Nguyễn Thị Trà My',
        img: images.mentor8,
        info: 'Tôi tên là Nguyễn Thị Trà My. Một Lập trình viên với đam mê mãnh liệt về công nghệ thông tin. Tôi đã làm việc trong ngành này trong một vài năm và có kinh nghiệm làm việc đáng kể',
    },
];
const introduceItems = [
    {
        title: 'Học theo lộ trình, có định hướng',
        content:
            'BSmart sẽ định hướng có đưa ra các lộ trình học tập nhằm phát triển năng lực và niềm đam mê lập trình của bạn để có việc ngay sau khi học.',
        icon: <BiCheckCircle />,
    },
    {
        title: 'Nền tảng cốt lõi trong lập trình',
        content:
            'Chúng tôi cam kết tối đa hóa tiềm năng lập trình của bạn thông qua các lộ trình học tập tùy chỉnh, giúp bạn trang bị những kỹ năng cần thiết để đáp ứng các yêu cầu công việc hiện đại và đa dạng.',
        icon: <MdSettingsSuggest />,
    },
    {
        title: 'Mãi giũa bạn qua thực tế',
        content:
            'Với tập trung vào việc thực hành và ứng dụng kiến thức, chúng tôi giúp bạn xây dựng portfolio ấn tượng, từ đó tăng cơ hội được tuyển dụng bởi các doanh nghiệp công nghệ hàng đầu.',
        icon: <FaGripfire />,
    },
    {
        title: 'Mentor tận tâm',
        content:
            'BSMART không chỉ là một trung tâm đào tạo, mà còn là cầu nối giữa những ước mơ lập trình viên và thị trường lao động sôi động, giúp bạn chạm tới thành công trong sự nghiệp lập trình.',
        icon: <HiUserGroup />,
    },
    {
        title: 'Công nghệ mới, thực tế',
        content:
            'Chúng tôi tự hào với những chương trình học tập mang tính thực tiễn, đáp ứng nhu cầu ngành công nghiệp, giúp bạn trở thành những lập trình viên chuyên nghiệp',
        icon: <HiQrcode />,
    },
    {
        title: 'Trao tay chìa khoá thành công',
        content:
            'BSMART không chỉ là nơi cung cấp các khoá học lập trình, mà còn đồng hành và định hướng bạn trên con đường phát triển năng lực và đam mê lập trình.',
        icon: <BiMoneyWithdraw />,
    },
];
function Provider({ children }) {
    const localStorageManager = LocalStorageManager.getInstance();

    const initState = {
        toast: { show: false, content: '', title: '' },
        courseItems: courseItems,
        mentorItems: mentorItems,
        introduceItems: introduceItems,
    };
    const [state, dispatch] = useReducer(reducer, initState);

    return <UserContext.Provider value={[state, dispatch]}>{children}</UserContext.Provider>;
}

export default Provider;
