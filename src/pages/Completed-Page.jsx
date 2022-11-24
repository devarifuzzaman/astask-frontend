import React, { Fragment, Suspense, lazy } from 'react';
import Layout from '../components/Layout/Layout';
import LazyLoader from '../components/Layout/LazyLoader';
const Completed = lazy(() => import('../components/Completed/Complete'));


const CompletedPage = () => {
 return (
  <Fragment>
   <Layout>
    <Suspense fallback={<LazyLoader />}>
     <Completed />
    </Suspense>
   </Layout>
  </Fragment>
 );
};

export default CompletedPage;