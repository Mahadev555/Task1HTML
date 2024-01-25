const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const array = [


];


let data = document.getElementById('EmpData');
let nameInput = document.getElementById('name');
let emailInput = document.getElementById('email');
let dateInput = document.getElementById('dob');
let passInput = document.getElementById('pass');
let Cpass = document.getElementById('Cpass');



function submitData() {

  let name = nameInput.value.trim();
  let email = emailInput.value.trim();
  let pass = passInput.value.trim();
  let dob = dateInput.value.trim()

  const emailValidationMessage = document.getElementById('EmailValidation');
  const nameValidationMsg = document.getElementById('NameValidation');
  const passValidationMsg = document.getElementById('PasswordValidation'); 
  const CpassValidationMsg = document.getElementById('CPasswordValidation');
  const dateValidationmsg = document.getElementById('dobValidation'); 

  nameValidationMsg.textContent = '';
  emailValidationMessage.textContent = '';
  passValidationMsg.textContent = '';
  CpassValidationMsg.textContent = ''
  dateValidationmsg.textContent = ''


  if (!name) {
    nameValidationMsg.textContent = 'Name is required';
    return;
  }

  else if (!email) {
    emailValidationMessage.textContent = 'Email is required';
    return;
  }
  else if (!emailRegex.test(email)) {
    emailValidationMessage.textContent = 'Invalid email address';
  }
  else if (!dob) {
    dateValidationmsg.textContent = 'Date is required';
    return;
  }

  else if (!pass) {
    passValidationMsg.textContent = 'Password is required';

    return;
  }

  else if (Cpass.value !== pass) {
    CpassValidationMsg.textContent = 'Password not matched';
    return;
  }



  else {

    const date = updateDate(dob)

    array.push({
      Name: name,
      email: email,
      Password: pass,
      Dob: date
    });

    nameInput.value = '';
    emailInput.value = '';
    passInput.value = '';
    Cpass.value = '';
    dateInput.value = ''
    document.getElementById('imageInput').value = '';

    updateTable();
  }
}


function deleteEntry(index) {
  array.splice(index, 1)
  updateTable();
}


function updateTable() {
  data.innerHTML = '';

  array.forEach((item, index) => {
    data.innerHTML += `
          <tr>
              <th scope="row">${index + 1}</th>
              <td>${item.Name}</td>
              <td>${item.email}</td>
              <td>${item.Password}</td>
              <td>${item.Dob}</td>
              <td><button type="button" onclick="deleteEntry(${index})" class="btn-close " aria-label="Close"></button></td>          </tr>
      `
  })
}


function updateDate(dob){
  let str =""
      const date = new Date(dob)

      const monthsList = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
      const month = monthsList[date.getMonth()]
      
      const weekList = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
      const weekDay = weekList[date.getDay()]

      str = `
      ${weekDay}, ${date.getDate()} ${month} ${date.getFullYear()}
      `

      return str

}


const emailValidationMessage = document.getElementById('EmailValidation');


emailInput.addEventListener('input', function () {
  const emailValue = emailInput.value.trim();

  if (!emailValue) {
    emailValidationMessage.textContent = 'Email address is required';
  } else if (!emailRegex.test(emailValue)) {
    emailValidationMessage.textContent = 'Invalid email address';
  } else {
    emailValidationMessage.textContent = '';
  }
});