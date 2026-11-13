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
                        Проєкт Леонтар, сервер-місто для гравців Minecraft. Що буде якщо, спробувати побудувати місто в такому біомі як Месса?<br/>
                        Відповідь на це питання ви можете знайти на нашому сервері. Ми пропонуємо вам унікальний досвід гри в Minecraft, <br />
                        де ви зможете насолоджуватися красою та складністю цього біому, а також взаємодіяти з іншими гравцями в нашому спільному світі.
                    </p>
                    <p className="leontar-history">
                        Історія бере початок з 2023 року, хоча сам сервер був створений у 2021 році та був призначений для іншого проєкту.<br />
                        Але з часом, ми вирішили змінити концепцію та створити новий проєкт, який буде більш цікавим та захоплюючим для гравців. <br />
                        Так і зародилося місто яке напочатку було названо "Месса-сіті", але з часом ми вирішили змінити назву на "Леонтар", що<br />
                        символізує силу та велич цього міста. Біом Месса, який є основою нашого проєкту, надає унікальні можливості для будівництва та <br /> 
                        розвитку міста, а також створює неповторну атмосферу гри. В 2025 році ми зробили другий варіант міста в Mincraft Java Edition <br />
                        Зараз ми продовжуємо розвивати наш проєкт та запрошуємо всіх бажаючих приєднатися до нашої спільноти та насолоджуватися грою в Minecraft на нашому сервері.
                    </p>
                </div>
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
                
            </main>
            <Footer />
        </div>
    );
}