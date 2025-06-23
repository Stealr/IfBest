import articles from './data';
import CardArticle from '@react/components/card/CardArticle/CardArticle';
import useWindowWidth from '@react/hooks/useWindowWidth';
import './article_grid.scss';

/**
 * Секция со статьями, включающая одну featured-карточку и до 6 compact-карточек,
 * разбитых на 1 или 2 колонки в зависимости от ширины экрана.
 *
 * Использует хук useWindowWidth для определения адаптивности:
 * - На desktop (width > 1024) отображается 2 колонки по 3 compact-карточки
 * - На tablet (width ≤ 1024) — только 1 колонка с 3 карточками
 *
 * @returns {JSX.Element} Разметка сетки статей
 */
export default function ArticleGrid() {
  const w = useWindowWidth();
  const tablet = w <= 1024;

  const [featured, ...rest] = articles;
  const compact = tablet ? rest.slice(0, 3) : rest;

  const col1 = compact.slice(0, 3);
  const col2 = tablet ? [] : compact.slice(3, 6);

  return (
    <section className="article-grid">
      <CardArticle {...featured} variant="featured" />

      <div className="article-grid__col">
        {col1.map((a) => (
          <CardArticle key={a.id} {...a} variant="compact" />
        ))}
      </div>

      {col2.length > 0 && (
        <div className="article-grid__col">
          {col2.map((a) => (
            <CardArticle key={a.id} {...a} variant="compact" />
          ))}
        </div>
      )}
    </section>
  );
}





