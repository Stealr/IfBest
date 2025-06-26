// import featuredImg from '@assets/images/featured.png';
// import avatar      from '@assets/images/avatar.png';
// import thumb1      from '@assets/images/sample1.jpeg';

/**
 * @typedef {Object} Article
 * @property {number} id - Уникальный идентификатор статьи
 * @property {'featured' | 'compact'} [variant] - Вариант отображения карточки (featured — большая, compact — маленькая)
 * @property {string} image - Путь к изображению (фоновому или превью)
 * @property {string} title - Заголовок видео или статьи
 * @property {string} [text] - Описание (только для featured)
 * @property {string} author - Автор или название канала
 * @property {string} [avatar] - Аватар автора (только для featured)
 * @property {number} [views] - Количество просмотров (только для featured)
 * @property {string} date - Дата или время публикации
 */

/** @type {Article[]} */
export default [
  {
    id: 1,
    variant: 'featured',
    // image: featuredImg,
    title: 'Название видео какое‑то интересное, длинное, здоровское…',
    text:  'Lorem ipsum dolor sit amet consectetur. Scelerisque quam tristique fermentum in morbi...',
    author: 'Название канала',
    // avatar,
    views: 600,
    date:  '1 месяц назад',
  },
  {
    id: 2,
    // image: thumb1,
    title: 'Название видео какое‑то…',
    author: 'Автор',
    date:  '1 месяц назад',
  },
  {
    id: 3,
    // image: thumb1,
    title: 'Название видео какое‑то…',
    author: 'Автор',
    date:  '1 месяц назад',
  },
  {
    id: 4,
    // image: thumb1,
    title: 'Название видео какое‑то…',
    author: 'Автор',
    date:  '1 месяц назад',
  },
  {
    id: 5,
    // image: thumb1,
    title: 'Название видео какое‑то…',
    author: 'Автор',
    date:  '1 месяц назад',
  },
  {
    id: 6,
    // image: thumb1,
    title: 'Название видео какое‑то…',
    author: 'Автор',
    date:  '1 месяц назад',
  },
  {
    id: 7,
    // image: thumb1,
    title: 'Название видео какое‑то…',
    author: 'Автор',
    date:  '1 месяц назад',
  },
];
