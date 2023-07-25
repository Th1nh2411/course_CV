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

function Provider({ children }) {
    const localStorageManager = LocalStorageManager.getInstance();

    const initState = {
        toast: { show: false, content: '', title: '' },
    };
    const [state, dispatch] = useReducer(reducer, initState);

    return <UserContext.Provider value={[state, dispatch]}>{children}</UserContext.Provider>;
}

export default Provider;
