import './auth_btn.scss';

/**
 * Description
 * @param {string} type: 'full-width' | 'compact'
 * @param {any} children: 'Войти' | 'Регистрация'
 */
function AuthBtn({type, children}) {
  return (
    <button className={`signin-btn ${type} body-small-f`}>
      {children}
    </button>
  );
}

export default AuthBtn;
