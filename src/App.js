import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Grid from './Grid';

function App() {
    const [gridData, setGridData] = useState([
        ['Name 1', 'Name 2', 'Name 3', 'Name 4'],
        ['Name 5', 'Name 6', 'Name 7', 'Name 8'],
        ['Name 9', 'Name 10', 'Name 11', 'Name 12'],
        ['Name 13', 'Name 14', 'Name 15', 'Name 16'],
    ]);

    return (
        <DndProvider backend={HTML5Backend}>
            <div className="App">
                <Grid gridData={gridData} setGridData={setGridData} />
            </div>
        </DndProvider>
    );
}

export default App;
