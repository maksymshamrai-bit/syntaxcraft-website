import './Footer.css';

function Footer() {
    return (
        <footer className='footer'>
            <p className='footer-text'>© 2024-{new Date().getFullYear()} SyntaxCraft. SyntaxCraft є частиною Kodiak Group.</p>
            <p className='footer-text'>Сторінка створена командою ko://dev</p>
        </footer>
    )
}

export default Footer