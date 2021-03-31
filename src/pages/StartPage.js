import React, { useState, useContext } from "react";

//Componenets


export default function StarterPage(){

return(
<div class="govuk-width-container">
<main class="govuk-main-wrapper" id="main-content" role="main">
    <h1 class="govuk-heading-xl">Sign in or create an account</h1>
    <div class="govuk-grid-row">
    <div class="govuk-grid-column-one-half">
        <h2 class="govuk-heading-m">Create an account</h2>
        <p class="govuk-label">Select if you have not used this service before</p>
        <a href="/signup" role="button" draggable="false" class="govuk-button">Create account</a>
        <br/>
        <br/>
    </div>
    <div class="gocuk-grid-column-one-half">
    <h2 class="govuk-heading-m">Sign in</h2>
    <p class="govuk-label">Select if you already have an account for this service</p>
    <a href="/login" role="button" dragabble="false" class="govuk-button" data-module="govuk-button">Sign in</a>

    </div>
     </div>
</main>

</div>

)
}