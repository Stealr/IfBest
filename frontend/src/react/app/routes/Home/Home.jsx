import { CardVideo } from '@components/cards/CardVideo/CardVideo.jsx';
import MainGrid from '@components/contentLayouts/MainGrid/MainGrid';
import CardList from '@components/contentLayouts/CardList/CardList';
import ArticleGrid from '@components/contentLayouts/ArticleGrid/ArticleGrid';
import ContentSection from '@components/containers/ContentSection/ContentSection';
import './home.scss';

function Home() {
    return (
        <div className="homepage">
            <ContentSection title={'Популярное'} href={'test'}>
                <MainGrid>
                    {Array.from({ length: 6 }, (_, index) => (
                        <CardVideo key={index} />
                    ))}
                </MainGrid>
            </ContentSection>

            <ContentSection title={'Короткие видео'} href={'test'}>
                <CardList typeCard={'video'} />
            </ContentSection>

            <ContentSection>
                <MainGrid>
                    {Array.from({ length: 6 }, (_, index) => (
                        <CardVideo key={index} />
                    ))}
                </MainGrid>
            </ContentSection>

            <ContentSection>
                <ArticleGrid />
            </ContentSection>

            <ContentSection title={'Аудио'} href={'test'}>
                <CardList typeCard={'audio'} />
            </ContentSection>
        </div>
    );
}

export default Home;
