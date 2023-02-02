import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Login from '~/pages/Login';
import Profile from '~/pages/Profile';
import { HeaderOnly } from '~/components/Layout';
import DashboardIndex from '~/pages/admin/dashboard/DashboardIndex';
import FormIndex from '~/pages/admin/form/FormIndex';
import Table from '~/pages/admin/form/Table';
import Button from '~/pages/admin/form/Button';
import { Route } from 'react-router-dom';
import DefaultLayout from '~/components/Layout/DefaultLayout';
import { Fragment } from 'react';
import AdminLayout from '~/components/Layout/admin_layout/AdminLayout';

const publicRoutes = [
    { path: '/login', component: Login, layout: null },
    { path: '/', component: Home },
    { path: '/profile', component: Profile, layout: HeaderOnly },
    { path: '/following', component: Following },
];

const privateRoutes = [];

const appRoutes = [
    { path: '/login', component: Login, layout: null },
    { path: '/', component: Home },
    { path: '/profile', component: Profile, layout: HeaderOnly },
    { path: '/following', component: Following },
    {
        path: '/admin',
        component: DashboardIndex,
        layout: AdminLayout,
        state: 'dashboard',
        sidebarProps: {
            displayText: 'dashboard',
            icon: '<i class="bx bxs-dashboard"></i>',
        },
        child: [
            {
                index: true,
                component: DashboardIndex,
                state: 'dashboard.index',
            },
            {
                path: 'form',
                component: FormIndex,
                state: 'form',
                sidebarProps: {
                    displayText: 'Form',
                    icon: '<i class="bx bxs-dashboard"></i>',
                },
                child: [
                    // {
                    //     path: 'table',
                    //     component: Table,
                    //     state: 'form.table',
                    //     sidebarProps: {
                    //         displayText: 'Table',
                    //     },
                    // },
                    {
                        path: 'button',
                        component: Button,
                        state: 'form.button',
                        sidebarProps: {
                            displayText: 'Button',
                        },
                    },
                ],
            },
            {
                path: 'table',
                component: Table,
                state: 'admin.table',
                sidebarProps: {
                    displayText: 'Table',
                    icon: '<i class="bx bx-table"></i>'
                }
            }
        ],
    },
];

const generateRoute = (routes) => {
    return routes.map((route, index) => {
        const Page = route.component;
        let Layout = DefaultLayout;
        if (route.layout) {
            Layout = route.layout;
        } else if (route.layout === null) {
            Layout = Fragment;
        }
        return (
            route.index ? (
                <Route index path={route.path} element={<Layout><Page /></Layout>} key={index} />
            ) : (

                <Route path={route.path} element={<Layout><Page /></Layout>} key={index}>
                    {route.child && generateRoute(route.child)}
                </Route>
            )
        )
    });
};

export { publicRoutes, privateRoutes, appRoutes };

export const routes = generateRoute(appRoutes);
