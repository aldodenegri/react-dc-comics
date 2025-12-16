import digital_comics from '../assets/buy-comics-digital-comics.png'
import merchandise from '../assets/buy-comics-merchandise.png'
import shop from '../assets/buy-comics-shop-locator.png'
import visa from '../assets/buy-dc-power-visa.svg'
import subscription from '../assets/buy-comics-subscriptions.png'
import comics from '../components/comics.js'
import './Main.css'
function Main() {
    return (
        <div>
            <div id="main_div_products">

                <div class="comics-grid">
                    {comics.map((comic) => (
                        <div key={comic.id} className="comic-card">
                            <img src={comic.thumb} alt={comic.title} class="comic-thumb" />
                            <h3>{comic.series}</h3>
                        </div>
                    ))}
                </div>

            </div>
            <div id="main_div" className="main">
                <ul>
                    <li><img src={digital_comics}></img><a href="#">DIGITAL COMICS</a></li>
                    <li><img src={merchandise}></img><a href="#">DC MERCHANDISE</a></li>
                    <li><img src={subscription}></img><a href="#">SUBSCRIPTION</a></li>
                    <li><img src={shop}></img><a href="#">COMIC SHOP LOCATOR</a></li>
                    <li><img src={visa}></img><a href="#">DC POWER VISA</a></li>
                </ul>
            </div>
        </div>
    );
};
export default Main;