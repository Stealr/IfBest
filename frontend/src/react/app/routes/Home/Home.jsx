import { CardVideo } from '@components/cards/CardVideo/CardVideo.jsx';
import MainGrid from '@components/contentLayouts/MainGrid/MainGrid';
import CardList from '@components/contentLayouts/CardList/CardList';
import ArticleGrid from '@components/contentLayouts/ArticleGrid/ArticleGrid';
import './home.scss';

function Home() {
    // const { data, isLoading, isError, error } = useTest();

    // console.log('fact:', data);
    // console.log('isLoading:', isLoading);
    // console.log('error:', error);
    // console.log('iserror:', isError);

    // if (isLoading) return <div>Загрузка...</div>;
    // if (error) return <div>Ошибка: {error.message}</div>;

    return (
        <div className="homepage">
            <MainGrid>
                {Array.from({ length: 6 }, (_, index) => (
                    <CardVideo key={index} />
                ))}
            </MainGrid>
            <CardList typeCard={'video'} />
            <MainGrid>
                {Array.from({ length: 6 }, (_, index) => (
                    <CardVideo key={index} />
                ))}
            </MainGrid>
            <ArticleGrid />
            <CardList typeCard={'audio'} />
            
            {/* <h1 className="homepage__header title1-medium">title 1</h1>
            <h2 className='title2-medium'>title 2</h2>
            <p>testing</p>
            <p>{data?.fact}</p> */}
        </div>
    );
}

export default Home;
