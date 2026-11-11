import './News.css';

export const NewsCard = ({ article }) => {
    return (
        <article className='news-card'>
            <h3 className='news-card-title'>{article.title}</h3>
            <p className='news-card-summary'>{article.summary}</p>
            <div className='news-card-info'>
                <p className='news-card-date'>{article.date}</p>
                <p className='news-card-category'>{article.category}</p>
            </div>
        </article>
    )
}