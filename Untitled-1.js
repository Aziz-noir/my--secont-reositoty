//'user strict';


//alert('Hello');

//const result = confirm ('Are you here');
//console.log(result);

//const answer = prompt('Вам есть 18?', '18');
//console.log(answer);

// const answer = [];

// answer[0] = prompt('Как ваше имя','');
// answer[1] = prompt('Как ваше фамилия','');
// answer[2] = prompt('Сколько вам лет','');

// console.log(typeof(answer));
// console.log(typeof(null));

// const category = 'toys';

// console.log(`https://someurl.com/${category}/5`);

// const user = 'Aziz';
// alert(`Hello, ${user}`);


// console.log('arr' + ' - object');
// console.log(4 + + '5');

// let incr = 10,
// 	dicr = 10;

// incr++;
// dicr--;

// console.log(incr++);
// console.log(dicr--);


// const numerOffilms = +prompt('Сколько фильмов вы уже посмотрели','');


// const personalMovieDB = {
// 	count: numerOffilms,
// 	movies: {},
// 	actors: {},
// 	genres: [],
// 	privat: false
// };

// const a = prompt('Один из последних просмотренных фильмов?', ''),
// 	  b = prompt('На сколько оцените кго?',''),	
// 	  c = prompt('Один из последних просмотренных фильмов?', ''),
// 	  d = prompt('На сколько оцените кго?','');


// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);


// if (4 == 9) {
// 	console.log('Ok!');
// } else {
// 	console.log('Error');
// }

// const num = 50

// if (num < 49) {
// 	console.log('Error');
// } else if (num > 100) {
// 	console.log('a lot of');
// } else {
// 	console.log('Ok!');
// }


// (num === 50) ? console.log('Ok!') : console.log('Error');


// const num = 50;

// switch (num) {
// 	case 49: 
// 		console.log('Error');
// 		break;
// 	case 100:
// 		console.log('Error');
// 		break;
// 	case 50:
// 		console.log('Ok');
// 		break;
// 	default:
// 		console.log('No');
// 		break;		
// }		


// const hamburger = 5;
// const fries = 0;

// if (hamburger && fries) {
// 	console.log('Im full');
// }



// const hamburger = 3;
// const fries = 1;
// const cola = 0;

// console.log(hamburger === 3 && cola && fries);

// if (hamburger === 3 && cola === 1 && fries) {
// 	console.log('All full');
// }
// 	else {
// 		console.log('We are leaving');
// 	}

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// // console.log(hamburger === 3 && cola && fries);

// if (hamburger ===3 && cola === 2 || fries ===3 && nuggets) {
// 	console.log('everyone is happy');
// }
// 	else {
// 		console.log('We are leaving');
// 	}

// let jReport, aReport, sRepot, mReport = 'done';

// console.log(jReport || aReport || sRepot || mReport);


// console.log( NaN || 2 || undefined ); //undefined -

// console.log( NaN && 2 && undefined );  //nan +


// console.log( 1 && 2 && 3 ); //true 3  +


// console.log( !1 && 2 || !3 );  //1 i -3 или false +


// console.log( 25 || null && !3 ); //null -3 -


// console.log( NaN || null || !3 || undefined || 5); //5 +


// console.log( NaN || null && !3 && undefined || 5); //5 +


// console.log( 5 === 5 && 3 > 1 || 5); //true 5 +


// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;


// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;


// if (hamburger || cola || fries === 3 || nuggets) {
//    console.log('Done!')
// }


// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;


// if (hamburger && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }


let num = 50;
 while (num < 55) {
    console.log(num)
    num++;
 }

do {
   console.log(num)
   num++;
}
while (num <= 55);

for (let i = 1; i <=10; i++) {
   if (i=== 6) {
      break;
      //continue;
   }
   console.log(i);
}

for