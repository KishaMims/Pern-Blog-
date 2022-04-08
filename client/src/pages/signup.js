import React from "react";

function SignUp (){
    return (
        <div>     
  <head>
    <title>Sign Up For Beta Form</title>
  </head>
  <div className="body">
    <form action="#" method="post" className="sign-up-form">
      <div className="sign-up-header">
         <p>Sign Up For Our Newsletter</p>
      </div>
      <div className="sign-up-description">
        <p> If you're interested in finding out when we have new recipes and more exclusive content, then sign up below to get exclusive access.</p>
      </div>
      <div className="sign-up-input">
        <input type="text" className="sign-up-button" id="email" name="email" placeholder="NAME@EXAMPLE.COM"/>
        <input type="submit" className="sign-up-button" id="submit" value="SIGN UP"/>
      </div>
    </form>
    </div>
        </div>
       
    )
}

export default SignUp;