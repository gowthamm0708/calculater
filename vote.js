import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
function App() {
  const [people,setPeople] = useState([
    {
      "name":"zero",
      "votes":0
    },
    {
      "name":"autumn",
      "votes":0
    }
  ])
  
  const voting = (id)=> {
    var newPeople = Object.assign([],people);
    newPeople[id].votes+=1
    setPeople(newPeople)
  
  }
  
    return (
     <>
     <div>hey</div>
     {
       people.map((data,index) =>
       {
         return(
           <>
          <div key={index}>
            name: {data.name}
          vote: {data.votes}
          
          <button onClick={() => voting(index)}>
  vote</button>
  </div>
          </>
         )  
       })
     }   
     </>
    );
  }
  export default App;
