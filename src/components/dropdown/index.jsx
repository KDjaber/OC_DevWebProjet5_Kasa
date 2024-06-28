import { useState } from 'react';
import Arrow from '../../assets/arrow_down.svg';
import './index.scss';

function Dropdown({ title, text }) {
  const [isOpen, setIsOpen] = useState(false);

  return isOpen ? (
    <div className="dropdown">
      <button className="dropdown-btn" onClick={() => setIsOpen(false)}>
        {title}
        <img src={Arrow} alt="flèche" />
      </button>
      <p className="dropdown-text">{text}</p>
    </div>
  ) : (
    <button className="dropdown-btn" onClick={() => setIsOpen(true)}>
      {title}
      <img src={Arrow} alt="flèche" />
    </button>
  );
}

export default Dropdown;
