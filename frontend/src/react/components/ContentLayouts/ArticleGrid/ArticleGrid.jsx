import articles from './data';
import CardArticle from '@react/components/cards/CardArticle/CardArticle';
import useWindowWidth from '@react/hooks/useWindowWidth';
import './article_grid.scss';

/**
 * Секция со статьями, включающая одну featured-карточку и до 6 compact-карточек.
 * Использует grid-сетку с адаптацией:
 * - до 1440px отображается только 3 карточки
 */
export default function ArticleGrid() {
  const width = useWindowWidth();
  const [featured, ...rest] = articles;
  const maxCards = width <= 1440 ? 3 : 6;
  const compactCards = rest.slice(0, maxCards);

  return (
    <section className="article-grid">
      <CardArticle {...featured} variant="featured" />
      {compactCards.map((a) => (
        <CardArticle key={a.id} {...a} variant="compact" />
      ))}
    </section>
  );
}






