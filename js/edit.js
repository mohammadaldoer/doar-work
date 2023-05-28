let userName=document.getElementById('inputName');
let editName=document.getElementById('editNameBtn');
let userDate=document.getElementById('inputDate');
let editDate=document.getElementById('editDateBtn');
let userNumber=document.getElementById('inputNumber');
let editNumber=document.getElementById('editNumberBtn');
let editLocation=document.getElementById('editLocationBtn');
let userLocation=document.getElementById('inputLocation');
/*_______________________edit page__________________________*/
// let divName=document.getElementById('divName');
// let divNumber=document.getElementById('divNumber');
// let divDate=document.getElementById('divDate');
// let divLocation=document.getElementById('divLocation');
/*____________________________To fill profile Page______________________*/
document.addEventListener("DOMContentLoaded", function() {
    // Retrieve the user data from localStorage
let Name = localStorage.getItem("userName");
let Number= localStorage.getItem("userNumber");
let Date= localStorage.getItem("userDate");
let location= localStorage.getItem("userLocation");
    // Display the user data in the profile page
document.getElementById('divName').textContent =Name;
document.getElementById('divNumber').textContent =Number;
document.getElementById('divDate').textContent =Date;
document.getElementById('divLocation').textContent =location;
/*_____________________To edit the Name Feild______________________________*/
userName.style.display='none'
editName.addEventListener('click',function(){
document.getElementById('divName').style.display='none'
userName.style.display='block';
if (typeof userName.value == 'string' && userName.value.trim() !== '' && /^[A-Za-z]/.test(userName.value)) {
localStorage.setItem('userName',userName.value);
console.log(localStorage.getItem('userName'));
errorName.innerHTML='';
validName=true;
} else {
errorName.innerHTML=`<span> *please enter the valid Name starting with letter`;
validName=false;
}
})
/*___________________________To Edit the Date Feild_____________________*/
userDate.style.display='none'
editDate.addEventListener('click', function() {
    document.getElementById('divDate').style.display='none'
    userDate.style.display='block'
    let dateValue = userDate.value.trim();
    let inputDate = new Date(dateValue);
    let minDate = new Date('2010-01-01');
    let maxDate = new Date('2018-12-31');
    if (inputDate >= minDate && inputDate <= maxDate && dateValue.trim() !== '') {
    errorDate.innerHTML =''
    localStorage.setItem('userDate', dateValue);
    console.log(localStorage.getItem('userDate'));
    validDate=true;
    } else {
    errorDate.innerHTML = '<span>* Please enter a valid birthday date between 2010 and 2018.</span>';
    validDate=false;
    }
    });
/*_____________________To Edit the Number______________*/
userNumber.style.display='none';
editNumber.addEventListener('click', function() {
document.getElementById('divNumber').style.display='none'
userNumber.style.display='block';
let number = userNumber.value.trim();
if (typeof number === 'string' && number.length === 10 && number.startsWith('077') && number.trim() !== '') {
errorNumber.innerHTML ='';
localStorage.setItem('userNumber', number);
console.log(localStorage.getItem('userNumber'));
validNumber=true
} else {
errorNumber.innerHTML = '<span>* Please enter a valid Jordanian phone number starting with "077".</span>';
validNumber=false;
}
});
/*____________________________To Edit the Location__________________________*/
userLocation.style.display = 'none';
editLocation.addEventListener('click', function() {
document.getElementById('divLocation').style.display = 'none';
userLocation.style.display = 'block';
let locationValue = userLocation.value.trim();
let cityPattern = /^[a-zA-Z\s]+$/; // Regular expression to match alphabets and spaces only
if (locationValue !== '' && cityPattern.test(locationValue)) {
localStorage.setItem('userLocation', locationValue);
console.log(localStorage.getItem('userLocation'));
errorLocation.innerHTML = '';
validLocation = true;
} else {
errorLocation.innerHTML = '<span>* Please enter a valid Jordanian city.</span>';
validLocation = false;
}
});
});
/*____________________________To Edit the Image____________________*/
const imageInput = document.getElementById('imageInput');
const userMid = document.getElementById('userMid');

imageInput.addEventListener('change', function(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function() {
      const imageUrl = reader.result;
      userMid.src = imageUrl;
    };
    reader.readAsDataURL(file);
  }
});

