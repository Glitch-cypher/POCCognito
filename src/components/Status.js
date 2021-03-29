import React, { useContext } from "react";
import { AccountContext } from "./Accounts";
import { useHistory } from "react-router";

export default function StatusChange({ tokens, setTokens }) {
  const history = useHistory();

  //using context to extract the logout function
  const { logout } = useContext(AccountContext);
  //Within the return statement we have a turniry for if you are logged in the page
  //renders the log out button. otherwise it tells you to log in.
  return (
    <div>
      <button
        class="govuk-button"
        data-module="govuk-button"
        onClick={() => {
          logout();
          setTokens(null);
          history.push("/");
          console.log(tokens);
        }}
      >
        Logout
      </button>
    </div>
  );
}
