import React, {useState} from 'react';
import {DndContext} from '@dnd-kit/core';

import { Droppable} from './drop';
import {Draggable} from './drag';

export function App() {
  const containers = ['A', 'B'];
  const [parent, setParent] = useState(null);
  const draggableMarkup1 = (
    <Draggable >Drag me</Draggable>
    
  );

  return (
    <DndContext onDragEnd={handleDragEnd}>
      {parent === null ? draggableMarkup1 : null}

      {containers.map((id) => (
        // We updated the Droppable component so it would accept an `id`
        // prop and pass it to `useDroppable`
        <Droppable key={id} id={id}>
          {parent === id ? draggableMarkup1 : 'Drop here'}
        </Droppable>
      ))}
    </DndContext>
  );

  function handleDragEnd(event) {
    const {over} = event;

    // If the item is dropped over a container, set it as the parent
    // otherwise reset the parent to `null`
    setParent(over ? over.id : null);
  }
};