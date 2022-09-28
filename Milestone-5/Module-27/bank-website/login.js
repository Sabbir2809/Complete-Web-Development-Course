// Step-1: Add click event handler with the login button
document.getElementById('btn-login').addEventListener('click', function(){
  // Step-2: get the email address inside the email input field
  const emailField = document.getElementById('user-email');
  const email = emailField.value;
  // Step-3: get password
  const passwordlField = document.getElementById('user-password');
  const password = passwordlField.value;

  // Varify email & password
  if(email === "admin@gmail.com" && password === "admin"){
    window.location.href = 'bank.html';
  }else{
    alert("Invalid");
  }
})
