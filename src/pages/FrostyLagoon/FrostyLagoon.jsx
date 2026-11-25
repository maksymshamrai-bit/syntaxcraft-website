import { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './FrostyLagoon.css';

const SHEET_API_URL =
    'https://opensheet.elk.sh/19nYYHDEW-9DyYZXxNrqJ8-O04RcvLf6YNR97NgzXF48/Versions';

export const FrostyLagoon = () => {
    const [versions, setVersions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [copied, setCopied] = useState('');
    const [copyError, setCopyError] = useState('');

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
            setCopyError('');

            setTimeout(() => {
                setCopied('');
            }, 2000);
        } catch {
            setCopyError('Не вдалося скопіювати. Спробуй вручну.');
        }
    };

    const renderVersions = (list) => (
        list.length > 0 ? (
            list.map((v, i) => (
                <div className="frostylagoon-version-item" key={v.id || i}>
                    <div className="frostylagoon-version-info">
                        <b>{v.version}</b>

                        <span>
                            {v.loader !== '-' ? v.loader : 'Vanilla'}
                            {' · '}
                            {v.edition}
                            {' · '}
                            {v.game}
                        </span>
                    </div>

                    <span className="frostylagoon-version-date">
                        {v.date}
                    </span>
                </div>
            ))
        ) : (
            <p className="frostylagoon-empty">
                Немає доступних версій
            </p>
        )
    );

    if (loading) {
        return (
            <div className="frostylagoon-page">
                <Header />
                <main className="frostylagoon-loading">
                    ❄ Завантаження версій...
                </main>
                <Footer />
            </div>
        );
    }

    if (error) {
        return (
            <div className="frostylagoon-page">
                <Header />
                <main className="frostylagoon-error">
                    Помилка: {error}
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="frostylagoon-page">
            <title>Сервер "Морозна Лагуна"</title>

            <Header />

            <main>

                {/* HERO */}
                <section className="frostylagoon-hero">
                    <div className="frostylagoon-hero-content">

                        <span className="frostylagoon-label">
                            SYNTAXCRAFT WINTER PROJECT
                        </span>

                        <h1>FROSTY LAGOON</h1>

                        <p>
                            Відчуй магію зими та створи власну
                            новорічну історію!
                        </p>

                        <span className="frostylagoon-status">
                            <span className="frosty-status-dot"></span>
                            Зимовий святковий проєкт
                        </span>

                    </div>
                </section>

                {/* ABOUT */}
                <section className="frostylagoon-about">

                    <div className="frostylagoon-section-heading">
                        <span>01 / ПРО ПРОЄКТ</span>
                        <h2>Зима починається тут</h2>
                    </div>

                    <p>
                        Frosty Lagoon — це святковий зимовий проєкт
                        Minecraft, створений для тих, хто хоче
                        відчути справжню атмосферу зимових свят.

                        Тут на тебе чекає особлива зимова атмосфера,
                        можливість будувати власну новорічну резиденцію
                        та насолоджуватися святковим вайбом разом
                        з іншими гравцями.
                    </p>

                    <div className="frostylagoon-history">
                        <h3>Святкова атмосфера</h3>

                        <p>
                            Уяви засніжені пейзажі, затишні будиночки,
                            святкові прикраси та новорічну атмосферу.

                            Frosty Lagoon створений для того, щоб
                            кожен гравець міг побудувати власний
                            зимовий куточок, прикрасити його
                            та провести час у святковій атмосфері.

                            Побудуй свою новорічну резиденцію,
                            відкрий для себе зимовий світ
                            та стань частиною Frosty Lagoon!
                        </p>
                    </div>

                </section>

                {/* VERSIONS AND ADDRESSES */}
                <section className="frostylagoon-details">

                    {/* VERSIONS */}
                    <div className="frostylagoon-card">

                        <div className="frostylagoon-card-heading">
                            <span>02 / ВЕРСІЇ</span>
                            <h2>Версії Minecraft</h2>
                        </div>

                        <div className="frostylagoon-version-group">

                            <h3 className="frosty-stable-heading">
                                <span className="frosty-version-dot stable-dot"></span>
                                Стабільні версії
                            </h3>

                            {renderVersions(stableVersions)}

                        </div>

                        <div className="frostylagoon-version-group">

                            <h3 className="frosty-testing-heading">
                                <span className="frosty-version-dot testing-dot"></span>
                                Тестові версії
                            </h3>

                            {renderVersions(testingVersions)}

                        </div>

                    </div>

                    {/* ADDRESSES */}
                    <div className="frostylagoon-card">

                        <div className="frostylagoon-card-heading">
                            <span>03 / ПІДКЛЮЧЕННЯ</span>
                            <h2>Адреси сервера</h2>
                        </div>

                        {/* JAVA */}
                        <div className="frostylagoon-address-group">

                            <span className="frosty-edition-label">
                                JAVA EDITION
                            </span>

                            <h3>Minecraft Java Edition</h3>

                            <div className="frostylagoon-copy">
                                <code>frostylagoonjava.aternos.me</code>

                                <button
                                    onClick={() => copyAddress(
                                        'frostylagoonjava.aternos.me',
                                        'java'
                                    )}
                                >
                                    {copied === 'java'
                                        ? 'Скопійовано!'
                                        : 'Копіювати'}
                                </button>
                            </div>

                        </div>

                        {/* BEDROCK */}
                        <div className="frostylagoon-address-group">

                            <span className="frosty-edition-label">
                                BEDROCK EDITION
                            </span>

                            <h3>Minecraft Bedrock Edition</h3>

                            <div className="frostylagoon-copy">
                                <code>frostylagoon.aternos.me</code>

                                <button
                                    onClick={() => copyAddress(
                                        'frostylagoon.aternos.me',
                                        'bedrock'
                                    )}
                                >
                                    {copied === 'bedrock'
                                        ? 'Скопійовано!'
                                        : 'Копіювати'}
                                </button>
                            </div>

                            <p className="frostylagoon-port">
                                Порт: 19132
                            </p>

                            <button
                                className="frostylagoon-port-copy"
                                onClick={() => copyAddress(
                                    '19132',
                                    'port'
                                )}
                            >
                                {copied === 'port'
                                    ? 'Скопійовано!'
                                    : 'Копіювати порт'}
                            </button>

                        </div>

                        {/* NOTICE */}
                        <div className="frostylagoon-notice">

                            <p>
                                Для гри доступні стабільні версії
                                без модифікацій. Тестові версії
                                та модифіковані версії доступні приватно.
                            </p>

                            <p>
                                Для доступу до тестових та модифікованих
                                версій необхідно звернутися
                                до адміністратора.
                            </p>

                        </div>

                        {copyError && (
                            <p className="frostylagoon-copy-error">
                                {copyError}
                            </p>
                        )}

                    </div>

                </section>

            </main>

            <Footer />
        </div>
    );
};
