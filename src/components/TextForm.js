import React, {useState} from 'react'




export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("UpperCase was clicked" + text);
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showAlert("Converted to upperCase", "success");
    }
    const handleLoClick = () =>{
        // console.log("LowerCase was clicked" + text);
        let newtext = text.toLowerCase();
        setText(newtext)
        props.showAlert("Converted to lowerCase", "success");
    }
    
    const handleClear = () =>{
        // let string = " "
        // console.log("Text Clear was clicked" + text);
        // let newtext = text.slice(text.length)
        let newtext = " "
        setText(newtext)
        props.showAlert("Text was Clear", "success");
    }
    const handleClipboard = async () =>{
        // Get the text field
        var copyText = document.getElementById("myBox");
        
        // Select the text field
        copyText.select();
        copyText.setSelectionRange(0, 99999); 
        navigator.clipboard.writeText(copyText.value);
 
        props.showAlert("Copied to clipboard", "success");
        
    }
    const handleSpaces = () =>{
        // console.log("Extra spaces was Handled")
        let newtext = text.split(/[ ]+/);
        setText(newtext.join([" "]))
        props.showAlert("Handled extra spaces", "success");
        
    }

    
    const handleOnChange = (event) =>{
        // console.log("On Change was happens")
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    
    function WordCount(str) { 
        return str.split(' ').length;
      }
      

    return (
        <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                {/* <label htmlFor="myBox" className="form-label"></label> */}
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{background: props.mode==='dark'?'black':'white', color: props.mode==='dark'?'white':'black', transition: '0.8s'}} id="myBox" placeholder='Enter text here' rows="8"></textarea>
            </div>
            <button className="btn btn-primary m-1" onClick={handleUpClick} >Convert To UpperCase</button>
            <button className="btn btn-primary m-1" onClick={handleLoClick} >Convert To LowerCase</button>
            <button className="btn btn-primary m-1" onClick={handleClear} >Clear Text</button>
            <button className="btn btn-primary m-1" onClick={handleClipboard} >Copy To Clipboard</button>
            <button className="btn btn-primary m-1" onClick={handleSpaces} >Handle Extra Spaces</button>
            
        </div>
        <div className="container my-2">
            <h1>Your Text Summary</h1>
            <p>3432 words, {WordCount(text)} Character</p>
            <p> {0.00167 * text.length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something to preview"} </p>
           
        </div>

        </>
    )
    
}
