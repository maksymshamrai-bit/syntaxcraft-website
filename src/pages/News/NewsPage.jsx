import { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { fetchNews } from '../../api/news'; // Імпортуємо нашу функцію
import './NewsPage.css';

export const NewsPage = () => {
    // Стан для збереження новин
    const [news, setNews] = useState([]);
    // Стан для індикатора завантаження
    const [isLoading, setIsLoading] = useState(true);

    // Завантажуємо дані при монтуванні компонента
    useEffect(() => {
        const loadNews = async () => {
            const data = await fetchNews();
            setNews(data);
            setIsLoading(false);
        };

        loadNews();
    }, []);

    return (
        <div className='news-page'>
            <Header />
            <main>
                <section className='news-page-description'>
                    <h1 className='news-page-title'>Новини</h1>
                    <p>Розширена секція новин. Усі новини проєкту.</p>
                </section>
                
                <section className='news-page-content'>
                    {isLoading ? (
                        <p>Завантаження новин...</p>
                    ) : news.length === 0 ? (
                        <p>Наразі новин немає.</p>
                    ) : (
                        <div className="news-grid">
                            {/* Перебираємо масив новин */}
                            {news.map((item) => {
                                // У Strapi v5 поля знаходяться прямо в item
                                // Якщо у вас Strapi v4, то буде item.attributes.title і т.д.
                                const { title, content, publishedDate, cover, slug } = item;
                                
                                return (
                                    <article key={item.id} className="news-card">
                                        {/* Відображення обкладинки, якщо вона є */}
                                        {cover && cover.url && (
                                            <img 
                                                src={`http://localhost:1337${cover.url}`} 
                                                alt={title} 
                                                className="news-image" 
                                            />
                                        )}
                                        <h2>{title}</h2>
                                        <p className="news-date">
                                            {new Date(publishedDate).toLocaleDateString()}
                                        </p>
                                        {/* Відображення тексту (якщо Rich Text, можна використати dangerouslySetInnerHTML, але краще парсити) */}
                                        <div className="news-excerpt">
                                            {content ? `${content.substring(0, 100)}...` : ''}
                                        </div>
                                    </article>
                                );
                            })}
                        </div>
                    )}
                </section>
            </main>
            <Footer />
        </div>
    );
};