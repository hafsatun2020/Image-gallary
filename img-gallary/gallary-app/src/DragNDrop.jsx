import React, {useState, useRef, useEffect} from 'react'

function DragNDrop({data}) {
console.log(data)
    //const [list, setList] = useState(data); 
    const [dragging, setDragging] = useState(false);

    const dragItem = useRef();
    const dragItemNode = useRef();
    
    const handletDragStart = (e) => {
        console.log('Starting to drag', e.target)

        dragItemNode.current = e.target;
        dragItemNode.current.addEventListener('dragend', handleDragEnd)
        dragItem.current = item;

        setTimeout(() => {
            setDragging(true); 
        },0)       
    }
    const handleDragEnter = (e, targetItem) => {
        console.log('Entering a drag target', targetItem)
        if (dragItemNode.current !== e.target) {
            console.log('Target is NOT the same as dragged item')
            
        }
    }
    const handleDragEnd = (e) => {
        setDragging(false);
        dragItem.current = null;
        dragItemNode.current.removeEventListener('dragend', handleDragEnd)
        dragItemNode.current = null;
    }
   

        return (                
            <div className="drag-n-drop">
           
              <div key={1} onDragEnter={ (e) => handleDragEnter(e)} className="dnd-group">
               
                  <div draggable key={1}  onDragStart={(e) => handletDragStart(e)} onDragEnter={dragging?(e) => {handleDragEnter(e)}:null} 
                        className={!dragging && "dnd-item"}>
                  
                  </div>
               
              </div>
           
            </div>
        )
  

}

export default DragNDrop;