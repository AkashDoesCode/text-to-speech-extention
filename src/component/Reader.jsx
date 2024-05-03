import React, { useEffect, useState } from 'react'

function Reader() {
  const [alert, setAlert] = useState(false);
  const[text , setText] = useState('');
  
  
  
  
  const speak = () =>{
    const synth = window.speechSynthesis;
    let voices= synth.getVoices();
    let utterThis = new SpeechSynthesisUtterance(text);
    utterThis.voice = voices[6];
    utterThis.pitch = 1;
    utterThis.rate = 1;
    synth.speak(utterThis);
    utterThis.onend=()=>{
      setAlert(false);
      window.getSelection().removeAllRanges();
    }
  }

  const cancel =() =>{
    window.speechSynthesis.cancel();
    setAlert(false);
    window.getSelection().removeAllRanges();
  }


  useEffect(()=>{
      const handleEvent = () =>{
        const select = window.getSelection();
        if(select && select.toString()){
          setText(select.toString());
          setAlert(true);
        }
      }
      window.addEventListener('mouseup', handleEvent);
  },[])

  

  
  return (
    <div >
        {alert && <div className='fixed top-2 right-0 left-0 mx-auto my-0 w-52 p-5 rounded-md bg-slate-700 text-red-400'>
          want me to read ?
          <div className='flex justify-around mt-2'>
            <button className='scale-75' onClick={speak}>yes</button>
            <button className='scale-75' onClick={cancel}>no</button>
          </div>
        </div>}
        hvjhnjkkug khkfjhhsfiwgi jsafahijaijiawh gasfhauwhiwhi jhgauhuahwurw
    </div>
  )
}

export default Reader