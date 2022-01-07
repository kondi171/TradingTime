import { createContext } from 'react';

export const defaultObject = {
  wallpaper: 1,
};

export const AppContext = createContext(defaultObject);