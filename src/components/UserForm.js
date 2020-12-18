import { Form, Placeholder } from "semantic-ui-react"

const UserForm = () => {

  return(
    <Form>  
      <Form.Field >
      <label>Email</label> 
      <input placeholder = "Email" />
      </Form.Field>
      <Form.Field >
      <label>First Name</label> 
      <input placeholder = "First Name" />
      </Form.Field>
      <Form.Field >
      <label>Last Name</label> 
      <input placeholder = "Last Name" />
      </Form.Field>
      <Form.Button>Sign Up</Form.Button>
    </Form>
    
  )

}

export default UserForm