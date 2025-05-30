// TShirtViewer.js
import React from 'react';
import { useGLTF } from '@react-three/drei';

function TShirtViewer() {
  const { scene } = useGLTF('/path-to-model.glb'); // make sure this path is valid
  return <primitive object={scene} />;
}

export default TShirtViewer;
