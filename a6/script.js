/*const greet = () => {

  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);

  function add(a, b) {
    return a + b;
  }
  let result1 = add(num1, num2);

  function sub(a, b) {
    return a - b;
  }
  let result2 = sub(num1, num2);

  function mul(a, b) {
    return a * b;
  }
  let result3 = mul(num1, num2);

  function div(a, b) {
    return a / b;
  }
  let result4 = div(num1, num2);
  


  const output = `Addition: ${result1}<br>Subtraction: ${result2}<br>Multiplication: ${result3}<br>Division: ${result4}`;
  document.getElementById("output").innerHTML = output;
};
  function greet1() {
      document.getElementById("output").style.left = "70%";
    }

    function greet2() {
      document.getElementById("output").style.left = "100%";
    }*/
   const greet = () => {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);

  if (isNaN(num1) || isNaN(num2)) {
    alert("Please enter valid numbers.");
    return;
  }

  const result1 = num1 + num2;
  const result2 = num1 - num2;
  const result3 = num1 * num2;
  const result4 = num2 !== 0 ? (num1 / num2).toFixed(2) : "Cannot divide by 0";

  const outputHTML = `
    <strong>Results:</strong><br>
    Addition: ${result1}<br>
    Subtraction: ${result2}<br>
    Multiplication: ${result3}<br>
    Division: ${result4}
  `;

  document.getElementById("output").innerHTML = outputHTML;
};

function greet1() {
  greet(); // Always calculate first
  document.getElementById("output").style.left = "70%";
}

function greet2() {
  document.getElementById("output").style.left = "100%";
}