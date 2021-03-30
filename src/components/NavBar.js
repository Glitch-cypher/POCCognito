import React from "react";
export default function NavBar({tokens,setTokens}){

    return (
        <div>
        <nav>
        <ul
        id="navigation"
        className="govuk-header__navigation "
        aria-label="Navigation menu"
        >
        {!tokens ? (
            <div>
            <li className="govuk-header__navigation-item govuk-header__navigation-item--active">
            <a className="govuk-header__link" href="/">
                Sign in
            </a>
            </li>
            <li className="govuk-header__navigation-item">
            <a className="govuk-header__link" href="/signup">
                Create an Account
            </a>
            </li>
            <li className="govuk-header__navigation-item">
            <a className="govuk-header__link" href="/forgotpassword">
                Forgot Password
            </a>
            </li>
            
            </div>
        ): null }
        </ul>
    </nav>
    </div>
        )
}