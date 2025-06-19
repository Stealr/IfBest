import { Outlet } from 'react-router-dom';

// import Header from '@components/ui/Header/Header';
// import AsideBar from '@components/ui/AsideBar/AsideBar';
// import ScrollToTop from '@helpers/ScrollToTop/ScrollToTop.jsx';

const Layout = () => {
  return (
    <>
      {/* <ScrollToTop /> */}
      {/* <Header /> */}
      {/* <AsideBar /> */}
      
      {/* это заменить потом */}
      <div className='Header' style={{gridArea: 'header'}}>header</div>
      <div className='sidebar' style={{gridArea: 'sidebar'}}>sidebar</div>
      <main className='content'>
        <Outlet /> 
      </main>
    </>
  );
};

export default Layout;