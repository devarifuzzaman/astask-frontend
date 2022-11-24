import React, { Fragment, Suspense, lazy } from 'react';
import LazyLoader from '../components/Layout/LazyLoader';
const Registration = lazy(() => import('../components/Registration/Registration'));


const RegistrationPage = () => {
 return (

  <Fragment>
   <Suspense fallback={<LazyLoader />}>

    <Registration />

   </Suspense>

  </Fragment>


 );
};

export default RegistrationPage;