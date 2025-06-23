import { Outlet } from 'react-router-dom';

import Header from '@components/ui/Header/Header';
// import AsideBar from '@components/ui/AsideBar/AsideBar';
// import ScrollToTop from '@helpers/ScrollToTop/ScrollToTop.jsx';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;