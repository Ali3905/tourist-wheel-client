


import React from 'react';
import CatogeryCard from '../pages/userScreenManagement/userScreenManagementComponents/catorgeryCard';
import { RiDragDropLine } from 'react-icons/ri';
const Item = React.forwardRef(({ withOpacity, data, isDragging, style, ...props }, ref) => {
    const inlineStyles = {
        opacity: withOpacity ? '0.5' : '1',
     
        width: '90px',
        borderRadius: '8px',
        cursor: isDragging ? 'grabbing' : 'grab',
        backgroundColor: '#ffffff',
        boxShadow: isDragging ? 'rgb(63 63 68 / 5%) 0px 2px 0px 2px, rgb(34 33 81 / 15%) 0px 2px 3px 2px' : '',
        transform: isDragging ? 'scale(1.05)' : '',
        ...style,
    };
    return (
        <div style={inlineStyles}>
                  <div ref={ref} {...props} style={{textAlign:'end'}}>
                    <RiDragDropLine/>
                  </div>
            <CatogeryCard data={data} />      
        </div>
    );
});

export default Item;
