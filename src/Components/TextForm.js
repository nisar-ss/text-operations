import React, { useState } from 'react'

export default function TextForm(props) {

    const handleOnChange = (event) => {
        // console.log("On change ");
        settext(event.target.value)
    }
    const handleupclick = () => {
        // console.log("Uppercase was clicked" + text)
        let newtext = text.toUpperCase()
        settext(newtext)
        props.showAlert("Converted to uppercase","Success")
    }
    const handlelowerclick = () => {
        let newtext = text.toLowerCase()
        settext(newtext)
        props.showAlert("Converted to lowercase","Success")
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }
    const cleartext = () => {
        let newtext = "";
        settext(newtext)
        props.showAlert("Text cleared successfully!","Success")
    }
    const [text, settext] = useState("");
    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h5 style={{  }}><b>{props.heading}</b></h5>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'rgb(80 91 103)' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="mybox" rows="10"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleupclick}>Convert to upper case</button>
                <button className="btn btn-primary mx-2" onClick={handlelowerclick}>Convert to lower case</button>
                <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
                <button className="btn btn-primary mx-2" onClick={cleartext}>Clear Text</button>
            </div><hr />
            <div className="container2 my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black'}}>
                <h5><b>Time to read</b></h5>
                <p><b>{text.split(" ").length - 1}</b> Word(s) and <b>{text.length}</b> Character(s)</p>
                <p><b>{text.split(" ").length * 0.26 / 60 - 0.004333333333333333}</b> Minutes to read</p>
            </div><hr />
            <div className="preview" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h5><stro>Preview</stro></h5>
                <p>{text.length > 0 ? text : "Enter Text above to preview here"}</p>
            </div>
        </>
    )
}
