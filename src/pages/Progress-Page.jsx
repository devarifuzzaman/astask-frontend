import React, { Fragment, Suspense, lazy } from 'react';
import Layout from '../components/Layout/Layout';
import LazyLoader from '../components/Layout/LazyLoader';
const Progress = lazy(() => import('../components/Progress/Progress'));

const ProgressPage = () => {
 return (
  <Fragment>
   <Layout>
    <Suspense fallback={<LazyLoader />}>
     <Progress />
    </Suspense>
   </Layout>
  </Fragment>
 );
};

export default ProgressPage;