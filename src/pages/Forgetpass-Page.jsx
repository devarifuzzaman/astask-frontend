import React, { Fragment, Suspense, lazy } from 'react';
import Layout from '../components/Layout/Layout';
import LazyLoader from '../components/Layout/LazyLoader';
const ForgetPass = lazy(() => import('../components/ForgetPass/ForgetPass'));

const ForgetpassPage = () => {
 return (
  <Fragment>
   <Layout>
    <Suspense fallback={<LazyLoader />}>

     <ForgetPass />

    </Suspense>

   </Layout>
  </Fragment>
 );
};

export default ForgetpassPage;