import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { ErrorToast, IsEmail, IsEmpty } from '../../helper/FormHelper';
import { LoginRequest } from '../../API/Api';

const Login = () => {

 let emailRef, passRef = useRef();

 const SubmitLogin = () => {

  let email = emailRef.value;
  let pass = passRef.value;

  if (IsEmail(email)) {
   ErrorToast("Invalid Email Address");
  }
  else if (IsEmpty(pass)) {
   ErrorToast("Password Required");
  }
  else {
   LoginRequest(email, pass).then((result) => {
    if (result === true) {
     window.location.href = "/"
    }
   })
  }


 }


 return (
  <Fragment>
   <div className="container">
    <div className="row justify-content-center">
     <div className="col-md-7 col-lg-6 center-screen">
      <div className="card w-90 p-4">
       <div className="card-body">
        <h5>Sign-in</h5>
        <br />
        <input ref={(input) => emailRef = input} type="email" placeholder='User Email' className='form-control animated fadeInUp' />
        <br />
        <input ref={(input) => passRef = input} type="password" placeholder='User Password' className='form-control animated fadeInUp' />
        <br />
        <button onClick={SubmitLogin} className='btn w-100 animated fadeInUp float-end btn-primary'>Login</button>
        <div className="text-center w-100">
         <Link className='text-center animated fadeInUp' to="/Registration">Sign Up</Link>
         <br />
         <Link className='text-center animated fadeInUp' to="/Forgetpass">Forget Password</Link>
        </div>
       </div>
      </div>
     </div>
    </div>
   </div>

  </Fragment>
 );
};

export default Login;