import Catalog from "./components/catalogSection";
import ContentSection from "./contentSection.jsx";

export default function main() {
    return (
        <main>
            <Catalog />

            <div className = "mainSection">
                <ContentSection />
            </div>
        </main>
    );
}