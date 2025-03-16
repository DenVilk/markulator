import { useState, useEffect } from 'react';
import './Test.css';
import Button from './components/Button/Button';


const Test = () => {
    const [marks, setMarks] = useState(!!(localStorage.getItem('marks'))?JSON.parse(localStorage.getItem('marks')):[]);
    const [currentMark, setCurrentMark] = useState(0);
    const [currentAvg, setCurrentAvg] = useState(0.0);

    useEffect(()=>{
        let ans = 0;
        for (let i=0;i<marks.length;i++){
            ans += marks[i];
        }
        if (marks.length == 0) setCurrentAvg(0.0);
        else setCurrentAvg(ans/(marks.length));
    }, [marks])

    const addMark = (mark)=>{
        setMarks([...marks, parseInt(mark)]);
        setCurrentMark(mark)
    }

    const removeMark = (index) => {
        let l = [];
        for (let i=0;i<marks.length;i++)
            if (i!=index){
                l.push(marks[i])
            }
        setMarks([...l]);
    }

    const buttonHandler = (e) => {
        console.log("test2", marks.length)
        addMark(e.target.value);
        console.log("test2", marks.length)
    }

    return (
        <>
            <div className="display">
                <span className="current-mark">{currentMark}</span>
                <span className="current-avg">Average: {currentAvg}</span>
            </div>
            <div className="history">
                <div className="history-marks">
                    {
                        marks &&
                            "History" &&
                            marks.map((item, index)=>(
                                <div className="history-mark" key={index}>
                                    <span>{item}</span>
                                    <a className="delete-mark" onClick={e => removeMark(index)}>x</a>
                                </div>
                            ))
                    }
                </div>
            </div>
            <div className="keyboard">
                <Button value='1' className='one' callback={buttonHandler}/>
                <Button value='2' className='two' callback={buttonHandler}/>
                <Button value='3' className='three' callback={buttonHandler}/>
                <Button value='4' className='four' callback={buttonHandler}/>
                <Button value='5' className='five' callback={buttonHandler}/>
                <Button value='6' className='six' callback={buttonHandler}/>
                <Button value='7' className='seven' callback={buttonHandler}/>
                <Button value='8' className='eight' callback={buttonHandler}/>
                <Button value='9' className='nine' callback={buttonHandler}/>
                <Button value='10' className="ten" callback={buttonHandler}/>
            </div>
        </>
    )
}

export default Test;