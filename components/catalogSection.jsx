import iPhone from "../assets/main/catalog/AppleIphone.png";
import MacBook from "../assets/main/catalog/AppleMacBook.png";
import iPad from "../assets/main/catalog/AppleiPad.png";
import Watch from "../assets/main/catalog/AppleWatch.png";
import AirPods from "../assets/main/catalog/AppleAirPods.png";
import iMac from "../assets/main/catalog/AppleiMac.png";
import Dyson from "../assets/main/catalog/Dyson.png";
import Headphones from "../assets/main/catalog/Headphones.png";
import "../styles/catalogStyles.css";

export default function catalog() {
    return (
        <section className = "catalog">

            <div className = "itemsContainer">
                <h2>Apple</h2>

                <ul>
                    <li>
                        <a href = "/">
                            <img src = {iPhone} alt = "catalogLogo" />
                            <p>Apple iPhone</p>
                        </a>
                    </li>
                    <li>
                        <a href = "/">
                            <img src = {MacBook} alt = "catalogLogo" />
                            <p>Apple MacBook</p>
                        </a>
                    </li>
                    <li>
                        <a href = "/">
                            <img src = {iPad} alt = "catalogLogo" />
                            <p>Apple iPad</p>
                        </a>
                    </li>
                    <li>
                        <a href = "/">
                            <img src = {Watch} alt = "catalogLogo" />
                            <p>Apple Watch</p>
                        </a>
                    </li>
                    <li>
                        <a href = "/">
                            <img src = {AirPods} alt = "catalogLogo" />
                            <p>Apple AirPods</p>
                        </a>
                    </li>
                    <li>
                        <a href = "/">
                            <img src = {iMac} alt = "catalogLogo" />
                            <p>Apple iMac</p>
                        </a>
                    </li>
                </ul>
            </div>

            <div className = "itemsContainer">
                <ul>
                    <h2>Not Apple</h2>
                    <li>
                        <a href = "/">
                            <img src = {Dyson} alt = "catalogLogo" />
                            <p>Dyson</p>
                        </a>
                    </li>
                    <li>
                        <a href = "/">
                            <img src = {Headphones} alt = "catalogLogo" />
                            <p>Headphones</p>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    )
}