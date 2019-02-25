'use strict';

//Имя формы orderform
//Имя инпута firstName, lastName, phone ,dateDay, dateMonth, dateYear, submit, reset
//Массив спанов для help text system - profileSpan

let profileSpan = document.querySelectorAll('.profile span'),
    profileInput = document.querySelectorAll('.profile input'),
    resultDiv = document.querySelectorAll('.info');

function validateFirstName() {
  if (document.orderform.firstName.value !== '' && !/^([A-z]{3,15})$/i.test(document.orderform.firstName.value)) {
    profileSpan[0].innerHTML = 'Введите только буквы от 3 до 15';
    return false;
  } else {
    profileSpan[0].innerHTML = '';
    profileSpan[9].innerHTML = '';
    return true;
  }
}

function validateLastName() {
  if (document.orderform.lastName.value !== '' && !/^([A-z]{3,15})$/i.test(document.orderform.lastName.value)) {
    profileSpan[1].innerHTML = 'Введите только буквы от 3 до 15';
    return false;
  } else {
    profileSpan[1].innerHTML = '';
    profileSpan[10].innerHTML = '';
    return true;
  }
}

function validatePhone() {
  if (document.orderform.phone.value !== '' && !/^\d{10}$/.test(document.orderform.phone.value)) {
    profileSpan[2].innerHTML = 'Enter a 10 digits in format XXXXXXXXX';
    return false;
  } else {
    profileSpan[2].innerHTML = '';
    profileSpan[11].innerHTML = '';
    return true;
  }
}

function validateEmail() {
  if (document.orderform.email.value !== '' && !/^[\w\.-_\+]+@[\w-]+(\.\w{2,3})+$/.test(document.orderform.email.value)) {
    profileSpan[3].innerHTML = 'Please enter an email address (for example, johndoe@acme.com)';
    return false;
  } else {
    profileSpan[3].innerHTML = '';
    profileSpan[12].innerHTML = '';
    return true;
  }
}

function validateDay() {
  if (document.orderform.dateDay.value !== '' && document.orderform.dateDay.value !== moment().format('DD')) {
    profileSpan[4].innerHTML = 'Enter today in format DD';
    return false;
  } else {
    profileSpan[4].innerHTML = '';
    return true;
  }
}

function validateMonth() {
  if (document.orderform.dateMonth.value !== '' && document.orderform.dateMonth.value !== moment().format('MM')) {
    profileSpan[5].innerHTML = 'Enter current month in format MM';
    return false;
  } else {
    profileSpan[5].innerHTML = '';
    return true;
  }
}

function validateYear() {
  if (document.orderform.dateYear.value !== '' && document.orderform.dateYear.value !== moment().format('YYYY')) {
    profileSpan[6].innerHTML = 'Enter current year in format YYYY';
    return false;
  } else {
    profileSpan[6].innerHTML = '';
    return true;
  }
}

//Почему при удалении бэкспейсом из полей кроме ПОЛЕЙ дат занчений, пропадают ВСПОМОГАТЕЛЬНЫЕ ОШИБКИ под формой,
//а ВСПОМОГАТЕЛЬНЫЕ ОШИБКИ дат не пропадают ?????

//forEach ниже если хотя бы одно поле пустое при сабмит будут ошибки
function submit() {
  profileInput.forEach(function (item) {
    if (item.value === '') {
      profileSpan[7].innerHTML = 'Sorry, the profile is not correct!';
      profileSpan[8].innerHTML = 'Проверьте поля Name, Contacts, Date';
    }
  });
  
  if (validateFirstName() === false) {profileSpan[8].innerHTML = ''; profileSpan[9].innerHTML = 'Проверьте поле First name'; }
  if (validateLastName() === false) {profileSpan[8].innerHTML = ''; profileSpan[10].innerHTML = 'Проверьте поле Last name';} 
  if (validatePhone() === false) {profileSpan[8].innerHTML = ''; profileSpan[11].innerHTML = 'Проверьте поле Phone number';}
  if (validateEmail() === false ) {profileSpan[8].innerHTML = ''; profileSpan[12].innerHTML = 'Проверьте поле Email';}
  if (validateDay() === false ) {profileSpan[8].innerHTML = ''; profileSpan[13].innerHTML = 'Проверьте поле Даты - DD';}
  if (validateMonth() === false ) {profileSpan[8].innerHTML = ''; profileSpan[14].innerHTML = 'Проверьте поле Даты - MM';}
  if (validateYear() === false ) {profileSpan[8].innerHTML = ''; profileSpan[15].innerHTML = 'Проверьте поле Даты - YYYY';}
  if (validateFirstName() === true && 
           validateLastName() === true &&
           validatePhone() === true && 
           validateEmail() === true &&
           validateDay() === true &&
           validateMonth() === true && 
           validateYear() === true && 
    document.orderform.firstName.value !== '' && 
    document.orderform.lastName.value !== '' &&
    document.orderform.phone.value !== '' && 
    document.orderform.email.value !== '' &&
    document.orderform.dateDay.value !== ''&& 
    document.orderform.dateMonth.value !== '' &&
    document.orderform.dateYear.value !== '') {
    profileSpan[7].innerHTML = '';
    profileSpan[8].innerHTML = '';
    profileSpan[9].innerHTML = '';
    profileSpan[10].innerHTML = '';
    profileSpan[11].innerHTML = '';
    profileSpan[12].innerHTML = '';
    profileSpan[13].innerHTML = '';
    document.getElementsByClassName('user-date')[0].style.display = "block";
    form.submit();
  }
}

function reset() {
  //чистит все ошибки
  profileSpan.forEach(function (item) {
    //console.log(item.innerHTML);
    if (item.innerHTML !== "") {
      item.innerHTML = "";
    }
  });
//Чистит дивы в date.js
  result.forEach(function (item) {
    //console.log(item.innerHTML);
    if (item.innerHTML !== "") {
      item.innerHTML = "";
    }
  });

  //Чистит спаны дат в date.js
  resultDate.forEach(function (item) {
    if (item.innerHTML !== "") {
      item.innerHTML = "";
    }
  });
}

document.orderform.firstName.addEventListener('change', validateFirstName);
document.orderform.lastName.addEventListener('change', validateLastName);
document.orderform.phone.addEventListener('change', validatePhone);
document.orderform.email.addEventListener('change', validateEmail);
document.orderform.dateDay.addEventListener('change', validateDay);
document.orderform.dateMonth.addEventListener('change', validateMonth);
document.orderform.dateYear.addEventListener('change', validateYear);
document.orderform.submit.addEventListener('click', submit);
document.orderform.reset.addEventListener('click', reset);