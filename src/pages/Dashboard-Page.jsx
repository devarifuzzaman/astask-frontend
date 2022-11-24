import React, { Fragment, Suspense, lazy } from 'react';
import Layout from '../components/Layout/Layout';
import LazyLoader from '../components/Layout/LazyLoader';
const Dashboard = lazy(() => import('../components/Dashboard/Dashboard'));

const DashboardPage = () => {
 return (
  <Fragment>
   <Layout>
    <Suspense fallback={<LazyLoader />}>
     <Dashboard />
    </Suspense>
   </Layout>

  </Fragment>


 );
};

export default DashboardPage;