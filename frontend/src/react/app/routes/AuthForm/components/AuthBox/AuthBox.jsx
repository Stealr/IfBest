import './auth_box.scss';

/**
 * @param {string} title
 * @param {string} info
 * @param {JSX} children
 */
function AuthBox({ title, info, children }) {
    return (
        <div className="auth-box">
            <div className="auth-box__header">
                <h2 className="headline2-medium-f">{title}</h2>
                {info && <p className="auth-box__info input-small-f">{info}</p>}
            </div>
            <div className="auth-box__content">{children}</div>
        </div>
    );
}

export default AuthBox;
