import dc_logo from '../assets/dc-logo.png';
import style from './Header.module.css';
const nav = [
    {
        id:1,
        label:"Characters",
    },
    {
        id:2,
        label:"Comics",
    },
    {
        id:3,
        label:"Movies",
    },
    {
        id:4,
        label:"TV",
    },
    {
        id:5,
        label:"Games",
    },
    {
        id:6,
        label:"Collectibles",
    },
    {
        id:7,
        label:"Videos",
    },
    {
        id:8,
        label:"Fans",
    },
    {
        id:9,
        label:"News",
    },
    {
        id:10,
        label:"Shop",
    },

];
function Header() {
    return (
        <div className={style.header}>
            <img src={dc_logo} alt="DC Logo" className={style.logo} />
            <ul className={style.nav_menu}>
            {nav.map(elem => (
                <li key={elem.id}><a href="#">{elem.label}</a></li>
            ))}
            </ul>
            {/* <ul className={style.nav_menu}>
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
            </ul> */}
        </div>
    );
};
export default Header;