import React, {useState} from "react"

export default function Forms(props) {
    const [form, setForm] = useState({
id:Date.now(),
role: "", 
name:"",
email:"",

 }
)
const handleChange = (action) =>{
let newInput= {...form ,[action.target.name]:action.target.value}

setForm (newInput)

}
const handleSubmit = (action) => {
action.preventDefault()
props.addnew(form)

}

console.log("props", props)

return(
<form onSubmit= {handleSubmit}>
<label>name</label>

  <input type="text" 
  name="name" 
  placeholder="enter name"
  value={form.name}
  onChange={handleChange}
  />
<label>email</label>
<input type="email" 
name="email" 
value={form.email}
onChange={handleChange}
/>

<label>role</label>
<input type="text"
 name="role" 
 value={form.role}
onChange={handleChange}
 />

<button type="submit"> add new member</button>



    
</form>

);
}