import articles from './data';
import LgArtCard from '@components/cards/ArticleCards/LArticleCard/LgArtCard.jsx';
import SmArtCard from '@components/cards/ArticleCards/SArticleCard/SmArtCard.jsx';
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
        <div className="article-grid">
            <div className='article-grid__popular-card'>
                <LgArtCard data={featured} />
            </div>
            {compactCards.map((a) => (
                <div className='article-grid__small-card' key={`articleCard${a.id}`}>
                    <SmArtCard data={a} />
                </div>
            ))}
        </div>
    );
}
