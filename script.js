'use strict';


// 1 task
let a = '1';

if( a === '1') {
    console.log('Верно');
}else{
    console.log('Неверно');
}

// 2 task
let item = false;
if(!item) {
    console.log('Верно');
}else{
    console.log('Неверно');
}

(!item ? console.log('Верно') : console.log('Неверно')); // используется только если 2 варианта сравнения



//3 task
let m = 2;
if( m > 0 && m < 4) {
    console.log('Верно');
}
else{
    console.log('Неверно');
}

//4 task
let s = 4;
let d = 3;
if( s > 3 && s < 12 || d >= 7 && d < 15 ) {
    console.log('Верно');
}
else{
    console.log('Неверно');
}

//5 task
let month = 12;
if( month >= 3 && month <= 5 ){
    console.log('Весна');
}
else if( month >= 6 && month <= 8 ){
    console.log('Лето');
}
else if( month >= 9 && month <= 11 ){
    console.log('Осень');
} 
else{
    console.log('Зима');
}

//6 task
for(let i = 0; i < 100; i += 1){
    if(i%2 === 0){
        console.log(i);
    }
}