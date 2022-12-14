import React, { useState } from 'react'
import propTypes from 'prop-types'



export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const swapCaseClick = () => {
        let newLetters = "";
        for(let i = 0; i < text.length; i++) {
            if(text[i] === text[i].toLowerCase()){
                newLetters += text[i].toUpperCase();
            } else {
                newLetters += text[i].toLowerCase();
            }
        }

        setText(newLetters);
    }

    const handleOnChange = (e) => {
        setText(e.target.value);
    }

    // const handleOnFocus = (e) => {
    //     setText("");
    // }
    // onFocus={handleOnFocus}

    const [text, setText] = useState('');

    return (
        <>
            <div className='container' style={{color: props.mode === 'dark' ? 'white':'black'}} >
                <h1>{props.heading}</h1>

                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} rows="8"
                    style={{backgroundColor: props.mode === 'dark' ? 'grey':'white', color: props.mode === 'dark' ? 'white':'black'}}>

                    </textarea>
                </div>

                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}> Convert to uppecase </button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}> Convert to lowercase </button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={swapCaseClick}> Convert to invert case </button>
            </div>

            <div className="container my-5" style={{color: props.mode === 'dark' ? 'white':'black'}} >
                <h1> Your text summary </h1>

                <p> {text.split(" ").filter((element)=>{return element.length !== 0}).length} word(s), {text.length} character(s)</p>
                <p> { 0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length } Minutes to read </p>

                <h2>Preview</h2>
                <p>{text === "" ? 'Enter some text in above textBox to preview here.': text}</p>
            </div>
        </>
    )
}

TextForm.propTypes = {
    heading: propTypes.string
}