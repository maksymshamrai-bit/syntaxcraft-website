// import { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './PlaceIndustrial.css';

export const PlaceIndustrial = () => {
    // const [versions, setVersions] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    // const SHEET_API_URL = 'https://opensheet.elk.sh/19nYYHDEW-9DyYZXxNrqJ8-O04RcvLf6YNR97NgzXF48/Versions';

    // useEffect(() => {
    //     const fetchVersion = async () => {
    //         setLoading(true);
    //         try {
    //             const response = await fetch(SHEET_API_URL);
    //             const data = await response.json();
    //             setVersions(data);
    //         } catch (err) {
    //             setError(err.message);
    //         } finally {
    //             setLoading(false);
    //         }
    //     };

    //     fetchVersion();
    // }, []);

    // if (loading) return <p className='leontar-loading'>Завантаження версій...</p>;
    // if (error) return <p className='leontar-error'>Помилка: {error}</p>;

    // // Фільтруємо версії за колонкою "type"
    // const stableVersions = versions.filter(v => v.type === 'stable');
    // const testingVersions = versions.filter(v => v.type === 'testing');

    return (
        <div className="placeindustrial-page">
            <Header />
            <main>
                <div className="placeindustrial-content">
                    <h1 className="placeindustrial-title">PlaceIndustrial Server</h1>
                    <p className="placeindustrial-description">У розробці. Слідкуйте за оновленнями!</p>
                </div>
                {/* <div className="frostylagoon-versions">
                    <div className="frostylagoon-version-stable">
                        <h3>Стабільні версії:</h3>
                        <p>
                            {stableVersions.length > 0 ? stableVersions.map((v, i) => (
                                <span key={v.id || i}>
                                    <b>{v.version}</b> ({v.loader !== '-' ? v.loader : 'Vanilla'}, {v.edition}, {v.game}) {v.date}
                                    {i < stableVersions.length - 1 ? ' ' : ''}
                                </span>
                            )) : <span>Немає даних</span>}
                        </p>
                    </div>
                    <div className="frostylagoon-version-testing">
                        <h3>Тестові версії:</h3>
                        <p>
                            {testingVersions.length > 0 ? testingVersions.map((v, i) => (
                                <span key={v.id || i}>
                                    <b>{v.version}</b> ({v.loader !== '-' ? v.loader : 'Vanilla'}, {v.edition}, {v.game}) {v.date}
                                    {i < testingVersions.length - 1 ? ' ' : ''}
                                </span>
                            )) : <span>Немає даних</span>}
                        </p>
                    </div>
                </div>
                <div className="frostylagoon-addresses">
                    <h2 className="frostylagoon-addresses-title">Адреси серверу:</h2>
                    <div className="frostylagoon-address">
                        <h3>Minecraft Java Edition</h3>
                        <p>Тимчасово недоступний. З'явиться найближчим часом.</p>
                    </div>
                    <div className="frostylagoon-address">
                        <h3>Minecraft Bedrock Edition</h3>
                        <p>frostylagoon.aternos.me 19132</p>
                    </div>
                    <div className="frostylagoon-address-description">
                        <p className="frostylagoon-addresses-description">
                            Для гри доступні стабільні версії без модифікацій. Тестові версії та модифковані версії доступні приватно.
                        </p>
                        <p className="frostylagoon-addresses-description">
                            Для доступу до тестових та модифкованих версій необхідно звернутися до адміністратора.
                        </p>
                    </div>
                </div> */}
                
            </main>
            <Footer />
        </div>
    );
}