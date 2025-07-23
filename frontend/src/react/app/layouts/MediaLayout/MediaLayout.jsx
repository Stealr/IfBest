import { Outlet } from 'react-router-dom';
import NavTags from './components/NavTags/NavTags';

const MediaLayout = () => {
    return (
        <>
            <NavTags />
            <Outlet />
        </>
    );
};

export default MediaLayout;
