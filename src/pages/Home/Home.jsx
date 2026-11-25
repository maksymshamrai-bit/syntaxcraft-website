import { Link } from 'react-router-dom';
import Hero from '../../components/Hero/Hero';
import { News } from '../../components/News/News';
import Footer from '../../components/Footer/Footer';
import items from '../../data/serverlist.json';
import './Home.css';

function Home() {
    return (
        <div className="homepage-page">

            <title>SyntaxCraft - Сервери для веселої гри</title>

            <main className="homepage">

                {/* HERO */}
                <Hero />

                {/* SERVERS */}
                <section className="server-section">

                    <div className="server-section-heading">
                        <span className="server-section-label">
                            EXPLORE OUR SERVERS
                        </span>

                        <h2>Наші сервери</h2>

                        <p>
                            Обирай свій світ, знаходь нові можливості
                            та ставай частиною спільноти SyntaxCraft.
                        </p>
                    </div>

                    <div className="server-list">

                        {items.map((item) => (
                            <div className="server-card" key={item.id}>

                                <div className="server-card-top">
                                    <span className="server-card-number">
                                        SERVER / {String(item.id).padStart(2, '0')}
                                    </span>

                                    <span className="server-card-indicator">
                                        <span></span>
                                        PROJECT
                                    </span>
                                </div>

                                <div className="server-card-content">

                                    <h3 className="server-card-title">
                                        {item.name}
                                    </h3>

                                    <p className="server-card-text">
                                        {item.description}
                                    </p>

                                </div>

                                <div className="server-card-footer">

                                    <Link
                                        to={`/${item.link}`}
                                        className="server-card-button"
                                    >
                                        Детальніше
                                        <span>↗</span>
                                    </Link>

                                </div>

                            </div>
                        ))}

                    </div>

                </section>

                {/* NEWS */}
                <section className="homepage-news">
                    <div className="news-section-heading">
                        <span>STAY UPDATED</span>
                        <h2>Останні новини</h2>
                        <p>
                            Слідкуй за останніми подіями та оновленнями
                            проєкту SyntaxCraft.
                        </p>
                    </div>

                    <News />
                </section>

            </main>

            <Footer />

        </div>
    );
}

export default Home;
