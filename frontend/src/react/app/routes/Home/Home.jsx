import './home.scss';
import { useTest } from '@hooks/useTest/useTest.js';

function Home() {
    const { data, isLoading, isError, error } = useTest();

    console.log('fact:', data);
    console.log('isLoading:', isLoading);
    console.log('error:', error);
    console.log('iserror:', isError);

    if (isLoading) return <div>Загрузка...</div>;
    if (error) return <div>Ошибка: {error.message}</div>;

    return (
        <div className="homepage">
            <h1 className="homepage__header title1-medium">title 1</h1>
            <h2 className='title2-medium'>title 2</h2>
            <p>testing</p>
            <p>{data?.fact}</p>
        </div>
    );
}

export default Home;
