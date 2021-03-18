import React, {useState, useContext, useEffect} from 'react'
import { AccountContext } from "./Accounts";

export default function Profile(){
  const {getSession} = useContext(AccountContext)
  const [email, setEmail] = useState('')
  useEffect(()=> {
      getSession()
      .then(session => {
          setEmail(session.idToken.payload.email)
        

      })
  })
    
    return(
    <div><h1>hello world</h1>
    <h1>{email}</h1></div>
    
)
}


