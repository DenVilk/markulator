import './App.css'
import { useState } from "react";
import Button from "./components/Button/Button";

function App() {
  const [marks, setMarks] = useState(!!(localStorage.getItem('marks'))?JSON.parse(localStorage.getItem('marks')):[]);
  const [currentMark, setCurrentMark] = useState(0);

  const addMark = (mark)=>{
    console.log(mark)
  }

  const evaluate = () => {}

  return (
    <>
    <div className="app">
      <input type="number" className="mark" value={currentMark}/>
      <div className="buttons">
        <div className="marks">
          <div className="buttons-column">
            <Button value='1' callback={e => addMark(e.target.value)}/>
            <Button value='2' callback={e => addMark(e.target.value)}/>
            <Button value='3' callback={e => addMark(e.target.value)}/>
          </div>
          <div className="buttons-column">
            <Button value='4' callback={e => addMark(e.target.value)}/>
            <Button value='5' callback={e => addMark(e.target.value)}/>
            <Button value='6' callback={e => addMark(e.target.value)}/>
            <Button value='10' callback={e => addMark(e.target.value)}/>
          </div>
          <div className="buttons-column">
            <Button value='7' callback={e => addMark(e.target.value)}/>
            <Button value='8' callback={e => addMark(e.target.value)}/>
            <Button value='9' callback={e => addMark(e.target.value)}/>
          </div>
          <div className="buttons-column">
            <Button value='=' className='equals' callback={evaluate}/>
          </div>
          {/* <div className="buttons-row">
          </div>
          <div className="buttons-row">
          </div>
          <div className="buttons-row">
          </div> */}
        </div>
      </div>
    </div>
    </>
  )
}

export default App
