// import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageNotFound from '~/pages/not_found/PageNotFound';
import AdminLayout from '~/components/Layout/admin_layout/AdminLayout';
import DashboardIndex from '~/pages/admin/dashboard/DashboardIndex';
import FormIndex from '~/pages/admin/form/FormIndex';
import Table from '~/pages/admin/form/Table';
import Button from '~/pages/admin/form/Button';
import Login from '~/pages/Login';
import Home from '~/pages/Home';
import DefaultLayout from '~/components/Layout/DefaultLayout';
import Profile from '~/pages/Profile';
import Following from '~/pages/Following';
import Analytics from '~/pages/admin/analytics/Analytics';
import Customer from '~/pages/admin/customer/Customer';

function App() {
    return (
        <Router>
            <div className='App'>
                <Routes>
                    <Route path='/' element={<DefaultLayout><Home /></DefaultLayout>} />
                    <Route path='/profile' element={<DefaultLayout><Profile /></DefaultLayout>} />
                    <Route path='/following' element={<DefaultLayout><Following /></DefaultLayout>} />
                    <Route path='login' element={<Login />} />

                    <Route path='/admin' element={<AdminLayout />}>
                        <Route path='' element={<DashboardIndex />} />

                        <Route path='form' element={<FormIndex />}>
                            <Route path='button' element={<Button />} />
                        </Route>

                        <Route path='analytics' element={<Analytics />} />
                        <Route path='customer' element={<Customer />} />
                        <Route path='table' element={<Table />} />
                    </Route>

                    {/*{routes}*/}
                    {/*{publicRoutes.map((route, index) => {*/}
                    {/*    const Page = route.component;*/}
                    {/*    let Layout = DefaultLayout;*/}
                    {/*    if (route.layout) {*/}
                    {/*        Layout = route.layout;*/}
                    {/*    } else if (route.layout === null) {*/}
                    {/*        Layout = Fragment;*/}
                    {/*    }*/}

                    {/*    return (*/}
                    {/*        <Route*/}
                    {/*            key={index}*/}
                    {/*            path={route.path}*/}
                    {/*            element={*/}
                    {/*                <Layout>*/}
                    {/*                    <Page />*/}
                    {/*                </Layout>*/}
                    {/*            }*/}
                    {/*        />*/}
                    {/*    );*/}
                    {/*})}*/}

                    <Route path='*' element={<PageNotFound />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
