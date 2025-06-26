import React from "react";
import "./Header.scss";
import SignInBtn from '@components/inputs/SignInBtn/SignInBtn';
import Search from '@components/ui/Header/components/Search/Search';
import Tag from '@components/ui/Header/components/Tag/Tag';
import Logo from '@assets/images/Logo.png'; 

const Header = () => {
    const tags = [
    "Все", 
    "Обучение", 
    "Рукоделие", 
    "Красота", 
    "Спорт", 
    "Канада", 
    "Рецепты", 
    "Поезда"
  ];
    return (
        <header className="header">
            <div className="header__Button">
                 <SignInBtn />
            </div>
             <div className="header__Search">
                 <Search />
             </div>
             <div className="header__tags">
                 {tags.map((tag, index) => (
                <Tag key={index} title={tag} />
            ))}
      </div>
      <div className="header__logo">
              <img 
                src={Logo} 
             />
             </div>
        </header>
    );
}

export default Header;