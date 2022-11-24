import React, { Fragment, Suspense, lazy } from 'react';
import LazyLoader from '../components/Layout/LazyLoader';
const Login = lazy(() => import('../components/Login/Login'));


const LoginPage = () => {
 return (
  <Fragment>
   <Suspense fallback={<LazyLoader />}>
    <Login />
   </Suspense>
  </Fragment>

 );
};

export default LoginPage; 