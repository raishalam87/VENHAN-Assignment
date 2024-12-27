import React, { useState } from 'react';

export function Sidebar({ setElements }) {
  const [nodeLabel, setNodeLabel] = useState('');
  const [nodeId, setNodeId] = useState('');
  const [edgeSource, setEdgeSource] = useState('');
  const [edgeTarget, setEdgeTarget] = useState('');

  const addNode = () => {
    const newNode = {
      id: nodeId,
      data: { label: nodeLabel },
      position: { x: 100, y: 100 }
    };
    setElements((els) => [...els, newNode]);
  };

  const addEdge = () => {
    const newEdge = {
      id: `e${edgeSource}-${edgeTarget}`,
      source: edgeSource,
      target: edgeTarget,
      animated: true
    };
    setElements((els) => [...els, newEdge]);
  };

  return (
    <div style={{ width: '200px', padding: '10px' }}>
      <h3>Sidebar</h3>
      <div>
        <h4>Add Node</h4>
        <input
          type="text"
          placeholder="Node ID"
          value={nodeId}
          onChange={(e) => setNodeId(e.target.value)}
        />
        <input
          type="text"
          placeholder="Node Label"
          value={nodeLabel}
          onChange={(e) => setNodeLabel(e.target.value)}
        />
        <button onClick={addNode}>Add Node</button>
      </div>

      <div>
        <h4>Add Edge</h4>
        <input
          type="text"
          placeholder="Source Node ID"
          value={edgeSource}
          onChange={(e) => setEdgeSource(e.target.value)}
        />
        <input
          type="text"
          placeholder="Target Node ID"
          value={edgeTarget}
          onChange={(e) => setEdgeTarget(e.target.value)}
        />
        <button onClick={addEdge}>Add Edge</button>
      </div>
    </div>
  );
}
