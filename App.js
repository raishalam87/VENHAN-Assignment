import React, { useState } from 'react';
import ReactFlow, { MiniMap, Controls, ReactFlowProvider } from 'react-flow-renderer';
import { Sidebar } from './Sidebar';  // Component for metadata input

const initialMetadata = {
  nodes: [
    { id: '1', type: 'input', data: { label: 'Node 1' }, position: { x: 50, y: 50 } },
    { id: '2', type: 'output', data: { label: 'Node 2' }, position: { x: 250, y: 50 } }
  ],
  edges: [
    { id: 'e1-2', source: '1', target: '2', animated: true }
  ]
};

function App() {
  const [elements, setElements] = useState([...initialMetadata.nodes, ...initialMetadata.edges]);

  const onElementsRemove = (elementsToRemove) => {
    setElements((els) => els.filter((el) => !elementsToRemove.includes(el)));
  };

  const onConnect = (params) => {
    setElements((els) => [...els, { ...params, id: `e${params.source}-${params.target}` }]);
  };

  return (
    <ReactFlowProvider>
      <div style={{ height: '100vh', display: 'flex' }}>
        <Sidebar setElements={setElements} /> {/* Sidebar to add/edit nodes */}
        <div style={{ flex: 1 }}>
          <ReactFlow
            elements={elements}
            onElementsRemove={onElementsRemove}
            onConnect={onConnect}
            deleteKeyCode={46} // Delete on press of "Delete" key
          >
            <MiniMap />
            <Controls />
          </ReactFlow>
        </div>
      </div>
    </ReactFlowProvider>
  );
}

export default App;
