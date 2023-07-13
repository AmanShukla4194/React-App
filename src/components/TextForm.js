import React, {useState} from 'react'

export default function TextForm(props) {

    const [text, setText] = useState(''); 
    // text is a variable whose default value here is "Enter text here"
    // setText is a method whic is used to change thge state(update) of the variable text
    // useState returns an array whose first parameter is text and second parameter is setText
    // text ="cguchkuchihc" wrong way to update the text in react;
    // setText("efvvevceve");

    const handleUpClick = ()=>{
        // console.log("UpperCase " + text);
        let uptext = text.toUpperCase();
        setText(uptext);
    }
    const handleLoClick = ()=>{
        // console.log("UpperCase " + text);
        let lotext = text.toLowerCase();
        setText(lotext);
    }
    const handleClearClick = ()=>{
        // console.log("UpperCase " + text);
        let newtext = ''
        setText(newtext);
    }
    const handleOnChange = (event)=>{ // listening the event here
        // console.log("Change");
        setText(event.target.value); // then update the text after listening the event
    }
    const handleCopy = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    
    // Calculate word count only when text is not empty
    const wordCount = text.trim() !== '' ? text.split(' ').length : 0;

    return (
        <>
        <div className='container' style={{color: props.mode==='dark'?'white':'black'}}  >
            <h1>{props.heading}</h1>
            <div className="my-4" style={{border:'2px solid black'}}>
                <textarea className="form-control" value={text} placeholder='Enter Text here' onChange={handleOnChange} id="myBox" rows="12" style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode=== 'dark'?'white':'black'}}></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-4" onClick={handleLoClick}>Convert to LowerCase</button>
            <button className="btn btn-primary" onClick={handleClearClick}>Clear text</button>
            <button className="btn btn-primary mx-4" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-0" onClick={handleExtraSpaces}>Remove extra spaces</button>
        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}} >
            <h2>Your text summary</h2>
            <span><b>{wordCount} words, {text.length} characters and </b></span>
            <span><b>{0.015*wordCount} Minutes to read</b></span>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter some text in the above text area to get the preview here"}</p>
        </div>
        </>
    )
}
