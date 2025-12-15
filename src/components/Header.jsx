import dc_logo from '../assets/dc-logo.png';
import './Header.css';

function Header() {
    return (
        <div id="header_div" class="header">
            <img src={dc_logo} alt="DC Logo" class="logo" />
            <ul class="nav-menu">
                <li><a href="#">Characters</a></li>
                <li><a href="#">Comics</a></li>
                <li><a href="#">Movies</a></li>
                <li><a href="#">TV</a></li>
                <li><a href="#">Games</a></li>
                <li><a href="#">Collectibles</a></li>
                <li><a href="#">Videos</a></li>
                <li><a href="#">Fans</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">Shop</a></li>
            </ul>
        </div>
    );
};
export default Header;