import style from './Footer.module.css'
import facebook from '../assets/footer-facebook.png'
import periscope from '../assets/footer-periscope.png'
import pinterest from '../assets/footer-pinterest.png'
import twitter from '../assets/footer-twitter.png'
import youtube from '../assets/footer-youtube.png'
import Link1 from './props/ArrayLink1.jsx'
function Footer() {
    return (
        <div>
            <div id="footer_div_1" className={style.footer}>
                <div className={style.col}>
                    <ul className={style.foot_links}>
                        <h2>DC COMICS</h2>
                        <Link1/>
                        {/* <li><a href="#">Characters</a></li>
                        <li><a href="#">Comics</a></li>
                        <li><a href="#">Movies</a></li>
                        <li><a href="#">TV</a></li>
                        <li><a href="#">Games</a></li>
                        <li><a href="#">Collectibles</a></li>
                        <li><a href="#">Videos</a></li>
                        <li><a href="#">Fans</a></li>
                        <li><a href="#">News</a></li>
                        <li><a href="#">Shop</a></li> */}
                    </ul>

                    <ul className={style.foot_links}>
                        <h2>SHOP</h2>
                        <li><a href="#">Shop DC</a></li>
                        <li><a href="#">Shop DC Collectibles</a></li>
                    </ul>
                </div>
                <div className={style.col}>
                    <ul className={style.foot_links}>
                        <h2>DC</h2>
                        <li><a href="#">Terms Of Use</a></li>
                        <li><a href="#">Privacy Policy(News)</a></li>
                        <li><a href="#">Ad Choices</a></li>
                        <li><a href="#">Advertising</a></li>
                        <li><a href="#">Jobs</a></li>
                        <li><a href="#">Subscriptions</a></li>
                        <li><a href="#">Talent Workshop</a></li>
                        <li><a href="#">CPSC Certificates</a></li>
                        <li><a href="#">Ratings</a></li>
                        <li><a href="#">Shop Help</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
                <div className={style.col}>
                    <ul className={style.foot_links}>
                        <h2>SITES</h2>
                        <li><a href="#">DC</a></li>
                        <li><a href="#">MAD Magazine</a></li>
                        <li><a href="#">DC Kids</a></li>
                        <li><a href="#">DC Universe</a></li>
                        <li><a href="#">DC Power Visa</a></li>
                    </ul>
                </div>

            </div>
            <div id="footer_div_2">
                <div>
                    <button>SIGN UP NOW</button>
                </div>

                <div>
                    <span>FOLLOW US</span>
                    <a href="#"><img src={facebook}></img></a>
                    <a href="#"><img src={periscope}></img></a>
                    <a href="#"><img src={pinterest}></img></a>
                    <a href="#"><img src={twitter}></img></a>
                    <a href="#"><img src={youtube}></img></a>
                </div>
            </div>
        </div>
    );
};
export default Footer;