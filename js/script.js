function validatePhone(num) {
    let regex = /^((998|\+998)[\- ]?)\(?\d{2}\)?[\- ]?\d{3}[\- ]?\d{2}[\- ]?\d{2}$/;
    return regex.test(num);
   }

function formatPhone(num) {
    num = num.replace(/[^\d]/g, '');
    if (num.length === 12) {
        let countryCode = num.slice(0, 3);
        let operatorCode = num.slice(3, 5);
        let triade = num.slice(5, 8);
        let pair1 = num.slice(8, 10);
        let pair2 = num.slice(10, 12);
        return (`+${countryCode}(${operatorCode}) ${triade}-${pair1}-${pair2}`);
    }
}

let num = prompt('Введите номер телефона любого оператора Узбекистан: ')

// if (validatePhone(num)) {
//        console.log('Соответствует');
//     } else {
//        console.log('Не соответствует');
//     }

if (validatePhone(num)) {
    alert(`Ваш номер: ${formatPhone(num)}. Спасибо! Мы Вам перезвоним!`)
} else { 
    alert('Введенные данные не соответствуют номеру телефона оператора Узбекистана. Введите заново в правильном формате, пожалуйста!')
}