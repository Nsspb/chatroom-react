import './App.css';
import {io} from "socket.io-client";



function App() {
  const connectSocket = () =>{
    io(`http://localhost:7002/`)
  }
  return (
    <div className="App">
     <button onClick={connectSocket} >Перейти</button>
    </div>
  );
}

export default App;
