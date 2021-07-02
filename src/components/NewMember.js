import React from "react";
import "semantic-ui-css/semantic.min.css";


export default function NewMember(props) {
  console.log("props", props);
  return (
    <div>
      {props.team.map((team) => (
        <div>
          <card>
            <p className="team">{team.name}</p>

            
            <h4>{team.role}</h4>
            <p>{team.email}</p>
          </card>
        </div>
      ))}
    </div>
  );
}
