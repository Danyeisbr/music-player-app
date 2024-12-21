import { useState } from 'react';

const Song = ({children}) => {
    const [ isSelected, setIsSelected ] = useState(false);
    return (
        <div className="song" 
        style={{ backgroundColor: isSelected ? 'green' : '' }}
        onClick={() => setIsSelected(!isSelected)}>
            {children}
        </div>
    );
} 

export default Song;