import { Outlet } from 'react-router-dom';

import Header from '@components/ui/Header/Header';
import SideBar from '@components/ui/SideBar/SideBar';
// import ScrollToTop from '@helpers/ScrollToTop/ScrollToTop.jsx';

const MainLayout = () => {
    return (
        <>
            {/* <ScrollToTop /> */}
            {/* это заменить потом */}
            <Header />
            <SideBar />
            <main className="content">
                <Outlet />
            </main>
            {/* <Footer /> */}
        </>
    );
};

export default MainLayout;
