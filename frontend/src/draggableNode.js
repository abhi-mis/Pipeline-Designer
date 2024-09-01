import React, { useState } from 'react';

export const DraggableNode = ({ type, label }) => {
  const [isClicked, setIsClicked] = useState(false);

  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = 'grabbing';
    event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
    event.dataTransfer.effectAllowed = 'move';
  };

  const handleClick = () => {
    setIsClicked(true);

    // Revert click effect after a short delay
    setTimeout(() => setIsClicked(false), 200);
  };

  return (
    <div
      className={type}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = 'grab')}
      onClick={handleClick}
      style={{
        cursor: 'grab',
        minWidth: '80px',
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        borderRadius: '12px',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: isClicked ? '#1e3554' : '#2f4f7f', // Change background on click
        border: '3px solid rgba(255, 255, 255, 0.7)',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        transition: 'background-color 0.3s ease, transform 0.3s ease',
        zIndex: 1,
      }}
      draggable
    >
      <span
        style={{
          color: '#fff',
          fontSize: '12px',
          fontWeight: 'bold',
          textTransform: 'uppercase',
          letterSpacing: '1px',
        }}
      >
        {label}
      </span>
    </div>
  );
};
