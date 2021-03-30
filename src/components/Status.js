import React, { useContext, useEffect } from "react";
//Componenets
import { AccountContext } from "./Accounts";
export default function StatusChange({ tokens, setTokens }) {
  //using context to extract the logout function
  const { logout } = useContext(AccountContext);
  useEffect(() => {
    console.log(tokens);
  }, [tokens]);
  //Within the return statement we have a turniry for if you are logged in the page
  //renders the log out button. otherwise it tells you to log in.
  return (
    <a
      className="govuk-header__link"
      href="/"
      onClick={() => {
        logout();
        setTokens();
      }}
    >
      {tokens.idToken.payload.email} : Sign out
    </a>
  );
}
