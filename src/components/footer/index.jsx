import LogoFooter from '../../assets/logo-footer.svg';
import './index.scss';

function Footer() {
  return (
    <footer>
      <img src={LogoFooter} alt="kasa logo" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
