import Gallery from '../../components/gallery';
import CoverImage from '../../components/cover-image';
import backgroundImage from '../../assets/image1.png';
import './index.scss';

function Home() {
  return (
    <main>
      <div className="titleImage">
        <CoverImage image={backgroundImage} />
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
      <Gallery />
    </main>
  );
}

export default Home;
