import Tag from '@components/lib/Tag/Tag';
import './navtags.scss';

const tags = ['Все', 'Обучение', 'Рукоделие', 'Красота', 'Спорт', 'Канада', 'Рецепты', 'Поезда'];

function NavTags() {
    return (
        <nav className="nav-tags">
            {tags.map((tag, index) => (
                <Tag key={`tag-${index}`}>{tag}</Tag>
            ))}
        </nav>
    );
}

export default NavTags;
