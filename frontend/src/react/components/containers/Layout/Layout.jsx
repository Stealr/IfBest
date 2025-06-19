import { Outlet } from 'react-router-dom';

// import Header from '../ui/header/Header';
// import Footer from '../ui/footer/Footer';
// import ScrollToTop from '@helpers/ScrollToTop/ScrollToTop.jsx';

const Layout = () => {
  return (
    <>
      {/* <Header /> */}
      {/* <ScrollToTop /> */}
      <main className='main'>
        <Outlet /> 
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;