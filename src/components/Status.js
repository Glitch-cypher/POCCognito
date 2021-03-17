import React, { useState, useContext, useEffect } from "react";
import { AccountContext } from "./Accounts";

export default function Status() {
    const [status, setStatus] = useState(false)
    const {getSession, logout} = useContext(AccountContext)

    useEffect(()=> {
        getSession()
        .then(session => {
            console.log('session:', session)
            setStatus(true)
        })
    }, [])
    //Within the return statement we have a turniry for if you are logged in the page 
    //renders the log out button. otherwise it tells you to log in.
  return <div>
      {status ? ( 
          <div>
              You are logged in.
              <button onClick={logout}>Logout</button>
          </div>
      ): 'Please login below.'}
  </div>;
};
