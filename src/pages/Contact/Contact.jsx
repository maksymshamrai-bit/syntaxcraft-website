import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './Contact.css';

export const Contact = () => {
    return (
        <div className="contacts">
            <Header />
            <div className="contact-info">
                <h2>Контактна інформація</h2>
                <p>Підтримка:</p>
                <a href="mailto:support@syntaxcraft.pp.ua">support@syntaxcraft.pp.ua</a>
                <p>Адміністрація:</p>
                <a href="mailto:admin@syntaxcraft.pp.ua">admin@syntaxcraft.pp.ua</a>
            </div>
            <Footer />
        </div>
    );
};