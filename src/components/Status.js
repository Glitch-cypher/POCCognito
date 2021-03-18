import React, {  useContext} from "react";
import { AccountContext } from "./Accounts";
import { useHistory } from 'react-router'

export default function StatusChange({status, setStatus}) {
    console.log(status)
    console.log(setStatus)
    const history = useHistory()
   //State is set that the status is false so you are not logged in automatically. 
   //It then uses the getSession function (see accounts) to determin if the user is logged in or not. 
   //This then is used to decide which response is displayed to the user. if 
    // const [status, setStatus] = useState(false)
    const {logout} = useContext(AccountContext)
  
    
    
    //Within the return statement we have a turniry for if you are logged in the page 
    //renders the log out button. otherwise it tells you to log in.
  return <div>
      {status ? ( 
          <div>
              You are logged in.
              
              <button onClick={()=>{setStatus(false);logout(); history.push('/')}}>Logout</button>
          </div>
      ): 'Please login below.'}
  </div>;
};
