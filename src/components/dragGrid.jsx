import React from 'react';

const DragGrid = ({ children, columns}) => {
    return (
        <div
            style={{
                display: 'grid',
                placeItems:'center',
                gridTemplateColumns: `repeat(${columns}, 1fr)`,
                gridGap: 10,
            }}
        >
       
            {children}
        </div>
    );
};

export default DragGrid;
