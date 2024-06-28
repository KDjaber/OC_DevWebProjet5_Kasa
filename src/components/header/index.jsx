import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import './index.scss';

function Header() {
  return (
    <header>
      <nav>
        <Link to="/">
          <img src={Logo} alt="Kasa logo" />
        </Link>
        <div className="nav-links">
          <Link to="/">Accueil</Link>
          <Link to="a-propos">A Propos</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
