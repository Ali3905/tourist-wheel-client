import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Item from "./dragItem";

const DragSortable = ({ id, data }) => {
    const {
        isDragging,
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition
    } = useSortable({ id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition: transition || undefined,
    };

    return (
        <Item
            ref={setNodeRef}
            style={style}
            withOpacity={isDragging}
            data={data}
            {...attributes}
            {...listeners}
            isDragging={isDragging}
        />
    );
};

export default DragSortable;
