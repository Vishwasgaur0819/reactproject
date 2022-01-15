import React, { useState } from 'react';

const TextForm = (props) => {

    const [text, settext] = useState('Enter Text Here...');
    const [btntext, setBtntext] = useState('Upper Case')

    const handleUPClick = () => {
       

        
        let lw = text.toLowerCase()
        
        if (text === lw) {
            let newtext = text.toUpperCase()
            settext(newtext);
            
            setBtntext('Lowercase')
        }else{
            let newtext = text.toLowerCase()
            settext(newtext)
            setBtntext('Uppercase')
            

        }

    }

    const handlecopy=()=>{
        let textarea = document.getElementById('mybox');
        textarea.select();
        navigator.clipboard.writeText(textarea.value)
    }
    

    return (
        <>
            <div className='container'>

                <div className="mb-3">
                    <h1>{props.heading}</h1>
                    <textarea value={text} onChange={(event) => settext(event.target.value)} className="form-control" id="mybox" rows="8" cols="100"></textarea>

                </div><br />
                <button id='btn' onClick={() => handleUPClick()}>{btntext}</button>
                <button onClick={()=>handlecopy()}>Copy text</button>
                

            </div>
            <div className='container my-3'>

                <p>No. OF characters :- {text.split('').length} and Words are :-{text.split(" ").length - 1}</p>


            </div>
        </>
    )
}

export default TextForm
