
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react'


// const weapons = ["rock", "paper", "sissors"];
// const PCWeapons =[
//     {
//         paper: <img src="paper.png" alt="Paper" height="50" width="50"/>
//     },
//     {
//         rock: <img src="rock.png" alt="Rock" height="50" width="50"/>
//     },
//     {
//         sissors: <img src="sissors.png" alt="Sissors" height="50" width="50"/>
//     },
// ]

// class Round extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
            
//         }
//     }
//     render(){
//         return(
//             <div>

//             </div>
//         )
//     }
// }





// export default class index extends Component {

//     state = {
//         playerOne: weapons[0],
//         playerTwo: weapons[0],
//         winner: ""
//     }

//     render() {
//         return (
//             <div>
//                 <h1>Rock Paper Sissors</h1>
//                 <div>
//                     <Player />
//                 </div>
//                 <div>
//                     <button className="Rock">
//                         rock
//                 </button>
//                     <button className="Paper">
//                         paper
//                 </button>
//                     <button className="Sissocs">
//                         sissors
//                 </button>
//                 </div>
//                 <div className = "winner">winner</div>
//                 <button type = "button"></button>
//             </div>
//         )
//     }
// }


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
