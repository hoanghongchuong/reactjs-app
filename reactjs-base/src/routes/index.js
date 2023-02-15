import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Login from '~/pages/login';
import Profile from '~/pages/Profile';
import { HeaderOnly } from '~/components/Layout';
import DashboardIndex from '~/pages/admin/dashboard/DashboardIndex';
import FormIndex from '~/pages/admin/form/FormIndex';
// import Table from '~/pages/admin/form/Table';
import Button from '~/pages/admin/form/Button';
import { Route } from 'react-router-dom';
// import DefaultLayout from '~/components/Layout/DefaultLayout';
// import { Fragment } from 'react';
// import AdminLayout from '~/components/Layout/admin_layout/AdminLayout';
import Analytics from '~/pages/admin/analytics/Analytics';
import Customer from '~/pages/admin/customer/Customer';
import PageWrapperAdmin from '~/components/Layout/admin_layout/PageWrapperAdmin';

const publicRoutes = [
    { path: '/login', component: Login, layout: null },
    { path: '/', component: Home },
    { path: '/profile', component: Profile, layout: HeaderOnly },
    { path: '/following', component: Following },
];

const privateRoutes = [];

const adminPrivateRoute = [
    {
        index: true,
        path: '/admin',
        element: <DashboardIndex />,
        state: 'home',
        sidebarProps: {
            displayText: 'Dashboard index',
            icon: 'bx bxs-dashboard',
        },
    },
    {
        path: 'analytics',
        element: <Analytics />,
        state: 'admin.analytics',
        sidebarProps: {
            displayText: 'Analytics',
            icon: 'bx bxs-report',
        },
    },
    {
        path: 'customer',
        element: <Customer />,
        state: 'customer',
        sidebarProps: {
            displayText: 'Customer',
            icon: 'bx bxs-user-plus',
        },
    },
    {
        path: 'form',
        element: <FormIndex />,
        state: 'form',
        sidebarProps: {
            displayText: 'FormIndex',
            icon: 'bx bx-table',
        },
        child: [
            {
                path: '/admin/form/button',
                element: <Button />,
                state: 'form.button',
                sidebarProps: {
                    displayText: 'Button',
                },
            },
        ],
    },
];

const generateRoute = (routes) => {
    return routes.map((route, index) => {
        return (
            route.index ? (
                <Route
                    index
                    path={route.path}
                    element={<PageWrapperAdmin state={route.state}>
                        {route.element}
                    </PageWrapperAdmin>}
                    key={index}
                />
            ) : (

                <Route
                    path={route.path}
                    element={<PageWrapperAdmin state={route.child ? undefined : route.state}>
                        {route.element}
                    </PageWrapperAdmin>}
                    key={index}>
                    {route.child && generateRoute(route.child)}
                </Route>
            )
        );
    });
};

export { publicRoutes, privateRoutes, adminPrivateRoute };

export const routesAdminPrivate = generateRoute(adminPrivateRoute);
