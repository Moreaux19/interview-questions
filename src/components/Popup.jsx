import React from 'react';

export default function Popup({ active, setActive, children }) {
  return (
    <div className={active ? 'popup popup_active' : 'popup'} onClick={() => setActive(false)}>
      <div className="popup__content" onClick={evt => evt.stopPropagation()}>
        {children}
        <button className="popup__close-button" onClick={() => setActive(false)}></button>
      </div>
    </div>
  );
}
