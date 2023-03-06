function validatePhone(num) {
    num = num.replace(/[^\d]/g, '');
    let regex = /^((998)\d{9})$/;
    if (regex.test(num)) {
        let countryCode = num.slice(0, 3);
        let operatorCode = num.slice(3, 5);
        let triade = num.slice(5, 8);
        let pair1 = num.slice(8, 10);
        let pair2 = num.slice(10, 12);
        return num = (`+${countryCode}(${operatorCode}) ${triade}-${pair1}-${pair2}`);
    }
}
let num = prompt('Введите номер телефона любого оператора Узбекистан: ')
if (validatePhone(num)) {
    alert(`Ваш номер: ${validatePhone(num)}. Спасибо! Мы Вам перезвоним!`)
} else { 
    alert('Введенные данные не соответствуют номеру телефона оператора Узбекистана. Введите заново в правильном формате, пожалуйста!')
}
