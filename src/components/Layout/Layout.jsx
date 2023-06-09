import { AppBar, Loader } from 'components';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;