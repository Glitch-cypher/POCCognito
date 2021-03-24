import React, { useContext } from "react";
import { AccountContext } from "./Accounts";
import { useHistory } from "react-router";

export default function StatusChange({ status, setStatus }) {
  const history = useHistory();

  //using context to extract the logout function
  const { logout } = useContext(AccountContext);

  //Within the return statement we have a turniry for if you are logged in the page
  //renders the log out button. otherwise it tells you to log in.
  return (
    <div>
      {status ? (
        <div>
          You are logged in.
          <button
            onClick={() => {
              setStatus(false);
              logout();
              history.push("/");
            }}
          >
            Logout
          </button>
        </div>
      ) : (
        "Please login below."
      )}
    </div>
  );
}
