import { Form, Placeholder } from "semantic-ui-react"
import { useContext, useState } from "react"
import { UserContext } from "../providers/UserProvider"

const UserForm = () => {

  const value = useContext(UserContext)

  const [fName, setFName] = useState("")
  const [lName, setLName] = useState("")
  const [emailYo, setEmailYo] = useState("")
  
  const handleSubmit = (e) => {
    value.setUserData({
      firstName:fName,
      lastName:lName,
      email:emailYo
    })
  }

  return(
    <Form onSubmit={handleSubmit}>  
      <Form.Field >
      <label>Email</label> 
      <input 
        placeholder = "Email" 
        value={emailYo} 
        onChange = {(e)=>(setEmailYo(e.target.value))}/>
      </Form.Field>
      <Form.Field >
      <label>First Name</label> 
      <input 
        placeholder = "First Name" 
        value={fName} 
        onChange = {(e)=>(setFName(e.target.value))}/>
      </Form.Field>
      <Form.Field >
      <label>Last Name</label> 
      <input 
        placeholder = "Last Name" 
        value={lName} 
        onChange = {(e)=>(setLName(e.target.value))}/>
      </Form.Field>
      <Form.Button>Sign Up</Form.Button>
    </Form>
    
  )

}

export default UserForm