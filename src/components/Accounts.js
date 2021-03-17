import React, { createContext } from "react";
import Pool from "../UserPool";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
const AccountContext = createContext();

const Account = props => {

    //getSession gets the current information for if a user is logged in or not. 
    //Returns a promise
    //We get access to the user via Pool, and we check if the user is valid. 
    //If user exists but we get an err reject, else return the session information. 
    //If user doesn't exist reject
    const getSession = async () =>
    await new Promise((resolve, reject) => {
      const user = Pool.getCurrentUser();
      if (user) {
        user.getSession((err, session) => {
          if (err) {
            reject();
          } else {
            resolve(session);
          }
        });
      } else {
        reject();
      }
    });
  const authenticate = async (Username, Password) => 
    await new Promise((resolve, reject) => {
      const user = new CognitoUser({ Username, Pool });
      const authDetails = new AuthenticationDetails({ Username, Password });

      user.authenticateUser(authDetails, {
        onSuccess: (data) => {
          console.log("onSuccess", data);
          resolve(data)
        },

        onFailure: (err) => {
          console.log("onFailure", err);
          reject(err)
        },

        newPasswordRequired: (data) => {
          console.log("newPasswordRequired", data);
          resolve(data)
        },
      });
    });
    const logout = () => {
        const user = Pool.getCurrentUser();
        if (user) {
            user.signOut();
        }
    }
 
  return( 
  <AccountContext.Provider value={{
      authenticate,
      getSession,
      logout
  }}>
{props.children}
  </AccountContext.Provider>
  );
};

export { Account, AccountContext };
