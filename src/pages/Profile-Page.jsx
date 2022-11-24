import React, { Fragment, Suspense, lazy } from 'react';
import Layout from '../components/Layout/Layout';
import LazyLoader from '../components/Layout/LazyLoader';
const Profile = lazy(() => import('../components/Profile/Profile'));

const ProfilePage = () => {
 return (
  <Fragment>
   <Layout>
    <Suspense fallback={<LazyLoader />}>
     <Profile />
    </Suspense>
   </Layout>
  </Fragment>
 );
};

export default ProfilePage;