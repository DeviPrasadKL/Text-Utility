import React, {useState} from 'react';

export default function TextForm(props) {
    const [text, setText] = useState("")
    // text = "New text"  This is wrong way to change the text data

    const handleUpperCase = ()=>{
        // console.log("Upper case is clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("success", "Text converted to UpperCase");
    }

    const handleLowerCase = ()=>{
        // console.log("Lower case is clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("success", "Text converted to LowerCase");
    }

    const handleOnChange = (event)=>{
        // console.log("Onchange is clicked");
        setText(event.target.value);
    }

    const handleClear = ()=>{
        //Clearing the text
        setText("");
        props.showAlert("danger", "Text Cleared");
    }

    const handleCopy = ()=>{
        let text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("success", "Text Copied");
    }

    const handleExtraSpace = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("success", "Extra spaces has been removed");
    }
    return (
        <>
        <div>
            <h2 className={`text-${props.mode==='dark' ? 'light':'dark'}`}>{props.heading}</h2>
            <div className="box">
                <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'?'#384b7e':'white' ,
                 color:props.mode==='dark'?'white':'black'}} onChange={handleOnChange} id="mybox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary my-3 mx-1" disabled={text.length===0} onClick={handleUpperCase}>Convert to UpperCase</button>
            <button className="btn btn-primary my-3 mx-1" disabled={text.length===0} onClick={handleLowerCase}>Convert to LowerCase</button>
            <button className="btn btn-danger my-3 mx-1" disabled={text.length===0} onClick={handleClear}>Clear text</button> 
            <button className="btn btn-success  my-3 mx-1" disabled={text.length===0} onClick={handleCopy}>Copy text</button>
            <button className="btn btn-primary my-3 mx-1" disabled={text.length===0} onClick={handleExtraSpace}>Remove Extra Space</button>
        </div>
        <div className={`container text-${props.mode==='dark' ? 'light':'dark'}`}>
            <h2>Text Summary</h2>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} Letters</p>
            <p>Average reading time= {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:'Nothing to Preview'}</p>
        </div>
        </>
    );
}
