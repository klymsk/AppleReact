import logo from "../assets/main/mainLogo.png";
import "../styles/headerStyles.css";

export default function Header() {
    return (
        <header>
            <div className = "mainLogo">
                <img src = {logo} alt = "logo" />
                <h1>Apple це <br />IsApp</h1>
            </div>

            <nav>
                <a href = "/">Каталог</a>
                <a href = "/">Магазини</a>
                <a href = "/">Контакти</a>
                <a href = "/">Trade-In</a>
            </nav>
        </header>
    );
}