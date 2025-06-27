import SignInBtn from '@components/inputs/SignInBtn/SignInBtn';
import Search from './components/Search/Search';
import Tag from './components/Tag/Tag';

import './header.scss';

import LogoLight from '@assets/svg/header/logo_light2.svg?react';
import LogoDark from '@assets/svg/header/logo_dark.svg?react';
import PlusIcon from '@assets/svg/header/plus.svg?react';
import Bell from '@assets/svg/header/bell.svg?react';
import Person from '@assets/svg/header/person.svg?react';

const tags = ['Все', 'Обучение', 'Рукоделие', 'Красота', 'Спорт', 'Канада', 'Рецепты', 'Поезда'];

function Header() {
    const isAuth = true; // это тест, тут проверка авторизованности
    // тут проверка темы и выбор иконки

    return (
        <header className="header">
            <div className="header__top">
                <LogoLight />
                <Search />
                {isAuth ? (
                    <div className="header__menu">
                        <button className="header__create-btn">
                            <PlusIcon className="icon" />
                            <span>Создать</span>
                        </button>
                        <Bell width="1.86rem" height="2.33rem" className="icon" />
                        {/* //TODO заменить иконку person */}
                        <Person className="icon" /> 
                    </div>
                ) : (
                    <SignInBtn type={'compact'}>Войти</SignInBtn>
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
