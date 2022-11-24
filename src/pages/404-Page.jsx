import React, { Fragment, Suspense, lazy } from 'react';
import Layout from '../components/Layout/Layout';
import LazyLoader from '../components/Layout/LazyLoader'
const NotFound = lazy(() => import('../components/NotFound/NotFound'));


const Page404 = () => {
 return (

  <Fragment >
   <Layout>
    <Suspense fallback={<LazyLoader />}>
     <NotFound />
    </Suspense>

   </Layout>
  </Fragment >

 );
};

export default Page404;