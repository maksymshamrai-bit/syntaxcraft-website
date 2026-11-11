import Logo from '../../assets/logo.png';
import './Hero.css';

function Hero() {
    return (
        <section className='hero'>
            <div className='container'>
                <img src={Logo} alt="SyntaxCraft" />
                <p>Сервери для веселої гри</p>
                <button>Грати зараз!</button>
            </div>
        </section>
        
    )
}

export default Hero