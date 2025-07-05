import { useContext } from 'react';
import { PopupContext } from '@stores/popupContext';

const usePopup = () => {
  return useContext(PopupContext);
};

export default usePopup;