import React, { Fragment } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { ErrorToast, IsEmail, IsEmpty, IsMobile } from '../../helper/FormHelper';
import { RegistrationRequest } from '../../API/Api';

const Registration = () => {

 let emailRef, firstNameRef, lastNameRef, mobileRef, passwordRef = useRef();
 let navigate = useNavigate();

 const onRegistration = () => {
  let email = emailRef.value;
  let firstName = firstNameRef.value;
  let lastName = lastNameRef.value;
  let mobile = mobileRef.value;
  let password = passwordRef.value;

  if (IsEmail(email)) {
   ErrorToast("Input Valid Email Address!")
  }
  else if (IsEmpty(firstName)) {
   ErrorToast("First Name Required !")
  }
  else if (IsEmpty(lastName)) {
   ErrorToast("Last Name Required !")
  }
  else if (!IsMobile(mobile)) {
   ErrorToast("Valid Mobile Number Required !")
  }
  else if (IsEmpty(password)) {
   ErrorToast("Password Required !")
  }
  else {
   RegistrationRequest(email, firstName, lastName, mobile, password, "").then((result)=>{
    if (result===true) {
     navigate("/login")
    }
   })
  }

 }

 return (
  <Fragment>

   <div className="container">
    <div className="container">
     <div className="row justify-content-center">
      <div className="col-md-7 col-lg-6 center-screen">
       <div className="card w-90 p-4">
        <div className="card-body">
         <h5>Sign-Up</h5>
         <br />
         <input ref={(input) => emailRef = input} type="email" placeholder='User Email' className='form-control animated fadeInUp' />
         <br />
         <input ref={(input) => firstNameRef = input} type="text" placeholder='First Name' className='form-control animated fadeInUp' />
         <br />
         <input ref={(input) => lastNameRef = input} type="text" placeholder='Last Name' className='form-control animated fadeInUp' />
         <br />
         <input ref={(input) => mobileRef = input} type="text" placeholder='Phone Number' className='form-control animated fadeInUp' />
         <br />
         <input ref={(input) => passwordRef = input} type="password" placeholder='User Password' className='form-control animated fadeInUp' />
         <br />
         <button onClick={onRegistration} className='btn w-100 animated fadeInUp float-end btn-primary'>SignUp</button>
         <div className="text-center w-100">
          <Link className='text-center animated fadeInUp' to="/Login">Sign In</Link>
          <br />
          <Link className='text-center animated fadeInUp' to="/Forgetpass">Forget Password</Link>

         </div>

        </div>
       </div>
      </div>
     </div>
    </div>
   </div>

  </Fragment>
 );
};

export default Registration;