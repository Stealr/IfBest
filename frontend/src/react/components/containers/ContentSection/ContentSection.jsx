import { Link } from 'react-router';
import './content_section.scss';

/**
 * Description
 * Если сеции не нужен header, то не указывать title и href
 * @param {string} title 'название секции'
 * @param {string} href 'ссылка для перехода по кнопке смотреть больше'
 * @param {any} children 'main content of section'
 */
function ContentSection({ title, href, children }) {
    return (
        <section className="section-content">
            {title || href ? (
                <div className="section-content__header">
                    <p className="headline1-large-f">{title}</p>
                    <Link to={href} className="section-content__more-btn button-small-f">
                        Смотреть больше
                    </Link>
                </div>
            ) : null}
            {children}
        </section>
    );
}

export default ContentSection;
