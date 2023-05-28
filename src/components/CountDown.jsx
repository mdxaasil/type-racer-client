import React, {useState, useEffect } from 'react';
import socket from '../socketConfig';

const CountDown = props =>{
    const [timer,setTimer] = useState({countDown: "", msg: ""});
    useEffect(()=>{
        socket.on('timer',(data)=>{
            setTimer(data);
        });
        socket.on('done',()=>{
            socket.removeListener('timer');
        });
    },[]);
    
    const {countDown,msg} = timer;

    return (
        <>
            <h1>{countDown}</h1>
            <h3>{msg}</h3>
        </>
    )
}

export default CountDown;