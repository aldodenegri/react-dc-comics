import digital_comics from '../assets/buy-comics-digital-comics.png'
import merchandise from '../assets/buy-comics-merchandise.png'
import shop from '../assets/buy-comics-shop-locator.png'
import visa from '../assets/buy-dc-power-visa.svg'
import subscription from '../assets/buy-comics-subscriptions.png'
import './Main.css'
function Main() {
    return (
        <div id="main_div" class="main">
            <ul>
                <li><img src={digital_comics}></img><a href="#">DIGITAL COMICS</a></li>
                <li><img src={merchandise}></img><a href="#">DC MERCHANDISE</a></li>
                <li><img src={subscription}></img><a href="#">SUBSCRIPTION</a></li>
                <li><img src={shop}></img><a href="#">COMIC SHOP LOCATOR</a></li>
                <li><img src={visa}></img><a href="#">DC POWER VISA</a></li>
            </ul>
        </div>
    );
};
export default Main;