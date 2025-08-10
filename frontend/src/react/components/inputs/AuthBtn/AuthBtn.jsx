import clsx from 'clsx';
import './auth_btn.scss';

/**
 * Кнопка для форм авторизации
 * @param {'red' | 'grey'} color - Цветовая схема кнопки
 * @param {'full-width' | 'compact'} size - Размер/ширина кнопки
 * @param {Function} onClick - Обработчик клика
 * @param {any} children - Содержимое кнопки
 */
function AuthBtn({ color = 'red', size, onClick, children, ...rest }) {
    const buttonClasses = clsx(
        'auth-btn',
        'button-small-f',
        color && `auth-btn--color-${color}`,
        size && `auth-btn--size-${size}`
    );

    return (
        <button onClick={onClick} className={buttonClasses} {...rest}>
            {children}
        </button>
    );
}

export default AuthBtn;
