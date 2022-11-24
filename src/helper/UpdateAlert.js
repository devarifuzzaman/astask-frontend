import Swal from "sweetalert2";


export function UpdateTask(id, status) {
 return Swal.fire({
  title: 'Change Status',
  input: 'select',
  inputOptions: { New: 'New', Completed: 'Completed', Canceled: 'Canceled', Progress: 'Progress' },
  inputValue: status,
 }).then((result) => {


 });
}