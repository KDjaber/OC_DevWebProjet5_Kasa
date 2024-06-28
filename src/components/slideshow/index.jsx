import { useState } from 'react';
import CoverImage from '../../components/cover-image';
import ForwardArrow from '../../assets/arrow_forward.svg';
import BackArrow from '../../assets/arrow_back.svg';
import './index.scss';

function Slideshow({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const previousSlide = () => {
    if (currentIndex === 0) {
      setCurrentIndex(slides.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };
  const nextSlide = () => {
    if (currentIndex === slides.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  if (slides.length > 1) {
    return (
      <div className="slideshow-container">
        <div className="slide-container">
          <CoverImage image={slides[currentIndex]} imageClass="" />
        </div>
        <div className="slideshow-nav">
          <div className="slideshow-nav-btn-container">
            <button className="back-btn" onClick={previousSlide}>
              <img src={BackArrow} alt="Précédente" />
            </button>
            <button className="forward-btn" onClick={nextSlide}>
              <img src={ForwardArrow} alt="Suivante" />
            </button>
          </div>
        </div>
        <p>
          {currentIndex + 1}/{slides.length}
        </p>
      </div>
    );
  } else {
    return (
      <div className="slideshow-container">
        <CoverImage image={slides} />
      </div>
    );
  }
}

export default Slideshow;
