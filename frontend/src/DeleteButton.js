import React, { useState } from 'react';
import { useReactFlow } from 'reactflow';

const DeleteButton = () => {
  const { getNodes, getEdges, setNodes, setEdges } = useReactFlow();
  const [isClicked, setIsClicked] = useState(false);

  const handleDelete = () => {
    const nodesToKeep = getNodes().filter(node => !node.selected);
    const edgesToKeep = getEdges().filter(edge => !edge.selected);

    setNodes(nodesToKeep);
    setEdges(edgesToKeep);

    // Trigger the color change on click
    setIsClicked(true);

    // Revert the color after a short delay
    setTimeout(() => setIsClicked(false), 200);
  };

  return (
    <button
      style={{
        margin: '0, auto',
        zIndex: 10,
        padding: '10px 20px',
        backgroundColor: isClicked ? '#1e3554' : '#2f4f7f', 
        color: 'white',
        border: '3px solid white',
        borderRadius: '8px',
        cursor: 'pointer',
        fontSize: '1.2rem',
        fontWeight: '700',
        display: 'inline-block',
        transition: 'background-color 0.2s ease', 
      }}
      onClick={handleDelete}
    >
      DELETE
    </button>
  );
};

export default DeleteButton;
