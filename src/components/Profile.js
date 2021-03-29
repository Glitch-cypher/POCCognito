export default function Profile({ email }) {
  //In order for the profile page we use getSession to see whether the user is a user or not.
  //Next we then take the information stored in state and display it on the screen.
  return (
    <div id="profilePage">
      <h1 id="pageTitle">Welcome to your profile page.</h1>
      <p id="pageInfo">You use the following email address to log in.</p>
      <h2 id="idDisplay">{email}</h2>
    </div>
  );
}
