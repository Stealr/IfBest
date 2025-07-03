import AuthBtn from '@components/inputs/AuthBtn/AuthBtn';
import Search from './components/Search/Search';
import Tag from './components/Tag/Tag';
import NotificationsContent from '@components/ui/popapContent/Notifications';
import usePopup from '@hooks/usePopup';

import './header.scss';

import LogoLight from '@assets/svg/header/logo_light2.svg?react';
import LogoDark from '@assets/svg/header/logo_dark.svg?react';
import PlusIcon from '@assets/svg/header/plus.svg?react';
import Bell from '@assets/svg/header/bell.svg?react';
import Person from '@assets/svg/header/person.svg?react';

const tags = ['Все', 'Обучение', 'Рукоделие', 'Красота', 'Спорт', 'Канада', 'Рецепты', 'Поезда'];

function Header() {
    const isAuth = true; // это тест, тут должна быть проверка авторизованности
    // тут проверка темы и выбор иконки
    const { openPopup } = usePopup();

    const createPopup = (event, element) => {
        const rect = event.currentTarget.getBoundingClientRect();
        openPopup(element, rect);
    };

    return (
        <header className="header">
            <div className="header__top">
                <LogoLight />
                <Search />
                {isAuth ? (
                    <div className="header__user-menu">
                        <button
                            className="header__create-btn"
                            onClick={(event) => createPopup(event, <NotificationsContent />)}
                        >
                            <PlusIcon className="icon" />
                            <span>Создать</span>
                        </button>

                        <Bell
                            width="1.86rem"
                            height="2.33rem"
                            className="header__notification icon"
                            onClick={(event) => createPopup(event, <NotificationsContent />)}
                        />

                        {/* //TODO потом заменить иконку person */}
                        <Person
                            className="header__profile icon"
                            onClick={(event) => createPopup(event, <NotificationsContent />)}
                        />
                    </div>
                ) : (
                    <AuthBtn type={'compact'}>Войти</AuthBtn>
                )}
            </div>

            <nav className="header__nav-tags">
                {tags.map((tag, index) => (
                    <Tag key={`tag-${index}`}>{tag}</Tag>
                ))}
            </nav>
        </header>
    );
}

export default Header;
