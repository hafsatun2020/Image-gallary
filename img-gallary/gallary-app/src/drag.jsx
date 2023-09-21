import {useDraggable} from '@dnd-kit/core';
import Gallary from './gallary'

export function Draggable(props) {
  const {attributes, listeners, setNodeRef} = useDraggable({
    id: props.id,
  });
  
  console.log(props)
  return (
    <div ref={setNodeRef}>
      <img src={props.src} alt="" {...listeners} {...attributes}/>
    
    
    </div>
  );
}