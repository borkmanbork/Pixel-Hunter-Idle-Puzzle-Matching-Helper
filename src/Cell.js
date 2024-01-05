import React from 'react';
import { useDrag, useDrop } from 'react-dnd';

const Cell = ({ name, row, col, gridData, setGridData }) => {
    const [{ isDragging }, drag] = useDrag({
        type: 'CELL',
        item: { name, row, col },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    });

    const [{ canDrop, isOver }, drop] = useDrop({
        accept: 'CELL',
        drop: (item) => {
            const newGridData = [...gridData];
            newGridData[item.row][item.col] = name;
            newGridData[row][col] = item.name;
            setGridData(newGridData);
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop(),
        }),
    });

    const isActive = canDrop && isOver;

    return (
        <div
            ref={(node) => drag(drop(node))}
            className={`cell ${isActive ? 'active' : ''} ${isDragging ? 'dragging' : ''}`}
        >
            {name}
        </div>
    );
};

export default Cell;
