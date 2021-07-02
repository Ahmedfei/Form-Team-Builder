
import React, {useState} from "react"
import Forms from "./components/Forms";
import NewMember from "./components/NewMember";


export default function App() {

     
    const [team, setTeam]= useState([])


const addnewTeam =(teamMember) => {
    let newTeam =[...team , {...teamMember}]
    setTeam (newTeam)
}
       
return(
<div className="App">

< NewMember team={team}  />

< Forms addnew={addnewTeam} />

</div>

);
}