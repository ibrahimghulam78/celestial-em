import '../App.css';
import OtherPagesHeader from '../components/OtherPagesHeader';
import Blog from '../components/Blog/Blog';

function Home() {
    return (
        <div className="Home">
            <main>
                <OtherPagesHeader />
                <Blog />
            </main>
        </div>
    );
}

export default Home;