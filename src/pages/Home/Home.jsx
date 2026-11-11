import Hero from '../../components/Hero/Hero';
import { News } from '../../components/News/News';
import Footer from '../../components/Footer/Footer';
import items from '../../data/serverlist.json';
import './Home.css';

function Home() {
    return (
        <>
            <main>
                <Hero />
                <section className='server-list'>
                    {items.map(item => 
                        <div className='server-card' key={item.id}>
                            <h3 className='server-card-title'>{item.name}</h3>
                            <p className='server-client-text'>{item.description}</p>
                        </div>
                    )}
                </section>
                <News />
            </main>
           <Footer />
        </>
    )
}

export default Home