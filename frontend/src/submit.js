import React, { useState } from "react";
import { useReactFlow } from "reactflow";

export const SubmitButton = () => {
  const { getNodes, getEdges } = useReactFlow();
  const [alert, setAlert] = useState(false);
  const [res, setRes] = useState({});

  const handleSubmit = async () => {
    const nodes = getNodes();
    const edges = getEdges();

    const response = await fetch("http://127.0.0.1:8000/pipelines/parse", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nodes, edges }),
    });

    const result = await response.json();
    setAlert(true);
    setRes(result);
    console.log(result);
    console.log(res);

    window.alert("Pipeline result available! Scroll down to see the result.");
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "10px",
          borderRadius: "10px",
          
        }}
      >
        <button
          type="button"
          onClick={handleSubmit}
          className="button"
          style={{
        
            color: "#fff",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </div>
      {alert && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "10px",
            borderRadius: "10px",
            marginTop: "20px",
          }}
          className="alert-container"
        >
          <p
            style={{
              fontSize: "26px",
              fontWeight: "bold",
              marginBottom: "10px",
            }}
          >
            - - -  RESULT  - - - 
          </p>
          <p>NUMBER OF NODES : {res.num_nodes}</p>
          <p>NUMBER OF EDGES: {res.num_edges}</p>
          <p>IS DAG ?: {res.is_dag ? "Yes" : "No"}</p>
        </div>
      )}
    </>
  );
};