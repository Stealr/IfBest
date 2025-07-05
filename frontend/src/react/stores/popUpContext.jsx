import { createContext, useState, useCallback } from 'react';
import Popup from '@components/ui/popaps/Popup.jsx';

export const PopupContext = createContext();

export const PopupProvider = ({ children }) => {
  const [popupState, setPopupState] = useState({
    isOpen: false,
    content: null,
    position: null,
  });

  const closePopup = useCallback(() => {
    setPopupState((prev) => ({ ...prev, isOpen: false }));
  }, []);

  const openPopup = useCallback((content, position) => {
    setPopupState((prev) => {
      if (prev.isOpen && prev.content?.type === content.type) {
        return { ...prev, isOpen: false };
      }
      return { isOpen: true, content, position };
    });
  }, []);

  return (
    <PopupContext.Provider value={{ openPopup, closePopup, popupState }}>
      {children}
      {popupState.isOpen && (
        <Popup
          content={popupState.content}
          position={popupState.position}
          onClose={closePopup} />
      )}
    </PopupContext.Provider>
  );
};
