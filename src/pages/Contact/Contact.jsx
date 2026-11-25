import { useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { FaHeadset, FaShieldHalved, FaEnvelope, FaCopy, FaCheck } from 'react-icons/fa6';
import './Contact.css';

export const Contact = () => {
    const [copied, setCopied] = useState('');

    const copyEmail = async (email) => {
        try {
            await navigator.clipboard.writeText(email);
            setCopied(email);

            setTimeout(() => {
                setCopied('');
            }, 2000);
        } catch (error) {
            console.error('Не вдалося скопіювати адресу:', error);
        }
    };

    return (
        <div className="contacts">
            <title>Контакти | SyntaxCraft</title>

            <Header />

            <main className="contact-info">

                {/* HERO */}
                <section className="contact-hero">
                    <span className="contact-label">
                        SYNTAXCRAFT COMMUNITY
                    </span>

                    <h1>Зв'яжіться з нами</h1>

                    <p>
                        Маєте питання або пропозицію?
                        Ми завжди відкриті до спілкування!
                    </p>
                </section>

                {/* CONTACT CARDS */}
                <section className="contact-cards">

                    {/* SUPPORT */}
                    <div className="contact-card">

                        <div className="contact-icon">
                            <FaHeadset />
                        </div>

                        <span className="contact-card-label">
                            TECHNICAL SUPPORT
                        </span>

                        <h2>Технічна підтримка</h2>

                        <p className="contact-card-description">
                            Виникли проблеми з сайтом або серверами?
                            Наша команда підтримки допоможе
                            розібратися з питанням.
                        </p>

                        <div className="contact-email">
                            <FaEnvelope />
                            <span>support@syntaxcraft.pp.ua</span>
                        </div>

                        <div className="contact-buttons">

                            <a
                                href="mailto:support@syntaxcraft.pp.ua"
                                className="contact-button"
                            >
                                Написати нам
                                <span>↗</span>
                            </a>

                            <button
                                className="contact-copy-button"
                                onClick={() => copyEmail(
                                    'support@syntaxcraft.pp.ua'
                                )}
                                aria-label="Скопіювати адресу підтримки"
                            >
                                {copied === 'support@syntaxcraft.pp.ua'
                                    ? <FaCheck />
                                    : <FaCopy />
                                }
                            </button>

                        </div>

                    </div>

                    {/* ADMINISTRATION */}
                    <div className="contact-card">

                        <div className="contact-icon">
                            <FaShieldHalved />
                        </div>

                        <span className="contact-card-label">
                            ADMINISTRATION
                        </span>

                        <h2>Адміністрація</h2>

                        <p className="contact-card-description">
                            Маєте пропозиції щодо співпраці,
                            розвитку проєкту або інші організаційні
                            питання? Звертайтеся до адміністрації.
                        </p>

                        <div className="contact-email">
                            <FaEnvelope />
                            <span>admin@syntaxcraft.pp.ua</span>
                        </div>

                        <div className="contact-buttons">

                            <a
                                href="mailto:admin@syntaxcraft.pp.ua"
                                className="contact-button"
                            >
                                Зв'язатися
                                <span>↗</span>
                            </a>

                            <button
                                className="contact-copy-button"
                                onClick={() => copyEmail(
                                    'admin@syntaxcraft.pp.ua'
                                )}
                                aria-label="Скопіювати адресу адміністрації"
                            >
                                {copied === 'admin@syntaxcraft.pp.ua'
                                    ? <FaCheck />
                                    : <FaCopy />
                                }
                            </button>

                        </div>

                    </div>

                </section>

                {/* ADDITIONAL INFORMATION */}
                <section className="contact-additional">

                    <h2>Ми завжди на зв'язку</h2>

                    <p>
                        Обирай відповідний контакт залежно від свого
                        питання. Це допоможе швидше отримати відповідь
                        від потрібного відділу.
                    </p>

                </section>

            </main>

            <Footer />
        </div>
    );
};
