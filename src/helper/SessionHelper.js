class SessionHelper {
 setToken(token) {
  localStorage.setItem("token", token);
 }

 getToken() {
  return localStorage.getItem("token");
 }

 SetUserDetails(UserDetails) {
  localStorage.setItem("UserDetails", JSON.stringify(UserDetails));
 }

 getUserDetails() {
  return JSON.parse(localStorage.getItem("UserDetails"));
 }

  removeSession=()=>{
   localStorage.clear();
   window.location.href ="/login";
  }

}

export const { setToken, getToken, SetUserDetails, getUserDetails, removeSession } = new SessionHelper();