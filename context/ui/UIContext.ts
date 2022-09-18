import {createContext, useContext} from 'react';

interface ContextProps {
    sideMenuOpen: boolean;
    isAddingEntry: boolean;
    isDragging: boolean;
    openSideMenu: () => void;
    closeSideMenu: () => void;
    setIsAddingEntry: (payload: boolean) => void;
    startDragging: () => void;
    endDragging: () => void;
}

export const UIContext = createContext({} as ContextProps);

export const useUIContext = () => useContext(UIContext);
