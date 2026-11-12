import { useEffect, useState } from 'react';
import { NewsCard } from './NewsCard';
import './News.css';

export const News = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const SHEET_API_URL = 'https://opensheet.elk.sh/14qQVbHR_P1p8tU-IdSUzwbQu_FCmWlreswx2KpatDvc/News';

    useEffect(() => {
        const fetchNews = async () => {
            setLoading(true);
            try {
                const response = await fetch(SHEET_API_URL);
                const data = await response.json();
                const latestNews = data
                .filter((item) => item.title)
                .slice(0, 5);
                setNews(latestNews);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

    if (loading) return <p className='news-loading'>Завантаження новин...</p>;
    if (error) return <p className='news-error'>Помилка: {error}</p>;

    return (
        <section className='news'>
            <div className='container'>
                <div className='news-header'>
                    <h2 className='news-title'>Новини</h2>
                    <p className='news-summary'>Останні новини та оновлення про SyntaxCraft.</p>
                </div>
                {news.map((article) => (
                    <NewsCard key={article.id} article={article} />
                ))}
            </div>
            <a href="https://t.me/+ZaXXfDKhA442MWRk" target="_blank" rel="noopener noreferrer">
                Підписатися на новини
            </a>
        </section>
    )
}