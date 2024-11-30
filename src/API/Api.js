import axios from "axios";
import { ErrorToast, SuccessToast } from "../helper/FormHelper";
import store from "../redux/store/store";
import { HideLoader, ShowLoader } from "../redux/state-slice/settingsSlice";
import { getToken, setToken, SetUserDetails } from "../helper/SessionHelper";
import { SetCanceledTask, SetCompletedTask, SetNewTask, SetProgressTask } from "../redux/state-slice/taskSlice";
import { SetSummary } from "../redux/state-slice/summarySlice";

const AxiosHeader = { headers: { "token": getToken() } }

const BaseURL = "https://astask-backend.vercel.app/api/v1"

// Login API 

export function LoginRequest(email, password) {
 store.dispatch(ShowLoader()) //loader 
 let URL = BaseURL + "/login";
 let PostBody = { "email": email, "password": password }
 return axios.post(URL, PostBody).then((res) => {
  store.dispatch(HideLoader()) //loader 
  if (res.status === 200) {
   setToken(res.data['token']);
   SetUserDetails(res.data['data']);
   SuccessToast("Login Success")
   return true;
  }
  else {
   ErrorToast("Invalid Email or Password")
   return false;
  }
 }).catch((err) => {
  ErrorToast("Something Went Wrong!")
  store.dispatch(HideLoader()) //loader 
  return false;
 });
};

// Registration  API
export function RegistrationRequest(email, firstName, lastName, mobile, password, photo) {
 store.dispatch(ShowLoader()) //loader 
 let URL = BaseURL + "/registration";
 let PostBody = { email: email, firstName: firstName, lastName: lastName, mobile: mobile, password: password, photo: photo }

 return axios.post(URL, PostBody).then((res) => {
  // Call End 
  store.dispatch(HideLoader()) //loader 
  if (res.status === 200) {
   if (res.data['status'] === "fail") {
    if (res.data['data']['keyPattern']['email'] === 1) {
     ErrorToast("Email Already Exists")
     return false;
    }
    else {
     ErrorToast("Something Went Wrong!")
     return false;
    }
   }
   else {
    SuccessToast("Registration SuccessFul")
    return true;
   }
  }
  else {
   ErrorToast("Something Went Wrong!")
   return false;
  }
 }).catch((err) => {
  // Call End 
  store.dispatch(HideLoader()) //loader 
  ErrorToast("Something Went Wrong!")
  return false;
 });
};

// Create task API
export function NewTaskRequest(title, description) {
 store.dispatch(ShowLoader())
 let URL = BaseURL + "/CreateTask";
 let PostBody = { "title": title, "description": description, status: "New" }

 return axios.post(URL, PostBody, AxiosHeader).then((res) => {
  store.dispatch(HideLoader())
  if (res.status === 200) {
   SuccessToast("New Task Created SuccessFully")
   return true;
  }
  else {
   ErrorToast("Something Went Wrong!")
   return false;
  }
 }).catch((err) => {
  // Call End 
  store.dispatch(HideLoader()) //loader 
  ErrorToast("Something Went Wrong!")
  return false;
 });
};


// Task list by status API 
export function TaskListByStatus(Status) {
 store.dispatch(ShowLoader())
 let URL = BaseURL + "/listTaskByStatus/" + Status;
 axios.get(URL, AxiosHeader).then((res) => {
  store.dispatch(HideLoader())
  if (res.status === 200) {
   if (Status === "New") {
    store.dispatch(SetNewTask(res.data['data']))
   }
   else if (Status === "Completed") {
    store.dispatch(SetCompletedTask(res.data['data']))
   }
   else if (Status === "Progress") {
    store.dispatch(SetProgressTask(res.data['data']))
   }
   else if (Status === "Canceled") {
    store.dispatch(SetCanceledTask(res.data['data']))
   }
  }
  else {
   ErrorToast("Something Went Wrong!");
  }
 }).catch((err) => {
  ErrorToast("Something Went Wrong!");
  store.dispatch(HideLoader())
 });
};


// Task Summary Count
export function SummaryRequest() {
 store.dispatch(ShowLoader())
 let URL = BaseURL + "/taskStatusCount";
 axios.get(URL, AxiosHeader).then((res) => {
  store.dispatch(HideLoader())
  if (res.status === 200) {
   store.dispatch(SetSummary(res.data['data']))
  }
  else {
   ErrorToast("Something Went Wrong!")
  }
 }).catch((err) => {
  ErrorToast("Something Went Wrong!")
  store.dispatch(HideLoader()) //loader
 });
};


//Delete Task
export function DeleteRequest(id) {
 store.dispatch(ShowLoader())
 let URL = BaseURL + "/deleteTask/" + id;
 return axios.get(URL, AxiosHeader).then((res) => {
  store.dispatch(HideLoader())
  if (res.status === 200) {
   SuccessToast("Task Deleted Successfully")
   return true;
  }
  else {
   ErrorToast("Something Went Wrong!")
   return false;
  }
 }).catch((err) => {
  ErrorToast("Something Went Wrong!")
  store.dispatch(HideLoader())
  return false;
 });
};
