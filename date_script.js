let input = document.querySelectorAll('.profile input'),
    result = document.querySelectorAll('.info'),
    resultDate = document.querySelectorAll('.info span');

function getFirstName() {
    input[0].onkeyup = input[0].oncopy = input[0].onpaste = input[0].oncut = (function () {
        return function () {
            result[0].innerHTML = input[0].value;
        };
    })();
}

function getLastName() {
    input[1].onkeyup = input[1].oncopy = input[1].onpaste = input[1].oncut = (function () {
        return function () {
            result[1].innerHTML = input[1].value;
        }
    })();
}

function getRadioChecked() {
    let radioGender = document.getElementsByClassName('gender'),
        radioChecked = [];

    for (let i = 0; i < radioGender.length; i++) {
        if (radioGender[i].checked) {
            radioChecked.push(radioGender[i].value);
            result[2].innerHTML = radioChecked.join();
        }
    }
}

function getPhone() {
    input[5].onkeyup = input[5].oncopy = input[5].onpaste = input[5].oncut = (function () {
        return function () {
            result[3].innerHTML = input[5].value;
        }
    })();
}

function getEmail() {
    input[6].onkeyup = input[6].oncopy = input[6].onpaste = input[6].oncut = (function () {
        return function () {
            result[4].innerHTML = input[6].value;
        }
    })();
}

function getCheckboxesChecked() {
    let checkboxesHobby = document.getElementsByClassName("hobby"),
        hobbyChecked = [];

    for (let i = 0; i < checkboxesHobby.length; i++) {
        if (checkboxesHobby[i].checked) {
            hobbyChecked.push(checkboxesHobby[i].value);
            result[5].innerHTML = hobbyChecked.join(', ');
        }
    }
}

function getDateDD() {

    input[10].onkeyup = input[10].oncopy = input[10].onpaste = input[10].oncut = (function () {
        return function () {
            resultDate[0].innerHTML = input[10].value;
        }
    })();
}

function getDateMM() {

    input[11].onkeyup = input[11].oncopy = input[11].onpaste = input[11].oncut = (function () {
        return function () {
            resultDate[1].innerHTML = input[11].value;
        }
    })();
}

function getDateYY() {

    input[12].onkeyup = input[12].oncopy = input[12].onpaste = input[12].oncut = (function () {
        return function () {
            resultDate[2].innerHTML = input[12].value;
        };
    })();
}
//На каждый радио инпут нужен обработчик, так как имя у таких инпутов должно быть одинаковым, 
// чтобы у этой группы выбирался только один радиоинпут
// если обработчики вешать по томуже имени будет ошибка, поэтому к такому инпуту нужно 
// обращаться по другому
document.orderform.firstName.addEventListener('focus', getFirstName);
document.orderform.lastName.addEventListener('focus', getLastName);
document.getElementsByClassName('gender')[0].addEventListener('click', getRadioChecked);
document.getElementsByClassName('gender')[1].addEventListener('click', getRadioChecked);
document.orderform.snb.addEventListener('click', getCheckboxesChecked);
document.orderform.shoot.addEventListener('click', getCheckboxesChecked);
document.orderform.knit.addEventListener('click', getCheckboxesChecked);
document.orderform.phone.addEventListener('focus', getPhone);
document.orderform.email.addEventListener('focus', getEmail);
document.orderform.dateDay.addEventListener('focus', getDateDD);
document.orderform.dateMonth.addEventListener('focus', getDateMM);
document.orderform.dateYear.addEventListener('focus', getDateYY);