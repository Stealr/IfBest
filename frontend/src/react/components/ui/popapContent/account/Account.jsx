import PaintIcon from "@assets/svg/popapsContent/accountPopup/format_paint.svg?react";
import OpenDoorIcon from "@assets/svg/popapsContent/accountPopup/door_open.svg?react";
import LanguageIcon from "@assets/svg/popapsContent/accountPopup/language.svg?react";
import SettingsIcon from "@assets/svg/settings.svg?react";
import "./account.scss";

const AccountPopup = () => {
    return (
        <div className="account-popup-content"> 
            <div className="account-popup-content__header"> 
                <img src="SRC!" className="account-popup-content__avatar"/>
                <div className="account-popup-content__title headline3-small-f">
                    Какое-то имя
                </div>
            </div>
            <div className="account-popup-content__options button-medium-f"> 
                <div className="account-popup-content__item">
                    <PaintIcon/>
                    Тема
                </div>
                <div className="account-popup-content__item">
                    <LanguageIcon/>
                    Язык
                </div>
                <div className="account-popup-content__item">
                    <SettingsIcon/>
                    Настройки
                </div>
                <div className="account-popup-content__item">
                    <OpenDoorIcon/>
                    Выход
                </div>
            </div>
        </div>
    )
};

export default AccountPopup;