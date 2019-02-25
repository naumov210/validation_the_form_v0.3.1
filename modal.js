'use strict';

//запуск модального окна

window.onload = function modalLoad() {
    document.getElementsByClassName("modal")[0].style.display = "block";
}

//Логика кода:
//Обращенеие к форме по имени
//Обращенеие к инпутам по имени имяформы.имяинпута.нужноесвойство
//Обращение к спанам как к индексу псевдомассива
//Имя формы loginform
//Имя инпута Логин login
//Имя инпута Пароль password
//Имя инпута-кнопки "Login in" btnLogin
//Имя инпута-кнопки "Reset" btnReset
//Спаны в переменной modalSpan

let modalSpan = document.querySelectorAll('.modal span');

//ФУНКЦИИ ПРОВЕРКИ ПОЛЯ ЛОГИНА 
//ПРИ ПОТЕРЕ ФОКУСА ОШИБКИ НЕ ВОЗНИКАЕТ
//ПРИ ИЗМЕНЕНИИ ЗНАЧЕНИЯ И ПОТЕРЕ ФОКУСА ЕСЛИ НЕ СООТВ RegEx ВОЗНИКАЕТ ОШИБКА
//ПРИ ИЗМЕНЕНИИ ЗНАЧЕНИЯ И ПОТЕРЕ ФОКУСА И RegEx - true НЕ ВОЗНИКАЕТ ОШИБКА
//ПРИ УДАЛЕНИИ ТЕКСТА ИЗ ПОЛЯ BACKSPACE - ЕСЛИ БЫЛА ОШИБКА - ТО ИСЧЕЗАЕТ

function validateLogin() {
    if (document.loginform.login.value !== '' && !/^([A-z]{5})+$/i.test(document.loginform.login.value)) {
        modalSpan[1].innerHTML = 'Enter a 5 only letters (for example, admin)';
        return false;
    } else {
        modalSpan[1].innerHTML = '';
        return true;
    }
}

function validatePassword() {
    if (document.loginform.password.value !== '' && !/^\d{5}$/.test(document.loginform.password.value)) {
        modalSpan[2].innerHTML = 'Enter a 5 only digits';
        return false;
    } else {
        modalSpan[2].innerHTML = '';
        return true;
    }
}

function loginIn() {
    //ЕСЛИ ОБА ПОЛЯ ПУСТЫЕ ВЫВОДИТЬ ОШИБКУ 'Sorry, the form is not correct!' и 'Проверте Логин и Пароль'
    if (document.loginform.login.value === '' && document.loginform.password.value === '') {
        modalSpan[3].innerHTML = 'Sorry, the form is not correct!';
        modalSpan[4].innerHTML = 'Проверьте Логин и Пароль';
        //ЕСЛИ ОБА ПОЛЯ НЕ ПУСТЫЕ И ОБА RegEx-FALSE ТО ОШИБКА 'Sorry, the form is not correct!' и 'Проверте Логин и Пароль'
    } else if (document.loginform.login.value !== '' && validateLogin() === false &&
        document.loginform.password.value !== '' && validatePassword() === false) {
        modalSpan[3].innerHTML = 'Sorry, the form is not correct!';
        modalSpan[4].innerHTML = 'Проверьте Логин и Пароль';
        //ЕСЛИ ПОЛЕ ЛОГИН НЕ ПУСТОЕ И RegExЛОГИН-FALSE И ПАРОЛЬ ПУСТОЙ(ИЛИ ПРАВИЛЬНО ВВЕДЁН)ОШИБКА Sorry, the form is not correct! и Проверте ЛОГИН
    } else if (document.loginform.login.value !== '' && validateLogin() === false && document.loginform.password.value === '') {
        modalSpan[3].innerHTML = 'Sorry, the form is not correct!';
        modalSpan[4].innerHTML = 'Проверьте Логин';
        //ЕСЛИ ПОЛЕ ПАРОЛЬ НЕ ПУСТОЕ И RegExПАРОЛЬ-FALSE И ЛОГИН ПУСТОЙ(ИЛИ ВВЕДЁН ПРАВИЛЬНО) ОШИБКА Sorry, the form is not correct! и Проверте ПАРОЛЬ
    } else if (document.loginform.password.value !== '' && validatePassword() === false && document.loginform.login.value === '') {
        modalSpan[3].innerHTML = 'Sorry, the form is not correct!';
        modalSpan[4].innerHTML = 'Проверьте Пароль';
        //ЕСЛИ RegExЛОГИН-TRUE И RegExПАРОЛЬ - FALSE ИЛИ ПАРОЛЬ ПУСТОЙ - ОШИБКА ОБЩАЯ И Проверьте Пароль
    } else if (validateLogin() === true && validatePassword() === false || document.loginform.password.value === '') {
        modalSpan[3].innerHTML = 'Sorry, the form is not correct!';
        modalSpan[4].innerHTML = 'Проверьте Пароль';
        //ЕСЛИ RegExЛОГИН-FALSE И RegExПАРОЛЬ-TRUE ИЛИ ЛОГИН ПУСТОЙ - ОШИБКА ОБЩАЯ И Проверте Логин
    } else if (validateLogin() === false && validatePassword() === true || document.loginform.login.value === '') {
        modalSpan[3].innerHTML = 'Sorry, the form is not correct!';
        modalSpan[4].innerHTML = 'Проверьте Логин';
        //ПРИ SUBMIT ВАЛИДАЦИЯ ПРОЙДЕНА - УБРАТЬ ВСЕ ОШИБКИ И МОДАЛЬНОЕ ОКНО
    } else if (validateLogin() === true && validatePassword() === true) {
        modalSpan[1].innerHTML = '';
        modalSpan[2].innerHTML = '';
        modalSpan[3].innerHTML = '';
        modalSpan[4].innerHTML = '';
        document.getElementsByClassName("modal")[0].style.display = "none";
    }
}


//Убираем все help text при RESET
function resetPassiveHelp() {
    modalSpan.forEach(function (item) {
        if (item.innerHTML = "") {
            item = null;
        }
    });
}

document.loginform.login.addEventListener('change', validateLogin);
document.loginform.password.addEventListener('change', validatePassword);
document.loginform.btnLogin.addEventListener('click', loginIn);
document.loginform.btnReset.addEventListener('click', resetPassiveHelp);

//!!!!!!!!НА ДОРАБОТКУ
//1.Фокус на поле, ввод не верного значения , потом на кнопку submit выводит ошибку под полем,
// а под форму не выводит, выводит только при втором нажатии submit.

// 2. При вводе не правильного значения в поле возниекает ошибка под полем и соответсвующая полю
// под формой.
// Если удалить не правильное значение в поле бэкспейсом то ошибка под полем пропадёт,
// а ошибка под формой останется. Нужно что бы тоже исчезала так как поле становитьсяя пустым.