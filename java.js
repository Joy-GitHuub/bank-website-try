// document.getElementById('submit-button').addEventListener('click', function () {
//      const emailInput = document.getElementById('exampleInputEmail1');
//      const userEmail = emailInput.value;

//      const passwordInput = document.getElementById('exampleInputPassword1');
//      const userPassword = passwordInput.value;

//      if ("joy" == userEmail && 123 == userPassword) {
//           window.location.href = 'bank.html';
//      }
//      else {
//           console.log('HI')
//      }
// })


// document.getElementById('submit-button').addEventListener('click', function () {
//      const emailInput = document.getElementById('exampleInputEmail1');
//      const userEmail = emailInput.value;

//      const passwordInput = document.getElementById('exampleInputPassword1');
//      const userPassword = passwordInput.value;

//      if (userEmail == "JoyBose@gmail.com" && userPassword == 1234) {
//           window.location.href = 'bank.html';
//      }
//      emailInput.value = '';
//      passwordInput.value = '';
// })

document.getElementById('submit-button').addEventListener('click', function () {
     const userEmailInput = document.getElementById('exampleInputEmail1');
     const userEmail = userEmailInput.value;

     const userPasswordInput = document.getElementById('exampleInputPassword1');
     const userPassword = userPasswordInput.value;


     if (userEmail == "myName" && userPassword == 123) {
          window.location.href = 'bank.html';
     }
})