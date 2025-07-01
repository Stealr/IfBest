import './auth_btn.scss';

/**
 * Description
 * @param {string} type: 'full-width' | 'compact'
 * @param {any} children: 'Войти' | 'Регистрация'
 */
function AuthBtn({type, children}) {
  return (
    <button className={`signin-btn ${type}`}>
      {children}
    </button>
  );
}

export default AuthBtn;
