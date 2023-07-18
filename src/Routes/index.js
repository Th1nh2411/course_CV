import Home from '../Pages/Home';
import AboutUsPage from '../Pages/AboutUsPage';
import BlogPage from '../Pages/BlogPage';
import CoursePage from '../Pages/CoursePage';
import MentorPage from '../Pages/MentorPage';
import STEMCoursePage from '../Pages/STEMCoursePage';
import config from '../config';

export const privateRoutes = [];
export const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.aboutUs, component: AboutUsPage },
    { path: config.routes.STEMCourse, component: STEMCoursePage },
    { path: config.routes.course, component: CoursePage },
    { path: config.routes.mentor, component: MentorPage },
    { path: config.routes.blog, component: BlogPage },
];
