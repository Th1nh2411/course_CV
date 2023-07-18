import Home from '../Pages/Home';
import config from '../config';

export const privateRoutes = [];
export const publicRoutes = [{ path: config.routes.home, component: Home }];
