import { Card, Image } from "semantic-ui-react"

const UserProfile = () => {

  return(
   <Card>
     <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
    <Card.Content>
      <Card.Header>
        Users Full Name
      </Card.Header>
    </Card.Content>
    <Card.Content>
      <Card.Header>
        Users email address
      </Card.Header>
    </Card.Content>
   </Card>
    
  )

}

export default UserProfile