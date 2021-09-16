import React from 'react'
import '../css/generalRoom.css';

export default function GeneralRoom() {
    return (
        <div className="chatContainer">
        <header className="chatHeader">
            <h1><i className="fa fa-smile-o" aria-hidden="true"></i> Чат для друзей</h1>
            <a href="index.html" className="btn">Покинуть комнату</a>
        </header>
        <main className="chatMain">
            <div className="chatSidebar">
                <h3><i className="fa fa-comments-o" aria-hidden="true"></i> Название комнаты:</h3>
                <h2 id="roomName">Фора</h2>
                <h3><i className="fa fa-users" aria-hidden="true"></i> Пользователи </h3>
                <ul id="users">
                    <li>Валера</li>
                    <li>Сережа</li>
                </ul>
            </div>
            <div className="chatMessages">
                <div className="message">
                    <p className="meta">Валера <span> 9:12</span></p>
                    <p className="text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
                        repudiandae.
                    </p>
                </div>
            </div>
        </main>
        <div className="chatFormContainer">
            <form id="chatForm">
                <input id="msg" type="text" placeholder="введите сообщение" required autocomplete="on" />
                <button className="btn"><i className="fa fa-paper-plane" aria-hidden="true"></i> Отправить</button>
            </form>
        </div>
    </div>
    )
}
