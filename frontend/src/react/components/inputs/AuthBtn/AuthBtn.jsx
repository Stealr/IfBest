import './auth_btn.scss';

/**
 * Description
 * @param {string} type: 'full-width' | 'compact'
 * @param {any} children: 'Войти' | 'Регистрация | Отправить | Сохранить'
 */
function AuthBtn({ type, onClick, children }) {
    return (
        <button onClick={onClick} className={`auth-btn ${type} button-small-f`}>
            {children}
        </button>
    );
}

export default AuthBtn;
