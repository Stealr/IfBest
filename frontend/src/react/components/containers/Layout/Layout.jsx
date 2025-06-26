import { Outlet } from 'react-router-dom';


import SideBar from '@components/ui/SideBar/SideBar';
import SignInBtn from '@components/inputs/SignInBtn/SignInBtn';
import Header from '@components/ui/Header/Header';
import Tag from '@components/ui/Header/components/Tag/Tag';



// import ScrollToTop from '@helpers/ScrollToTop/ScrollToTop.jsx';

const Layout = () => {
    return (
        <>
            {/* <Header /> */}
            {/* <ScrollToTop /> */}
            {/* это заменить потом */}
            <></>
            <Tag />
            <Header />
            <SideBar />
            <main className="content">
                <Outlet />
            </main>
            {/* <Footer /> */}
        </>
    );
};

export default Layout;
