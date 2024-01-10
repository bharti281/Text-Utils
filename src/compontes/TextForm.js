import React, { useState } from "react";

export default function TextForm(props) {
    const handelUpClick=()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to upper case","success")
    
    }
    const handelLowClick=()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lower case","success")
    
    } 
    const ClearText=()=>{
        let newText = "";
        setText(newText)
        props.showAlert("Clean Text","success")
    
    }
     const removeSpace=()=>{
        let newText = text.replaceAll("  "," ")
        setText(newText)
        props.showAlert("Your spaces has been remove","success")
    
    }
    const copyText=()=>{
        navigator.clipboard.writeText(text)
        props.showAlert("Copy to clipboard","success")
    
    }
     const handelOnChange=(event)=>{
        setText(event.target.value)
    }
    const [text, setText]= useState('') 
  
  return (
    <>
   
    <div className={`container text-${props.text}` } style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>{props.heading}</h2>
      <div className="mb-3"> 
        <textarea
          className="form-control"
          id="myBox"
          rows={8}
          onChange={handelOnChange}
          placeholder="Enter your text"
          value={text}
          style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}
        />
      </div>
      <button className="btn btn-primary mx-3" onClick={handelUpClick}>Convert to UpperCase</button>  
      <button className="btn btn-primary  mx-3" onClick={handelLowClick}>Convert to LowerCase</button>
      <button className="btn btn-primary mx-3" onClick={ClearText}>Clear Text</button>
      <button className="btn btn-primary mx-3 " onClick={removeSpace}>Remove Space</button>
      <button className="btn btn-primary mx-3 " onClick={copyText}>Copy Text</button>
    </div>
    <div className={`container my-3 text-${props.text}`} style={{color:props.mode==='dark'?'white':'black'}}>
        <h3>Your text summary</h3>
        <p>{text.split(" ").length-1} words and {text.length} characters</p>
        <p>{0.008 *text.split(" ").length} Time to read</p>
        <h3>Preview</h3>
        <p>{text.length>0 ? text :"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  );
}
