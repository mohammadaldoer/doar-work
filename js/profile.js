let userName=document.getElementById('inputName');
let addName=document.getElementById('addNameBtn');
let userDate=document.getElementById('inputDate');
let addDate=document.getElementById('addDateBtn');
let userNumber=document.getElementById('inputNumber');
let addNumber=document.getElementById('addNumberBtn');
let userLocation=document.getElementById('inputLocation');
let addLocation=document.getElementById('addLocation');
let done=document.getElementById('done');
let errorNumber=document.getElementById('errorNumber');
let errorName=document.getElementById('errorName');
let errorDate=document.getElementById('errorDate')
let errorLocation=document.getElementById('errorLocation');
let errorform=document.getElementById('errorform')
let number = userNumber.value;
let validLocation=false ;
let validDate=false;
let validNumber=false;
let validName=false;


/*__________________________userName condation_____________________*/
addName.addEventListener('click',function(){
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
/*_______________________________Number Condition_____________________*/
addNumber.addEventListener('click', function() {
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
let divNumberData=localStorage.getItem('userNumber');

/*_______________________________Date Condition_____________________*/
addDate.addEventListener('click', function() {
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
/*_______________________________location Condition_____________________*/
addLocation.addEventListener('click', function() {
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
/*___________________________check the URL page________________________*/
done.addEventListener('click', function() {
    if (validName && validNumber && validDate && validLocation) {
    errorform.innerHTML=''
    window.location.href = '/html/edit.html'; // Redirect to the profile page
    } else {
      // Display an error or validation message if any of the fields are invalid
      errorform.innerHTML='*Please fill in all the required fields correctly.';
    }
  });
  /*______________________________________Upload the image________________*/
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
  

//   divNumber.innerText=divNumberData;
