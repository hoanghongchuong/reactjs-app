import React from 'react';
// import classNames from 'classnames/bind';
import './Sidebar.scss';
import logo from '~/assets/images/admin_logo.png';
import SidebarItem from '~/components/Layout/admin_layout/common/sidebar/SidebarItem';
// import { siteBarItem } from '~/configs/sidebar_items';
import { Link } from 'react-router-dom';
import { adminPrivateRoute } from '~/routes';

// const cx = classNames.bind(styles);

function Sidebar(props) {
    return (
        <div className={('sidebar')}>
            <div className={('logo')}>
                <Link to='/admin'>
                    <img src={logo} alt='' />
                </Link>
            </div>

            {adminPrivateRoute.map((route, index) => {
                return (
                    <SidebarItem item={route} key={index} />
                )
            })}
        </div>
    );
}

export default Sidebar;