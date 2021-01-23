import React,{useState} from 'react'
import './App.css'
import Lightbox from "./Lightbox"

function App() {

  const [OnOff, setOnOff] = useState(true)

  return (
    <div className="container">
      <div className="row mt-4 mb-4">
        <div className="col-md-12 text-center">
          <button onClick={()=>setOnOff(true)}>Turn On All</button> &nbsp;&nbsp;
          <button onClick={()=>setOnOff(false)}>Turn Off All</button>
        </div>
      </div>
      <div className="row">
        <Lightbox status={OnOff} />
        <Lightbox status={OnOff} />
        <Lightbox status={OnOff} />
        <Lightbox status={OnOff} />
        <Lightbox status={OnOff} />        
      </div>
    </div>
  );
}

export default App;
