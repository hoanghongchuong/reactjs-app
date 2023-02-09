import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageNotFound from '~/pages/not_found/PageNotFound';
import AdminLayout from '~/components/Layout/admin_layout/AdminLayout';
import Login from '~/pages/Login';
import Home from '~/pages/Home';
import DefaultLayout from '~/components/Layout/DefaultLayout';
import Profile from '~/pages/Profile';
import Following from '~/pages/Following';
import { routesAdminPrivate } from '~/routes';

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
                        {routesAdminPrivate}
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
