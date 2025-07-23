import './side_bar.scss';
// import { sidebarIcons } from './sidebarData';
// import SidebarItem from './SidebarItem';

import MenuIcon from '@assets/svg/sidebar/menu.svg?react';
import HomeIcon from '@assets/svg/sidebar/home.svg?react';
import PlayIcon from '@assets/svg/sidebar/play.svg?react';
import ArticleIcon from '@assets/svg/sidebar/article.svg?react';
import MusicIcon from '@assets/svg/sidebar/music.svg?react';

export const sidebarBtns = [
    { component: <MenuIcon className="icon" />, label: 'Menu' },
    { component: <HomeIcon className="icon" />, label: 'Home' },
    { component: <PlayIcon className="icon" />, label: 'Play' },
    { component: <ArticleIcon className="icon" />, label: 'List' },
    { component: <MusicIcon className="icon" />, label: 'Music' },
];

/**
 * Глобальный компонент боковой панели с иконками.
 */
const SideBar = () => {
    return (
        <aside className="sidebar">
            <nav>
                <ul className="sidebar__list">
                    {sidebarBtns.map((btn, index) => (
                        <li key={index} className="sidebar__item">
                            {btn.component}
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
};

export default SideBar;
