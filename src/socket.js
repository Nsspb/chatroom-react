import {io} from "socket.io-client";
// const socket = () =>{
//     io(`http://localhost:7002/`)
//   }

// "proxy": "http://localhost:1945",
  const socket = io(`http://localhost:1945/`);
//   const socket = io(`http://localhost:7002/`);
  export default socket