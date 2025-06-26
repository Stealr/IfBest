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
  const B = 'card-article';

  /* ─────────── Big cards ─────────── */
  if (variant === 'featured') {
    return (
      <article
        className={`${B} ${B}--featured`}
        style={{ backgroundImage: `url(${image})` }}
      >
        {/* меню‑три точки */}
        <button className={`${B}__menu`} aria-label="menu">⋯</button>

        {/* заголовок */}
        <h3 className={`${B}__title`}>{title}</h3>

        {/* блок комментарий */}
        <div className={`${B}__footer`}>
          <div className={`${B}__meta`}>
            <div className={`${B}__channel-block`}>
              <img className={`${B}__avatar`} src={avatar} alt={author} />
              <span className={`${B}__channel`}>{author}</span>
            </div>
            <span className={`${B}__stats`}>
              {views} просмотров • {date}
            </span>
          </div>

          {text && <p className={`${B}__text`}>{text}</p>}
        </div>
      </article>
    );
  }

  /* ─────────── small cards ─────────── */
  return (
    <article className={`${B} ${B}--compact`}>
      <img className={`${B}__thumb`} src={image} alt={title} />

      <div className={`${B}__body`}>
        <h4 className={`${B}__title`}>{title}</h4>
        <span className={`${B}__author`}>{author}</span>
        <span className={`${B}__date`}>{date}</span>
      </div>

      <button className={`${B}__menu`} aria-label="menu">⋯</button>
    </article>
  );
}

CardArticle.propTypes = {
  variant: PropTypes.oneOf(['featured', 'compact']),
  image:   PropTypes.string.isRequired,
  title:   PropTypes.string.isRequired,
  text:    PropTypes.string,
  author:  PropTypes.string.isRequired,
  avatar:  PropTypes.string,
  views:   PropTypes.number,
  date:    PropTypes.string.isRequired,
};

