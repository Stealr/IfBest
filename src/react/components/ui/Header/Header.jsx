// src/react/components/ui/Header/Header.jsx
import React from 'react';
import './header.scss';
import Logo from '@assets/svg/лого.svg?react';
import SearchIcon from '@assets/svg/Search.svg?react';
import ButtonDefault from '@assets/svg/Button_default.svg?react';
import ButtonHover from '@assets/svg/Button_hover.svg?react';


import TagAll from '@assets/svg/Тег_Все.svg?react';
import TagLearning from '@assets/svg/Тег_Обучение.svg?react';
import TagCraft from '@assets/svg/Тег_Рукоделие.svg?react';
import TagBeauty from '@assets/svg/Тег_Красота.svg?react';
import TagSport from '@assets/svg/Тег_Спорт.svg?react';
import TagCanada from '@assets/svg/Тег_Канада.svg?react';
import TagRecipes from '@assets/svg/Тег_Рецепты.svg?react';
import TagTrains from '@assets/svg/Тег_Поезда.svg?react';

const Header = () => {
  const tags = [
    { id: 1, Component: TagAll, label: 'Все' },
    { id: 2, Component: TagLearning, label: 'Обучение' },
    { id: 3, Component: TagCraft, label: 'Рукоделие' },
    { id: 4, Component: TagBeauty, label: 'Красота' },
    { id: 5, Component: TagSport, label: 'Спорт' },
    { id: 6, Component: TagCanada, label: 'Канада' },
    { id: 7, Component: TagRecipes, label: 'Рецепты' },
    { id: 8, Component: TagTrains, label: 'Поезда' }
  ];

  return (
    <header className="header">
      <div className="header__container">
        {/* Логотип (слева) */}
        <div className="header__logo">
          <Logo className="header__logo-icon" />
        </div>

        {/* Поиск (по центру) */}
        <div className="header__search">
          <SearchIcon className="header__search-icon" />
        </div>

        {/* Кнопка входа (справа) */}
        <div className="header__login">
          <ButtonDefault className="header__login-default" />
          <ButtonHover className="header__login-hover" />
        </div>
      </div>

      <nav className="header__tags" aria-label="Категории">
        {tags.map(({ id, Component, label }) => (
          <a 
            key={id} 
            href="#" 
            className="header__tag"
            aria-label={label}
          >
            <Component className="header__tag-icon" aria-hidden="true" />
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;