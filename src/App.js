import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { privateRoutes, publicRoutes } from './Routes';
import DefaultLayout from './layout/DefaultLayout';
import { Fragment, useEffect, useState } from 'react';
import config from './config';
import dayjs from 'dayjs';
import LocalStorageManager from './utils/LocalStorageManager';
import Home from './Pages/Home/Home';

function App() {
    return (
        <div className="App">
            <Routes>
                {publicRoutes.map((route, index) => {
                    let Layout = DefaultLayout;
                    if (route.layout) {
                        Layout = route.layout;
                    } else if (route.layout === null) {
                        Layout = Fragment;
                    }
                    const Element = route.component;
                    return (
                        <Route
                            exact
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    <Element />
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
        </div>
    );
}

export default App;
