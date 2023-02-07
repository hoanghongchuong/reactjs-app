import React from 'react';
import {Outlet} from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './AdminLayout.module.scss';
import Sidebar from '~/components/Layout/admin_layout/common/sidebar/Sidebar';
import TopNav from '~/components/Layout/admin_layout/common/topnav/TopNav';

const cx = classNames.bind(styles);

function AdminLayout() {
    return (
        <div className={cx('admin-layout')}>
            <Sidebar />
            <div className={cx('layout-content')}>
                <TopNav />
                <Outlet />
            </div>
        </div>
    );
}

export default AdminLayout;