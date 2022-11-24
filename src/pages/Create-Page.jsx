import React, { Fragment, Suspense, lazy } from 'react';
import Layout from '../components/Layout/Layout';
import LazyLoader from '../components/Layout/LazyLoader';
const Create = lazy(() => import('../components/Create/Create'));

const CreatePage = () => {
 return (
  <Fragment>
   <Layout>
    <Suspense fallback={<LazyLoader />}>
     <Create />
    </Suspense>
   </Layout>
  </Fragment>
 );
};

export default CreatePage;