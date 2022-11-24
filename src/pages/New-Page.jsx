import React, { Fragment, Suspense, lazy } from 'react';
import Layout from '../components/Layout/Layout';
import LazyLoader from '../components/Layout/LazyLoader';
const New = lazy(() => import('../components/New/New'));


const NewPage = () => {
 return (
  <Fragment>
   <Layout>
    <Suspense fallback={<LazyLoader />}>
     <New />
    </Suspense>
   </Layout>
  </Fragment>
 );
};

export default NewPage;