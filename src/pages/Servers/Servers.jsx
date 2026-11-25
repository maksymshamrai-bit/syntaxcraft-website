import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import items from '../../data/serverlist.json';
import './Servers.css';

export const Servers = () => {
    return (
        <div className='servers'>
            <title>Сервери</title>
            <Header />
            <main>
                <section className='servers-description'>
                    <h1>Сервери</h1>
                    <p>Список усіх серверів.</p>
                </section>
                <section className='servers-content'>
                    {items.map(item => 
                        <div className='servers-page-card' key={item.id}>
                            <h3 className='servers-page-card-title'>{item.name}</h3>
                            <p className='server-page-card-text'>{item.description}</p>
                            <Link to={`/${item.link}`}>Детальніше</Link>
                        </div>
                    )}
                </section>
            </main>
            <Footer>

            </Footer>
        </div>
    )
}