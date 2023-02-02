import React from 'react';
import {Outlet} from 'react-router-dom'

function AdminLayout({ child }) {
    return (
        <div className="container">
            <div className="content">
                {child}
            </div>
            <Outlet />
        </div>
    );
}

export default AdminLayout;