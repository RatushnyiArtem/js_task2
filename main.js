// 3 конструкции if JS

// 1) if
// if (условие) {
//     инструкция
// }


// 2) if else

// if (условие) {
//     инструкция1
// } else{
//     инструкция
// }

// Каскадное ветвление if else-if else

// if (условие1) {
//     инструкция1
// } else if (условие2) {
//     инструкция2
// } else if (условие3) {
//     инструкция3
// }
// ...
// else {
//     инструкцияN
// }
// let birth_of_year = +prompt('Введите пожалуйста ваш возраст: ')
// if (birth_of_year == 25) {
//     alert('Ты уже большой')
//     alert(++birth_of_year)
// } else if (birth_of_year > 0 && birth_of_year < 25){
//     alert('Ты ещё маленький')
// } else {
//     alert('Ты кто?!!!!')
// }
// Упрощенная конструкция if

// let value = условие ? значение1 : значение2
// let age = +prompt('Введите пожалуйста ваш возраст: ')
// let a = (age < 3) ? alert('Ты ещё малыш') : alert('Ты взрослый дядя')

// let birth_of_year = +prompt('Введите пожалуйста ваш возраст: ')
// let ageUser =  (birth_of_year == 25) ? alert('Ты уже большой') : (birth_of_year > 0 && birth_of_year < 25) ?  alert('Ты ещё маленький') : alert('Ты кто?!!!!');


// let a = 2
// let b = 8 
// let c = -7


