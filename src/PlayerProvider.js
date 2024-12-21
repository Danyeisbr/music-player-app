import './App.css';
import songsList from './constants.js';
import { createContext } from 'react';
import ControlBar from './ControlBar';
import Songs from './Songs.js';

export const PlayerContext = createContext(null);

//const buttonLabels = ['Not replaying', 'Replaying all', 'Replaying one'];

//Componente Padre
const PlayerProvider = ({children}) => {
  return (
    <PlayerContext.Provider value={songsList}>
      <Songs />
      <ControlBar />
      { children}
    </PlayerContext.Provider>
  );
}

export default PlayerProvider;



