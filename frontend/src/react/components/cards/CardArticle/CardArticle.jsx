import EllipsisBtn from '@components/inputs/EllipsisBtn/EllipsisBtn';
import PropTypes from 'prop-types';
import './card_article.scss';

/**
 * Компонент карточки статьи — в двух вариантах:
 * - `featured` — большая карточка с фоном и подробным футером
 * - `compact` — маленькая карточка с превью и мета-информацией
 *
 * @param {Object} props
 * @param {'featured' | 'compact'} [props.variant='compact'] - Тип карточки: большая или компактная
 * @param {string} props.image - URL изображения (фон или превью)
 * @param {string} props.title - Заголовок статьи или видео
 * @param {string} [props.text] - Текст описания (только для featured)
 * @param {string} props.author - Имя автора или канала
 * @param {string} [props.avatar] - URL аватарки (только для featured)
 * @param {number} [props.views=0] - Количество просмотров (featured)
 * @param {string} props.date - Дата публикации (или “1 месяц назад” и т.п.)
 * @returns {JSX.Element}
 */
export default function CardArticle({
    variant = 'compact',
    image,
    title,
    text,
    author,
    avatar,
    views = 0,
    date,
}) {
    /* ─────────── Big cards ─────────── */
    if (variant === 'featured') {
        return (
            <article
                className={`card-article card-article--featured`}
                style={{ backgroundImage: `url(${image})` }}
            >
                {/* меню‑три точки */}
                <button className={`card-article__menu`} aria-label="menu">
                    <EllipsisBtn />
                </button>

                {/* заголовок */}
                <h3 className={`card-article__title`}>{title}</h3>

                {/* блок комментарий */}
                <div className={`card-article__footer`}>
                    <div className={`card-article__meta`}>
                        <div className={`card-article__channel-block`}>
                            <img className={`card-article__avatar`} src={avatar} alt={author} />
                            <span className={`card-article__channel`}>{author}</span>
                        </div>
                        <span className={`card-article__stats`}>
                            {views} просмотров • {date}
                        </span>
                    </div>

                    {text && <p className={`card-article__text`}>{text}</p>}
                </div>
            </article>
        );
    }

    /* ─────────── small cards ─────────── */
    return (
        <article className={`card-article card-article--compact`}>
            <img className={`card-article__thumb`} src={image} alt={title} />

            <div className={`card-article__body`}>
                <h4 className={`card-article__title`}>{title}</h4>
                <span className={`card-article__author`}>{author}</span>
                <span className={`card-article__date`}>{date}</span>
            </div>

            <div className={`card-article__menu`} aria-label="menu">
                <EllipsisBtn />
            </div>
        </article>
    );
}

CardArticle.propTypes = {
    variant: PropTypes.oneOf(['featured', 'compact']),
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string,
    author: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    views: PropTypes.number,
    date: PropTypes.string.isRequired,
};
