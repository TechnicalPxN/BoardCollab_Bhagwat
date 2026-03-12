import React,{useState} from "react";
import {Stage,Layer,Line} from "react-konva";
import socket from "../socket";

function CanvasBoard({roomId}){

 const [lines,setLines]=useState([]);
 const [drawing,setDrawing]=useState(false);

 const handleMouseDown=(e)=>{
   setDrawing(true);
   const pos=e.target.getStage().getPointerPosition();
   setLines([...lines,{points:[pos.x,pos.y]}]);
 };

 const handleMouseMove=(e)=>{
   if(!drawing) return;

   const stage=e.target.getStage();
   const point=stage.getPointerPosition();

   let lastLine=lines[lines.length-1];
   lastLine.points=lastLine.points.concat([point.x,point.y]);

   const newLines=[...lines.slice(0,-1),lastLine];

   setLines(newLines);

   socket.emit("draw",{roomId,line:lastLine});
 };

 const handleMouseUp=()=>{
   setDrawing(false);
 };

 return(
   <Stage
    width={window.innerWidth}
    height={window.innerHeight}
    onMouseDown={handleMouseDown}
    onMousemove={handleMouseMove}
    onMouseup={handleMouseUp}
   >
     <Layer>
      {lines.map((line,i)=>(
        <Line
         key={i}
         points={line.points}
         stroke="black"
         strokeWidth={2}
        />
      ))}
     </Layer>
   </Stage>
 );
}

export default CanvasBoard;
