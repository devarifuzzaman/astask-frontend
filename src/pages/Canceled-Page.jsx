import React, { Fragment, Suspense, lazy } from 'react';
import Layout from '../components/Layout/Layout';
import LazyLoader from '../components/Layout/LazyLoader';
const Canceled = lazy(() => import('../components/Canceled/Canceled'));

const CanceledPage = () => {
 return (
  <Fragment>
   <Layout>
    <Suspense fallback={<LazyLoader />}>
     <Canceled />
    </Suspense>

   </Layout>
  </Fragment>
 );
};

export default CanceledPage;