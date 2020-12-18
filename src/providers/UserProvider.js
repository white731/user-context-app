import React from "react"
import { useState } from "react"

export const UserContext = React.createContext()
// export const UserConsumer = UserContext.Consumer


const startData = {
  email: "landon@treesource.com",
  firstName: "Landon",
  lastName: "Whitesides",
}

const UserProvider = (props) => {

  const [userData, setUserData] = useState(startData)
  // const [updateUser, setUpdateUser] = useState((x)=>{setUserData(x)})
  // console.log(userData)

  const userConfig = {
    setUserData,
    userData,
  }

  return (
    <UserContext.Provider value={userConfig}> 
      {props.children}
    </UserContext.Provider>
  )
}

export default UserProvider