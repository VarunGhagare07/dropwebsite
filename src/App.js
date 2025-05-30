import React from 'react';
import { Canvas } from '@react-three/fiber';
import TShirtViewer from './TShirtViewer';

function App() {
  return (
    <>
      <span style={{ position: 'absolute', top: 20, left: 20, color: 'white', zIndex: 1 }}>
        Some overlay text
      </span>
      <Canvas>
        <TShirtViewer />
      </Canvas>
    </>
  );
}

export default App;
