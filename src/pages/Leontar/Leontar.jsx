import { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './Leontar.css';

export const Leontar = () => {
    const [versions, setVersions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const SHEET_API_URL = 'https://opensheet.elk.sh/12X1_vHps1N0CgxNCya3uH10YgfTSzNNd7kNefv9eF9c/Versions';

    useEffect(() => {
        const fetchVersion = async () => {
            setLoading(true);
            try {
                const response = await fetch(SHEET_API_URL);
                const data = await response.json();
                setVersions(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchVersion();
    }, []);

    if (loading) return <p className='leontar-loading'>Завантаження версій...</p>;
    if (error) return <p className='leontar-error'>Помилка: {error}</p>;

    // Фільтруємо версії за колонкою "type"
    const stableVersions = versions.filter(v => v.type === 'stable');
    const testingVersions = versions.filter(v => v.type === 'testing');

    return (
        <div className="leontar-page">
            <Header />
            <main>
                <div className="leontar-content">
                    <h1 className="leontar-title">Leontar Server</h1>
                    <p className="leontar-description">
                        Леонтар — це сервер-місто для гравців Minecraft. Чи можливо побудувати
                        величне місто посеред такого незвичайного біому, як Месса?

                        Відповідь на це запитання ви знайдете на нашому сервері. Ми пропонуємо
                        унікальний ігровий досвід, де ви зможете насолоджуватися красою та
                        особливостями цього біому, розвивати власні проєкти й взаємодіяти
                        з іншими гравцями у спільному світі.
                    </p>
                    <p className="leontar-history">
                        Історія нашого проєкту розпочалася у 2023 році, хоча сам сервер був
                        створений ще у 2021 році для іншого проєкту.

                        Згодом ми вирішили змінити концепцію та створити щось нове —
                        проєкт, який буде цікавішим і захопливішим для гравців.

                        Так з'явилося місто, яке спочатку мало назву «Месса-Сіті».
                        Проте з часом ми вирішили перейменувати його на «Леонтар» —
                        назву, що символізує силу та велич цього міста.

                        Біом Месса, який став основою нашого проєкту, відкриває
                        унікальні можливості для будівництва та розвитку міста,
                        а також створює неповторну ігрову атмосферу.

                        У 2025 році ми створили другу версію міста у Minecraft Java Edition.

                        Сьогодні ми продовжуємо розвивати наш проєкт і запрошуємо
                        всіх охочих долучитися до нашої спільноти, стати частиною
                        історії Леонтару та насолоджуватися грою на нашому сервері.
                    </p>
                </div>
                <div className='leontar-content-blocks'>
                    <div className="leontar-versions">
                        <div className="leontar-version-stable">
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
                        <div className="leontar-version-testing">
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
                    <div className="leontar-addresses">
                        <h2 className="leontar-addresses-title">Адреси серверу:</h2>
                        <div className="leontar-address">
                            <h3>Minecraft Java Edition</h3>
                            <p>leontar.aternos.me</p>
                        </div>
                        <div className="leontar-address">
                            <h3>Minecraft Bedrock Edition</h3>
                            <p>lwecia.aternos.me 19132</p>
                        </div>
                        <div className="leontar-address-description">
                            <p className="leontar-addresses-description">
                                Для гри доступні стабільні версії без модифікацій. Тестові версії та модифковані версії доступні приватно.
                            </p>
                            <p className="leontar-addresses-description">
                                Для доступу до тестових та модифкованих версій необхідно звернутися до адміністратора.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}