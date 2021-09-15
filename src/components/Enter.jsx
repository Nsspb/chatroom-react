import React from 'react'
import '../css/enter.css';
import socket from '../socket';
import { useState } from 'react';


export default function Enter() {
    // const [roomId, setRoomId] = useState('')
    const [userName, setUserName] = useState('')
    // const bbb = () =>{
    //     alert(userName)
    // }
    return (
        <div className="loginContainer">
        <header className="header">
            <h1><i className="zagolovok"></i> Чат для друзей</h1>
        </header>
        <main className="loginMain">
            <form>
                <div className="formaLogin">
                    <label htmlFor="username">Логин</label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Введите имя"
                        required
                        value={userName}
                        onChange={e => setUserName(e.target.value)}
                    />
                </div>
                <div className="formaLogin">
                    <label htmlFor="room">Разговоры о...</label>
                    <select name="room" id="room">
                        <option value="Fora">Фора</option>
                        <option value="Soft">Софт</option>
                 </select>
                </div>
                <button onClick={socket} className="btn" type="submit" >Перейти</button>
            </form>
        </main>
    </div>
    )
}
