import './index.scss';

function CoverImage({ image }) {
  return (
    <div className="coverImage">
      <img src={image} alt="Couverture de présentation de la page" />
    </div>
  );
}

export default CoverImage;
