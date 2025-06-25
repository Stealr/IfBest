import { Outlet } from 'react-router-dom';

// import Header from '@components/ui/Header/Header';
import SideBar from '@components/ui/SideBar/SideBar';
// import ScrollToTop from '@helpers/ScrollToTop/ScrollToTop.jsx';

const Layout = () => {
    return (
        <>
            {/* <Header /> */}
            {/* <ScrollToTop /> */}
            {/* это заменить потом */}
            <div className="Header" style={{ gridArea: 'header' }}>
                header
            </div>
            <SideBar />
            <main className="content">
                <Outlet />
            </main>
            {/* <Footer /> */}
        </>
    );
};

export default Layout;
