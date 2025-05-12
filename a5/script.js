function greet() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const output = `Email: ${email}<br>Password: ${password}`;
  document.getElementById("output").innerHTML = output;
}