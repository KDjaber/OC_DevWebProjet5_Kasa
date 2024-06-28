import './index.scss';

function CoverImage({ image, imageClass }) {
  return (
    <div className="coverImage">
      <img
        src={image}
        alt="Couverture de présentation de la page"
        className={imageClass}
      />
    </div>
  );
}

export default CoverImage;
