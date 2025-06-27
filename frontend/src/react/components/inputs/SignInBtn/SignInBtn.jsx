import './sign_in_btn.scss';

/**
 * Description
 * @param {string} type: 'full-width' | 'compact'
 * @param {any} children: 'Войти' | 'Регистрация'
 */
function SignInBtn({type, children}) {
  return (
    <button className={`signin-btn ${type}`}>
      {children}
    </button>
  );
}

export default SignInBtn;
