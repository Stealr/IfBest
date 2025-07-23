import AuthBtn from '@components/inputs/AuthBtn/AuthBtn';
import Search from './components/Search/Search';
import NotificationsContent from '@components/ui/popapContent/notifications/NotificationsContent.jsx';
import CreateContentPopup from '@components/ui/popapContent/create/Create';
import usePopup from '@hooks/usePopup';

import './header.scss';

import LogoLight from '@assets/svg/header/logo_light2.svg?react';
import LogoDark from '@assets/svg/header/logo_dark.svg?react';
import PlusIcon from '@assets/svg/header/plus.svg?react';
import Bell from '@assets/svg/header/bell.svg?react';
import Person from '@assets/svg/header/person.svg?react';
import AccountPopup from '../popapContent/account/Account';



function Header() {
    const isAuth = true; // это тест, тут должна быть проверка авторизованности
    const { openPopup } = usePopup();

    const createPopup = (event, element) => {
        const rect = event.currentTarget.getBoundingClientRect();
        openPopup(element, rect);
    };

    return (
        <header className="header">
            <div className="header__top">
                <LogoDark/>
                <Search />
                {isAuth ? (
                    <div className="header__user-menu">
                        <button
                            className="header__create-btn"
                            onClick={(event) => createPopup(event, <CreateContentPopup />)}
                        >
                            <PlusIcon className="icon" />
                            <span className='button-small-f'>Создать</span>
                        </button>

                        <Bell
                            className="header__notification icon"
                            onClick={(event) => createPopup(event, <NotificationsContent />)}
                        />

                        {/* //TODO потом заменить иконку person */}
                        <Person
                            className="header__profile icon"
                            onClick={(event) => createPopup(event, <AccountPopup />)}
                        />
                    </div>
                ) : (
                    <AuthBtn type={'compact'}>Войти</AuthBtn>
                )}
            </div>
        </header>
    );
}

export default Header;
