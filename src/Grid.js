import React from 'react';
import Cell from './Cell';

const Grid = ({ gridData, setGridData }) => {
    return (
        <div className="grid">
            {gridData.map((row, rowIndex) => (
                <div key={rowIndex} className="grid-row">
                    {row.map((name, columnIndex) => (
                        <Cell
                            key={columnIndex}
                            name={name}
                            row={rowIndex}
                            col={columnIndex}
                            gridData={gridData}
                            setGridData={setGridData}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Grid;
