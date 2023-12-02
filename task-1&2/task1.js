// task 1

let userName = prompt("Enter your name");
let phone = +prompt("Enter your phone number");
let email = prompt("Enter your email");
let password = prompt("Enter your password");
let confirmPassword = prompt("Enter your confirm password");

if (
  userName !== "" ||
  phone !== "" ||
  email !== "" ||
  password !== "" ||
  confirmPassword !== ""
) {
  if (password === confirmPassword) {
    Swal.fire({
      title: "Sucessful",
      text: "You have successfully registered",
      icon: "success",
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Not match",
      text: "Please check your confirm password",
    });
  }
} else {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Plaese Fill The Form",
  });
}
