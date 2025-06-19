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
            <h1 className="homepage__header">home page</h1>
            <p>{data?.fact}</p>
        </div>
    );
}

export default Home;
