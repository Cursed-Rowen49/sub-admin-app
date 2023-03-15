import { createContext } from 'react';

interface AppContextInterface {
  theme: string;
  color: string;
  bgColor: string;
}

const AppContext = createContext<AppContextInterface | null>(null);

export default AppContext;
