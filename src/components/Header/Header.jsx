import { Link } from 'react-router-dom';
import { FaYoutube } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa6";
import './Header.css';

function Header() {
    return (
        <header className="header">
            <h1 className="header-title">SyntaxCraft</h1>
            <nav className="header-nav">
                <ul>
                    <li>
                        <a href="https://www.youtube.com/@SyntaxCraftServers" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
                    </li>
                    <li>
                        <a href="https://t.me/+ZaXXfDKhA442MWRk" target="_blank" rel="noopener noreferrer"><FaTelegram /></a>
                    </li>
                    <li>
                        <a href="https://discord.gg/your-discord-link" target="_blank" rel="noopener noreferrer"><FaDiscord /></a>
                    </li>
                </ul>
            </nav>
            <nav className="header-nav">
                <ul>
                    <li><Link to="/">Головна</Link></li>
                    <li><Link to="/servers">Сервери</Link></li>
                    <li><Link to="/contact">Контакти</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;