// if (a > 0 && b > 0 && c > 0) {
//     alert('Все числа положительные')
// } else if (a > 0 && b > 0 && c < 0){
//     alert('Два числа положительных')
// }
// IF 1
// let a = +prompt('Введите целое число')
// if(a>0){
//     a++;
// }
// alert(a);
// IF 2
// let a = +prompt('Введите целое число')
// if (a>0){
//     a++
// } else {
//     a -= 2
// }
// alert(a)
// IF 3
// let a = +prompt('Введите целое число')
// if (a>0){
//     a++
// } else if (a<0) {
//     a -= 2
// } else {
//     a=10;
// }
// alert(a)
// IF 4
// let a = +prompt('Введите первое целое число')
// let b = +prompt('Введите второе целое число')
// let c = +prompt('Введите третье целое число')
// if (a>=0 && b>=0 && c>=0){
//     alert('Все числа положительны')
// } else if ((a>=0 && b>=0 && c<0) || (a<0 && b>=0 && c>=0) || a>=0 && b<0 && c>=0){
//     alert('Два числа положительные')
// } else if ((a<0 && b<0 && c>=0) || (a<0 && b>=0 && c<0) || (a>=0 && b<0 && c<0)){
//     alert('Одно число положительное')
// } else {
//     alert('Положительных чисел нет')
// }
// IF 5
// let a = +prompt('Введите первое целое число')
// let b = +prompt('Введите второе целое число')
// let c = +prompt('Введите третье целое число')
// if (a>=0 && b>=0 && c>=0){
//     alert('Все числа положительны')
// } else if ((a>=0 && b>=0 && c<0) || (a<0 && b>=0 && c>=0) || a>=0 && b<0 && c>=0){
//     alert('Два числа положительные. ' + 'Одно число отрицательное')
// } else if ((a<0 && b<0 && c>=0) || (a<0 && b>=0 && c<0) || (a>=0 && b<0 && c<0)){
//     alert('Одно число положительное. ' + 'Два числа отрицательных')
// } else {
//     alert('Все числа отрицательные')
// }
// IF 6
// let a = +prompt('Введите первое число')
// let b = +prompt('Введите второе число')
// if (a>b) {
//     alert(a)
//     console.log(a)
// } else if(a<b){
//     alert(b)
//     console.log(b)
// } else{
//     alert('Эти числа равны')
//     console.log(a,b)
// }
// IF 7
// let a = +prompt('Введите первое число')
// let b = +prompt('Введите второе число')
// if (a<b) {
//     alert(a)
//     console.log(a)
// } else if(a>b){
//     alert(b)
//     console.log(b)
// } else{
//     alert('Эти числа равны')
//     console.log(a,b)
// }
// IF 8
// let a = +prompt('Введите первое число')
// let b = +prompt('Введите второе число')
// if (a>b) {
//     alert('Вот оно найбольшее число = ' + a)
//     console.log(a)
//     alert('Вот оно найменьшее число = ' + b)
//     console.log(b)
// } else if(a>b){
//     alert('Вот оно найбольшее число = ' + b)
//     console.log(b)
//     alert('Вот оно найменьшее число = ' + a)
//     console.log(a)
// } else{
//     alert('Эти числа равны')
//     console.log(a,b)
// }
// IF 9
// let a = +prompt('Введите первое число')
// let b = +prompt('Введите второе число')
// if (a>b) {
//     alert('Значение A = ' + b)
//     alert('Значение B = ' + a)
// } else if (a<b){
//     alert('Значение A = ' + a)
//     alert('Значение B = ' + b)
// } else {
//     alert('Ты меня озодачил, эти числа равны, что супротивит нашему условию.')
// }
// console.log(a,b)
// IF 10
// let a = +prompt('Введите первое число')
// let b = +prompt('Введите второе число')
// if (a!=b) {
//     alert('Сумма этих значений = ' (a+b))
// } else{
//     alert('Значение а = ' + (a=0))
//     alert('Значение b = ' + (b=0))
// }
// console.log(a,b)
// IF 11
// let a = +prompt('Введите первое число')
// let b = +prompt('Введите второе число')
// if (a!=b) {
//     if(a>b){
//         alert('Значение A = ' + a)
//         alert('Значение B = ' + a)
//     } else {
//         alert('Значение A = ' + b)
//         alert('Значение B = ' + b) 
//     }
// } else{
//     alert('Значение а = ' + (a=0))
//     alert('Значение b = ' + (b=0))
// }
// console.log(a,b)
// IF 12
// let a = +prompt('Введите первое число')
// let b = +prompt('Введите второе число')
// let c = +prompt('Введите третье число')
// if ((a<b)&&(a<c)) {
//     alert('Найбольшое значение = ' + a)
// } else if ((c<b)&&(c<a)) {
//     alert('Найбольшое значение = ' + c)
// } else{
//     alert('Найбольшее значение = ' + b)
// }
// console.log(a,b,c)
// IF 13
// let a = +prompt('Введите первое число')
// let b = +prompt('Введите второе число')
// let c = +prompt('Введите третье число')
// if (a>b){
//     if (a<c) {
//         alert('Среднее значение = ' + a)
//     } else if (b>c) {
//         alert('Среднее значение = ' + b)
//     } else{
//         alert('Среднее значение = ' + c)
//     }
// } else {
//     if(a>c) {
//         alert('Среднее значение = ' + a)
//     } else if(b>c) {
//         alert('Среднее значение = ' + c)
//     } else{
//         alert('Среднее значение = ' + b)
//     }
// }
// console.log(a,b,c)
// IF 14
// let a = +prompt('Введите первое число')
// let b = +prompt('Введите второе число')
// let c = +prompt('Введите третье число')
// if ((a>b)&&(a>c)&&(b>c)) {
//     alert('Наибольшое значение = ' + a)
//     alert('Наименьшое значение = ' + c)
// } else if((a<b)&&(a>c)&&(b>c)) {
//     alert('Наибольшое значение = ' + b)
//     alert('Наименьшое значение = ' + c)
// } else if((a<b)&&(a<c)&&(b<c)){
//     alert('Наибольшое значение = ' + c)
//     alert('Наименьшое значение = ' + a) 
// } else if((a>b)&&(a<c)&&(b<c)){
//     alert('Наибольшое значение = ' + c)
//     alert('Наименьшое значение = ' + b) 
// } else if((a<b)&&(a<c)&&(b>c)) {
//     alert('Наибольшое значение = ' + b)
//     alert('Наименьшое значение = ' + a) 
// } else if((a>b)&&(a>c)&&(b<c)) {
//     alert('Наибольшое значение = ' + a)
//     alert('Наименьшое значение = ' + b) 
// } else if ((a=b) && (b=c) && (a=c)) {
//     alert('Все числа одинаковы')
// } else {
//     alert('Два числа одного значения')
// }
// console.log(a,b,c)
// IF 15
// let a = +prompt('Введите первое число')
// let b = +prompt('Введите второе число')
// let c = +prompt('Введите третье число')
// if ((a>b)&&(a>c)&&(b>c)) {
//     alert('Сума найбольших равна = ' + (a+b))
// } else if((a<b)&&(a>c)&&(b>c)) {
//     alert('Сума найбольших равна = ' + (b+a))
// } else if((a<b)&&(a<c)&&(b<c)){
//     alert('Сума найбольших равна = ' + (b+c))
// } else if((a>b)&&(a<c)&&(b<c)){
//     alert('Сума найбольших равна = ' + (a+c))
// } else if((a<b)&&(a<c)&&(b>c)) {
//     alert('Сума найбольших равна = ' + (b+c))
// } else if((a>b)&&(a>c)&&(b<c)) {
//     alert('Сума найбольших равна = ' + (a+c))
// } else if ((a=b)>c) {
//    alert('Сума найбольших значений = ' + (a+b))
// } else if ((a=b)<c) {
//     alert('Сума найбольших значений = ' + (a+c))
//  } else if (a<(b=c)) {
//     alert('Сума найбольших значений = ' + (b+c))
//  } else if (a>(b=c)) {
//     alert('Сума найбольших значений = ' + (a+c))
//  } else if ((a=c)>b) {
//     alert('Сума найбольших значений = ' + (a+c))
//  } else if ((a=c)<b) {
//     alert('Сума найбольших значений = ' + (b+c))
//  } else{
//     alert('Все числа равны , либо сума равняется большему числу')
// }
// console.log(a,b,c)

