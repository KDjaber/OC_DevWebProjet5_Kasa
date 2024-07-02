import { useState } from 'react';
import Arrow from '../../assets/arrow_down.svg';
import './index.scss';

function Dropdown({ title, text, isList }) {
  const [isOpen, setIsOpen] = useState(false);

  return isOpen ? (
    <div className="dropdown">
      <div className="dropdown-btn-container">
        {title}
        <button className="dropdown-btn" onClick={() => setIsOpen(false)}>
          <img src={Arrow} alt="flèche" className="rotate" />
        </button>
      </div>
      {isList === false ? (
        <p className="dropdown-text">{text}</p>
      ) : (
        <div className="dropdown-text">
          <ul>{text}</ul>
        </div>
      )}
    </div>
  ) : (
    <div className="dropdown">
      <div className="dropdown-btn-container">
        {title}
        <button className="dropdown-btn" onClick={() => setIsOpen(true)}>
          <img src={Arrow} alt="flèche" />
        </button>
      </div>
    </div>
  );
}

export default Dropdown;
