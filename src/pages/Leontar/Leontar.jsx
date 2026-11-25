import { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './Leontar.css';

const SHEET_API_URL =
    'https://opensheet.elk.sh/12X1_vHps1N0CgxNCya3uH10YgfTSzNNd7kNefv9eF9c/Versions';

export const Leontar = () => {
    const [versions, setVersions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [copied, setCopied] = useState('');

    useEffect(() => {
        const fetchVersion = async () => {
            try {
                setLoading(true);

                const response = await fetch(SHEET_API_URL);

                if (!response.ok) {
                    throw new Error('Не вдалося завантажити версії');
                }

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

    const stableVersions = versions.filter(
        v => v.type === 'stable'
    );

    const testingVersions = versions.filter(
        v => v.type === 'testing'
    );

    const copyAddress = async (address, id) => {
        try {
            await navigator.clipboard.writeText(address);
            setCopied(id);

            setTimeout(() => {
                setCopied('');
            }, 2000);
        } catch {
            setError('Не вдалося скопіювати адресу');
        }
    };

    if (loading) {
        return (
            <div className="leontar-page">
                <Header />
                <main className="leontar-loading">
                    Завантаження версій...
                </main>
                <Footer />
            </div>
        );
    }

    if (error) {
        return (
            <div className="leontar-page">
                <Header />
                <main className="leontar-error">
                    Помилка: {error}
                </main>
                <Footer />
            </div>
        );
    }

    const renderVersions = (list) => (
        list.length > 0 ? (
            list.map((v, i) => (
                <div className="leontar-version-item" key={v.id || i}>
                    <div className="leontar-version-info">
                        <b>{v.version}</b>
                        <span>
                            {v.loader !== '-' ? v.loader : 'Vanilla'}
                            {' · '}
                            {v.edition}
                            {' · '}
                            {v.game}
                        </span>
                    </div>

                    <span className="leontar-version-date">
                        {v.date}
                    </span>
                </div>
            ))
        ) : (
            <p className="leontar-empty">Немає доступних версій</p>
        )
    );

    return (
        <div className="leontar-page">
            <title>Сервер "Леонтар"</title>

            <Header />

            <main>
                {/* HERO */}
                <section className="leontar-hero">
                    <div className="leontar-hero-content">
                        <span className="leontar-label">
                            SYNTAXCRAFT PROJECT
                        </span>

                        <h1>LEONTAR</h1>

                        <p>
                            Створи власну історію у світі Minecraft
                        </p>

                        <span className="leontar-status">
                            <span className="status-dot"></span>
                            Проєкт активно розвивається
                        </span>
                    </div>
                </section>

                {/* DESCRIPTION */}
                <section className="leontar-about">
                    <div className="leontar-section-heading">
                        <span>01 / ПРО ПРОЄКТ</span>
                        <h2>Місто, яке створюємо разом</h2>
                    </div>

                    <p>
                        Леонтар — це сервер-місто для гравців Minecraft.
                        Чи можливо побудувати величне місто посеред
                        такого незвичайного біому, як Месса?

                        Відповідь на це запитання ви знайдете на нашому
                        сервері. Ми пропонуємо унікальний ігровий досвід,
                        де ви зможете насолоджуватися красою та
                        особливостями цього біому, розвивати власні
                        проєкти й взаємодіяти з іншими гравцями
                        у спільному світі.
                    </p>

                    <div className="leontar-history">
                        <h3>Історія Леонтару</h3>

                        <p>
                            Історія нашого проєкту розпочалася у 2023
                            році, хоча сам сервер був створений ще
                            у 2021 році для іншого проєкту.

                            Згодом ми вирішили змінити концепцію
                            та створити щось нове — проєкт, який
                            буде цікавішим і захопливішим для гравців.

                            Так з'явилося місто, яке спочатку мало
                            назву «Месса-Сіті». Проте з часом ми
                            вирішили перейменувати його на «Леонтар» —
                            назву, що символізує силу та велич цього міста.

                            Біом Месса, який став основою нашого проєкту,
                            відкриває унікальні можливості для будівництва
                            та розвитку міста, а також створює неповторну
                            ігрову атмосферу.

                            У 2025 році ми створили другу версію міста
                            у Minecraft Java Edition.

                            Сьогодні ми продовжуємо розвивати наш проєкт
                            і запрошуємо всіх охочих долучитися до нашої
                            спільноти, стати частиною історії Леонтару
                            та насолоджуватися грою на нашому сервері.
                        </p>
                    </div>
                </section>

                {/* VERSIONS AND ADDRESSES */}
                <section className="leontar-details">

                    <div className="leontar-card">
                        <div className="leontar-card-heading">
                            <span>02 / ВЕРСІЇ</span>
                            <h2>Версії Minecraft</h2>
                        </div>

                        <div className="leontar-version-group">
                            <h3 className="stable-heading">
                                <span className="version-dot stable-dot"></span>
                                Стабільні версії
                            </h3>

                            {renderVersions(stableVersions)}
                        </div>

                        <div className="leontar-version-group">
                            <h3 className="testing-heading">
                                <span className="version-dot testing-dot"></span>
                                Тестові версії
                            </h3>

                            {renderVersions(testingVersions)}
                        </div>
                    </div>

                    <div className="leontar-card">
                        <div className="leontar-card-heading">
                            <span>03 / ПІДКЛЮЧЕННЯ</span>
                            <h2>Адреси сервера</h2>
                        </div>

                        <div className="leontar-address-group">
                            <span className="edition-label">
                                JAVA EDITION
                            </span>

                            <h3>Minecraft Java Edition</h3>

                            <div className="leontar-copy">
                                <code>leontar.aternos.me</code>

                                <button
                                    onClick={() => copyAddress(
                                        'leontar.aternos.me',
                                        'java'
                                    )}
                                >
                                    {copied === 'java' ? 'Скопійовано!' : 'Копіювати'}
                                </button>
                            </div>
                        </div>

                        <div className="leontar-address-group">
                            <span className="edition-label">
                                BEDROCK EDITION
                            </span>

                            <h3>Minecraft Bedrock Edition</h3>

                            <div className="leontar-copy">
                                <code>lwecia.aternos.me</code>

                                <button
                                    onClick={() => copyAddress(
                                        'lwecia.aternos.me',
                                        'bedrock'
                                    )}
                                >
                                    {copied === 'bedrock' ? 'Скопійовано!' : 'Копіювати'}
                                </button>
                            </div>

                            <p className="leontar-port">
                                Порт: 19132
                            </p>

                            <button
                                className="leontar-port-copy"
                                onClick={() => copyAddress('19132', 'port')}
                            >
                                {copied === 'port' ? 'Скопійовано!' : 'Копіювати порт'}
                            </button>
                        </div>

                        <div className="leontar-notice">
                            <p>
                                Для гри доступні стабільні версії без
                                модифікацій. Тестові версії та модифіковані
                                версії доступні приватно.
                            </p>

                            <p>
                                Для доступу до тестових та модифікованих
                                версій необхідно звернутися до адміністратора.
                            </p>
                        </div>
                    </div>

                </section>
            </main>

            <Footer />
        </div>
    );
};
