import { useState } from "react";



function InputComponent(){
    const[inputText, setInputText] = useState('Nikki');

    function handleChangeEvent(e){
        setInputText (e.target.value);
    }
    return (
        <>
        <input value={inputText} onChange={handleChangeEvent}></input>
        <p>You typed: {inputText}</p> 
        <button onClick={() => setInputText('Nikki')}>Reset</button>
        </>
    )
}
export default InputComponent;