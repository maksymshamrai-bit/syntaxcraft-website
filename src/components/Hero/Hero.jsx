import { useState } from 'react';
import ModalWindow from '../Modal/Modal';
import Logo from '../../assets/logo.png';
import './Hero.css';

function Hero() {
    const [showModal, setShowModal] = useState(false);
    
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);
    
    return (
        <section className='hero'>
            <div className='container'>
                <img src={Logo} alt="SyntaxCraft" />
                <p className="hero-subtitle">Сервери для веселої гри</p>
                <button onClick={handleShow}>Грати зараз!</button>
            </div>
            {showModal && <ModalWindow onClose={handleClose} />}
        </section>
        
    )
}

export default Hero