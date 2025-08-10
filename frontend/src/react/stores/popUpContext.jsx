import { createContext, useState, useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Popup from '@components/ui/Popups/Popup/Popup.jsx';

export const PopupContext = createContext();

export const PopupProvider = ({ children }) => {
    const [popupState, setPopupState] = useState({
        isOpen: false,
        content: null,
        position: null,
        variant: 'popover', // 'popover' или 'modal'
    });

    const location = useLocation();

    useEffect(() => {
        if (popupState.isOpen) {
            closePopup();
        }
    }, [location]);

    const closePopup = useCallback(() => {
        setPopupState((prev) => ({ ...prev, isOpen: false }));
    }, []);

    const openPopup = useCallback((content, position, variant = 'popover') => {
        setPopupState((prev) => {
            if (prev.isOpen && variant === 'popover' && prev.content?.type === content.type) {
                return { ...prev, isOpen: false };
            }
            return { isOpen: true, content, position, variant };
        });
    }, []);

    return (
        <PopupContext.Provider value={{ openPopup, closePopup, popupState }}>
            {children}
            {popupState.isOpen && (
                <Popup
                    variant={popupState.variant}
                    content={popupState.content}
                    position={popupState.position}
                    onClose={closePopup}
                />
            )}
        </PopupContext.Provider>
    );
};
