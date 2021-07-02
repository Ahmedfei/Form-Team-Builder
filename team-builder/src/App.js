
import './App.css';
import { useState } from "react";
import TeamMember from "./components/TeamMember.js"
import Member from "./components/Member"

const initialFormInfo = {
  username: '',
  email: '',
  role: '',
  language: ''
}


export default function App() {
  const [teamMembers, setTeamMembers] = useState([])
  const [formInfo, setFormInfo] = useState(initialFormInfo)

  const updateForm = (inputName, inputValue) => {
    setFormInfo({ ...formInfo, [inputName]: inputValue })
  }

  const submitForm = () => {
    const newTeamMember = {
      username: formInfo.username.trim(),
      email: formInfo.email.trim(),
      role: formInfo.role,
      language: formInfo.language,
    }
    setTeamMembers(teamMembers.concat(newTeamMember));
    setFormInfo(initialFormInfo);
  }

  return (
    <div className='App'>
      <TeamMember
        values={formInfo}
        update={updateForm}
        submit={submitForm}
      />

      {teamMembers.map((teamMembers) => {
        return <Member key={teamMembers.id} details={teamMembers} />
      })}
    </div>
  )
}


