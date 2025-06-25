import { Outlet } from 'react-router-dom';


import SideBar from '@components/ui/SideBar/SideBar';
import SignInBtn from '@components/inputs/SignInBtn/SignInBtn';
// import ScrollToTop from '@helpers/ScrollToTop/ScrollToTop.jsx';

const Layout = () => {
    return (
        <>
            {/* <Header /> */}
            {/* <ScrollToTop /> */}
            {/* это заменить потом */}
            <SignInBtn />
            <SideBar />
            <main className="content">
                <Outlet />
            </main>
            {/* <Footer /> */}
        </>
    );
};

export default Layout;
