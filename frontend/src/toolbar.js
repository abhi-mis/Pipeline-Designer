// frontend\src\toolbar.js

import { DraggableNode } from "./draggableNode";
import DeleteButton from "./DeleteButton"; // Import your DeleteButton component
export const PipelineToolbar = () => {
  return (
    <div
      style={{
        margin: "0 auto",
        marginTop: '15px !important',
        padding: "10px",
        background: 'rgb(2,0,36)',
        background: 'linear-gradient(331deg, rgba(13,4,94,1) 3%, rgba(0,48,42,1) 56%, rgba(0,2,10,1) 94%)',
        boxShadow: "0 10px 10px rgba(0, 0, 0, 0.1)",
        border: '3px solid white',
        borderRadius: "10px",
        width: "70%",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          margin: "10px",
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          justifyContent: "center",
        }}
      >
        <DraggableNode type="customInput" label="Input" />
        <DraggableNode type="url" label="URL" />
        <DraggableNode type="text" label="Text" />
        <DraggableNode type="number" label="Number" />
        <DraggableNode type="boolean" label="Boolean" />
        <DraggableNode type="date" label="Date" />
        <DraggableNode type="email" label="Email" />
        <hr className="divider" />
        <DraggableNode type="llm" label="LLM" />
        <DraggableNode type="customOutput" label="Output" />
       
        
        <hr className="divider" />
        <DeleteButton />
      </div>
    </div>
  );
};