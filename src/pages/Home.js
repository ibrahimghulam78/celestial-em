import '../App.css';
import GalaxyZoom from '../components/CosmosPlaygound';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HiddenGems from '../components/HiddenGems';
import Partners from '../components/Partners';
import RoadMap from '../components/RoadMap';
import SecureYourLegend from '../components/SecureYourLegend';
import SolarSystem from '../components/SolarSystem';
import Universe from '../components/Universe';
import WhereDoYouStand from '../components/WhereDOYouStand';
import WhoWeAre from '../components/WhoWeAre';

function Home() {
    return (
        <div className="Home">
            <main>
                <Header />
                <SecureYourLegend />
                <GalaxyZoom />
                {/* <Universe /> */}
                <WhereDoYouStand />
                <RoadMap />
                <Partners />
                <HiddenGems />
                <WhoWeAre />
                {/* <Footer /> */}
            </main>
        </div>
    );
}

export default Home;