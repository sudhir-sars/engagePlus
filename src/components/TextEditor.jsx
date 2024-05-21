import React, { useState } from "react";
import { Editor } from "primereact/editor";

const TextEditor = ({text,setText}) => {
  
  
  return (
    <div>
      <div className="card flex justify-center rounded-xl p-4 ">
        <Editor 
          value={text} 
          className="bg-white w-[50vw] " 
          onTextChange={(e) => setText(e.htmlValue)} 
          style={{ height: '320px',  }} 
        />
      </div>
    </div>
  )
}

export default TextEditor;
