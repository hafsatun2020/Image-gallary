import React from "react"
import { Outlet, Link } from "react-router-dom"
import p1 from "./images/p1.jpg" 
import p2 from "./images/2.jpg" 
import './app.css'
import { Droppable} from './drop';
import { Draggable } from "./drag"
export default function Gallary() {
const p11 = "./images/p1.jpg" 

  return (
    <>
    <div>
    <Draggable id={1}  src={p2}/>
    <Draggable id={2}  src={p11 }/>
    </div>
    </>
  );
  
 
}