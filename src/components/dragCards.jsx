import React, { useState, useCallback } from 'react';
import {
    DndContext,
    closestCenter,
    MouseSensor,
    TouchSensor,
    DragOverlay,
    useSensor,
    useSensors,
} from '@dnd-kit/core';
import { arrayMove, SortableContext, rectSortingStrategy } from '@dnd-kit/sortable';
import DragGrid from './dragGrid';
import SortableItem from './dragSortable';

const DragCards = ({ initialItems }) => {
    const [items, setItems] = useState(initialItems);
    const [activeId, setActiveId] = useState(null);
    const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));

    const handleDragStart = useCallback((event) => {
        setActiveId(event.active.id);
    }, []);
    const handleDragEnd = useCallback((event) => {
        const { active, over } = event;

        if (active.id !== over?.id) {
            setItems((items) => {
                const oldIndex = items.findIndex((item) => item.id === active?.id);
                const newIndex = items.findIndex((item) => item.id === over?.id);
                return arrayMove(items, oldIndex, newIndex);
            });
        }

        setActiveId(null);
    }, []);
    const handleDragCancel = useCallback(() => {
        setActiveId(null);
    }, []);

    return (
        <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragStart={handleDragStart}
            
            onDragEnd={handleDragEnd}
            onDragCancel={handleDragCancel}
        >
            <SortableContext items={items.map((item) => item.id)} strategy={rectSortingStrategy}>
                <DragGrid columns={9} data={items}>
                    {items.map((val) => (
                        <SortableItem key={val.id} id={val.id} data={val} />
                    ))}
                </DragGrid>
            </SortableContext>
            <DragOverlay adjustScale style={{ transformOrigin: '0 0 ' }}>
                {activeId}
            </DragOverlay>
        </DndContext>
    );
};

export default DragCards;
