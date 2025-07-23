import { useState } from 'react';


import './side_bar.scss';

import MenuIcon from '@assets/svg/sidebar/menu.svg?react';
import HomeIcon from '@assets/svg/sidebar/home.svg?react';
import PlayIcon from '@assets/svg/sidebar/play.svg?react';
import ArticleIcon from '@assets/svg/sidebar/article.svg?react';
import MusicIcon from '@assets/svg/sidebar/music.svg?react';

import BookmarksIcon from '@assets/svg/sidebar/bookmarks.svg?react';
import HistoryIcon from '@assets/svg/sidebar/history.svg?react';
import PlayListIcon from '@assets/svg/sidebar/animated_images.svg?react';
import MoreTimeIcon from '@assets/svg/sidebar/more_time.svg?react';
import FavoriteIcon from '@assets/svg/sidebar/favorite.svg?react';

export const sidebarBtns = [
    { component: <HomeIcon className="icon" />, label: 'Главная' },
    { component: <PlayIcon className="icon" />, label: 'Видео' },
    { component: <ArticleIcon className="icon" />, label: 'Статьи' },
    { component: <MusicIcon className="icon" />, label: 'Аудио' },
];

export const sidebarAuthBtns = [
    { component: <BookmarksIcon className="icon" />, label: 'Подписки' },
    { component: <HistoryIcon className="icon" />, label: 'История' },
    { component: <PlayListIcon className="icon" />, label: 'Плейлисты' },
    { component: <MoreTimeIcon className="icon" />, label: 'Смотреть позже' },
    { component: <FavoriteIcon className="icon" />, label: 'Понравившиеся' },
];

const SideBar = () => {
    const [isBarOpen, setIsBarOpen] = useState(false);
    const isAuth = true; //! Тут проверка на авторизацию

    const handleClickMenu = () => {
        setIsBarOpen((prev) => !prev);
    };

    return (
        <aside className={`sidebar ${isBarOpen ? 'opened' : ''}`}>
            <MenuIcon className="sidebar__menu icon" onClick={handleClickMenu} />
            <ul className="sidebar__list">
                {sidebarBtns.map((btn) => (
                    <li key={btn.label} className="sidebar__item">
                        {btn.component}
                        {isBarOpen && (
                            <p className="sidebar__item-title button-medium-regular-f">
                                {btn.label}
                            </p>
                        )}
                    </li>
                ))}
            </ul>

            <div className="sidebar__div-line"></div>

            {isAuth && (
                <ul className="sidebar__list">
                    {sidebarAuthBtns.map((btn) => (
                        <li key={btn.label} className="sidebar__item">
                            {btn.component}
                            {isBarOpen && (
                                <p className="sidebar__item-title button-medium-regular-f">
                                    {btn.label}
                                </p>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </aside>
    );
};

export default SideBar;
