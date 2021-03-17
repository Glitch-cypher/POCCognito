import React, {useState, useContext, useEffect} from 'react'
import { AccountContext } from "./Accounts";
import Pool from "../UserPool";
import { CognitoUser } from "amazon-cognito-identity-js";

export default function Profile(){
  const {getSession} = useContext(AccountContext)
  const [email, setEmail] = useState('')
  useEffect(()=> {
      getSession()
      .then(session => {
          setEmail(session.idToken.payload.email)
        

      })
  }, [])
    
    return(
    <div><h1>hello world</h1>
    <h1>{email}</h1></div>
    
)
}


{/* // var data = {  */}
{/* //     UserPoolId : _config.cognito.userPoolId,
//     ClientId : _config.cognito.clientId
// };
// var userPool = new AmazonCognitoIdentity.CognitoUserPool(data);
// var cognitoUser = userPool.getCurrentUser();

// window.onload = function(){ */}
{/* // if (cognitoUser != null) {
//     cognitoUser.getSession(function(err, session) {
//         if (err) {
//             alert(err);
//             return;
//         }
//         console.log('session validity: ' + session.isValid());
//         //Set the profile info
//         cognitoUser.getUserAttributes(function(err, result) {
//             if (err) {
//                 console.log(err);
//                 return;
//             }
//             console.log(result);
//             document.getElementById("email_value").innerHTML = result[2].getValue();	
//         });			
        
//     });

// }
// function signOut(){
//     if (cognitoUser != null) {
//       cognitoUser.signOut();	  
//     }
// }
// return 
// { this.session.isLoggedIn ? (
//     <div>
//       <p>You are logged in as user {this.props.session.user.userName} ({this.props.session.user.email}).</p>
//       <a className="Home-link" href="#" onClick={this.onSignOut}>Sign out</a>
//     </div>
//   ) : (
//     <div>
//       <p>You are not logged in.</p>
//       <a className="Home-link" href={cognitoUtils.getCognitoSignInUri()}>Sign in</a>
//     </div>
//   )}
// } */}
