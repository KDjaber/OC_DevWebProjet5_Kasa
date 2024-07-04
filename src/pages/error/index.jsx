import { Link } from 'react-router-dom';
import './index.scss';

function Error() {
  return (
    <main>
      <div className="error-page">
        <p>404</p>
        <h2>Oups! La page que vous demandez n'existe pas.</h2>
        <Link to="/">Retourner sur la page d'accueil</Link>
      </div>
    </main>
  );
}

export default Error;
