import { useRef, useState } from "react";
import "./Light.css";

function Light(params) {
    const [time, setTime]= useState(0);
    const timerRef = useRef(0);
    const timeoutRef = useRef(null);
    const intervalRef = useRef(null)
    const [bet, setBet] = useState(0)
    const [litr, setLitr] = useState("redlight")
    const [litrr, setLitrr] = useState("redlight")
    const [litg, setLitg] = useState("greenlight")
    
    function handleStart(params) {
        setBet(1);
        setTimeout(() => {
            setLitr("redlighton")
        }, 1000);
        setTimeout(() => {
            setLitrr("redlighton")
        }, 2000);
        
        timeoutRef.current = setTimeout(() => {
            timerRef.current = new Date().getTime();
            intervalRef.current = setInterval(() => {
                setTime(new Date().getTime() - timerRef.current);
            }, 1);
            setLitg("greenlighton") 
            setBet(2)
        }, 3400);
    }

    function handleMis(params) {
        setBet(1.2);
        clearInterval(intervalRef.current);
        clearInterval(intervalRef.current);
        clearTimeout(timeoutRef.current);
        setTime(0);

    }

    function handleStop(params) {
        clearInterval(intervalRef.current);
        setBet(3);
    }

    function handleNew(params) {
        clearInterval(intervalRef.current);
        setTime(0);
        setBet(0);
        setLitr("redlight");
        setLitrr("redlight");
        setLitg("greenlight");
    }

    function arengeTime(params) {
        const ms = Math.floor(time % 1000).toString().padStart(3,"0");
        const s = Math.floor((time / 1000) % 60).toString().padStart(2,"0");

        return `${s} : ${ms}`;
    }

    if (bet===0) {
        return(
        <>
        <div className="mlight">
        <div className="redlight"></div>
        <div className="redlight"></div>
        <div className="greenlight"></div>
        </div>
        <span className="display">{arengeTime()}</span>
        <div className="btndiv"><button className="btn" onClick={handleStart} >START</button></div>
        </>
        )
    }
    else if(bet === 1){
        return(
            <>
                <div className="mlight">
                    <div className={litr}></div>
                    <div className={litrr}></div>
                    <div className={litg}></div>
                </div>
                <span className="display">{arengeTime()}</span>
                <div className="btndiv"><button className="btnstop" onClick={handleMis} >STOP</button></div>
            </>
        )
    }
    
    else if(bet === 1.2){
        return(
            <>
                <div className="mlight">
                    <div className="redlighton"></div>
                    <div className="redlighton"></div>
                    <div className="redlighton"></div>
                </div>
                <span className="display">Missed!!!</span>
                <div className="btndiv"><button className="btnnew" onClick={handleNew} >TRY AGAIN</button></div>
            </>
        )
    }
    else if(bet === 2){
        return(
            <>
                <div className="mlight">
                    <div className={litr}></div>
                    <div className={litrr}></div>
                    <div className={litg}></div>
                </div>
                <span className="display">{arengeTime()}</span>
                <div className="btndiv"><button className="btnstop" onClick={handleStop} >STOP</button></div>
            </>
        )
    }
    else if(bet === 3){

        return(
        <>
        <div className="mlight">
        <div className="redlighton"></div>
        <div className="redlighton"></div>
        <div className="greenlighton"></div>
        </div>
        <span className="display">{arengeTime()}</span>
        <div className="btndiv"><button className="btnnew" onClick={handleNew} >TRY AGAIN</button></div>
        <br /><br />
        <div><center>Developer`s score --  00 : 046</center></div>
        </> 
        );
    }
    
};

export default Light;