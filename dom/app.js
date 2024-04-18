// let elem1 = document.querySelector('#elem1');
// console.log(elem1);

// let elem2 = document.querySelector('#elem2');
// console.log(elem2);

// let elem3 = document.querySelector('#elem3');
// console.log(elem3);

// let blockp = document.querySelector('#block p');
// console.log(blockp);

// let blockp2 = document.querySelector('.block p');
// console.log(blockp2);

// let blockp3 = document.querySelector('.block p');
// console.log(blockp3);

// let button1 = document.querySelector('#button1');
// button1.addEventListener('click', func1);
// button1.addEventListener('click', function() {
// 	console.log('1');
// });

// let button2 = document.querySelector('#button2');
// button2.addEventListener('click', func2);
// button2.addEventListener('click', function() {
// 	console.log('2');
// });

// let button3 = document.querySelector('#button3');
// button3.addEventListener('click', function() {
// 	console.log('3');
// });

// function func1() {
// 	console.log(1);
// }

// function func2() {
// 	console.log(2);
// }

// function func() {
// 	console.log('message');
// }

// let elem4 = document.querySelector('#elem4');
// let elem5 = document.querySelector('#elem5');
// let elem6 = document.querySelector('#elem6');
// let elem7 = document.querySelector('#elem7');
// let elem8 = document.querySelector('#elem8');

// function func() {
// 	console.log('message');
// }

// elem4.addEventListener('click', func);
// elem5.addEventListener('click', func);
// elem6.addEventListener('click', func);
// elem7.addEventListener('click', func);
// elem8.addEventListener('click', func);

// function func3() {
// 	console.log('1');
// }

// function func4() {
// 	console.log('2');
// }

// function func5() {
// 	console.log('3');
// }

// let elem = document.querySelector('#elem');
// elem.addEventListener('click', func3);
// elem.addEventListener('click', func4);
// elem.addEventListener('click', func5);

// let btnst = document.querySelector('.btn');
// btnst.addEventListener('dbclick', function() {
// 	console.log('3');
// });

// let btns = document.querySelector('.btn1');
// btns.addEventListener('mouseover', function() {
// 	console.log('1');
// });

// btns.addEventListener('mouseout', function() {
// 	console.log('2');
// });

// let text = document.querySelector('.text');
// let textlis = document.querySelector('.text-lis');
// textlis.addEventListener('click', function() {
// 	console.log(text.textContent);
// });

// let text2 = document.querySelector('.text2');
// let textwr = document.querySelector('.text-wr');
// textwr.addEventListener('click', function() {
// 	text2.textContent = '!!!';
// });

// let elem9 = document.querySelector('.calcul1').textContent;
// let elem10 = document.querySelector('.calcul2').textContent;
// let elem11 = document.querySelector('.calcul');
// elem11.addEventListener('click', function() {
//     let num1 = Number(elem9);
//     let num2 = Number(elem10);
//     console.log(num1 + num2);
// });

// let elem12 = document.querySelector('.calcul3').textContent;
// let elem13 = document.querySelector('.calcul4').textContent;
// let elem14 = document.querySelector('.calcul5').textContent;
// let elem15 = document.querySelector('.calcul6')
// let elem16 = document.querySelector('.calcul7')
// elem16.addEventListener('click', function() {
//     let num1 = Number(elem12);
//     let num2 = Number(elem13);
//     let num3 = Number(elem14);
//     elem15.textContent = (num1 + num2 + num3);
// });

// let elem22 = document.querySelector('#elem22');
// console.log(elem22.innerHTML);
// console.log(elem22.id);
// console.log(elem22.type);

// let elem23 = document.querySelector('#elem23');
// elem23.addEventListener('click', function() {
//     console.log(elem22.type);
// });

// let elem24 = document.querySelector('#elem24');
// let elem25 = document.querySelector('#elem25');
// let elem26 = document.querySelector('#elem26');
// elem26.addEventListener('click', function() {
//     elem25.textContent = (elem24.href);
// });

// let elem27 = document.querySelector('#elem27');
// elem27.addEventListener('click', function() {
//     console.log(elem27.value);
//     elem27.value = 'new text';
// });

// let elem28 = document.querySelector('#elem28');
// elem28.addEventListener('focus', function() {
//     elem28.value = '2';
// });

// elem28.addEventListener('blur', function() {
//     elem28.value = '1';
// });

// let image = document.querySelector('#image').console.log(image.src);

// let elem29 = document.querySelector('#elem29');
// elem29.addEventListener('focus', function() {
//     this.value = '1';
// });
// elem29.addEventListener('blur', function() {
//     this.value = '2';
// });

// let elems = document.querySelectorAll('.www');

// for (let elem of elems) {
// 	elem.textContent = elem.textContent + '!';
// }

// let elems = document.querySelectorAll('p');

// for (let elem of elems) {
// 	elem.addEventListener('click', func);
// }

// function func() {
// 	console.log(this.textContent);
// }

// let divs = document.querySelectorAll('div');

// for (let div of divs) {
// 	div.addEventListener('click', function() {
//         this.textContent++;
//     });
// }

// let button = document.querySelector('#button');
// button.addEventListener('click', func);

// function func() {
// 	console.log('!!!');
// 	this.removeEventListener('click', func);
// }

// let elems = document.querySelectorAll('p');

// for (let elem of elems) {
// 	elem.addEventListener('click', function func() {
// 		console.log(this.textContent);
// 		this.removeEventListener('click', func); // отвязываем функцию
// 	});
// }

// практика
let inputn1 = document.querySelector('.n1 input')
let pn1 = document.querySelector('.n1 p')
inputn1.addEventListener('blur', function () {
	pn1.textContent = pn1.textContent + inputn1.value
})

let inputn2 = document.querySelector('.n2inp')
let inputn3 = document.querySelector('.n2inp2')
let pn2 = document.querySelector('.n2p')
let btn1 = document.querySelector('.n2btn')
btn1.addEventListener('click', function () {
	pn2.textContent = Number(inputn2.value) + Number(inputn3.value)
})

let inputn4 = document.querySelector('.n3inp')
let pn3 = document.querySelector('.n3p')
inputn4.addEventListener('blur', function () {
	// let arr = (inputn4.value.split(''));
	// pn3.textContent = Number(arr[0]) + Number(arr[1]) + Number(arr[2]);

	let number = inputn4.value
	let sum = 0

	for (let i = 0; i < number.length; i++) {
		sum += Number(number[i])
	}

	pn3.textContent = sum
})

let inputn5 = document.querySelector('.n4inp')
let pn4 = document.querySelector('.n4p')
inputn5.addEventListener('blur', function () {
	let arr = inputn5.value.split(',')
	let sum = 0
	let count = 0

	for (let number of arr) {
		sum += Number(number)
		count++
	}

	pn4.textContent = sum / count
})

let inputn6 = document.querySelector('.n5inp')
let pn5 = document.querySelector('.n5p1')
let pn6 = document.querySelector('.n5p2')
let pn7 = document.querySelector('.n5p3')
inputn6.addEventListener('blur', function () {
	let arr = inputn6.value.split(' ')

	pn5.value = arr[0]
	pn6.value = arr[1]
	pn7.value = arr[2]
})

let inputn7 = document.querySelector('.n6inp')
inputn7.addEventListener('blur', function () {
	let arr = inputn7.value.split(' ')
	let arr1 = arr[0]
	let arr2 = arr[1]
	let arr3 = arr[2]
	let res1 = arr1.slice(0, 1).toUpperCase() + arr1.slice(1)
	let res2 = arr2.slice(0, 1).toUpperCase() + arr2.slice(1)
	let res3 = arr3.slice(0, 1).toUpperCase() + arr3.slice(1)
	inputn7.value = res1 + ' ' + res2 + ' ' + res3
})

let inputn8 = document.querySelector('.n7inp')
inputn8.addEventListener('blur', function () {
	inputn8.value = inputn8.value.split(' ').length
})

let inputn9 = document.querySelector('.n8inp')
inputn9.value = inputn9.value.split('.')
inputn9.addEventListener('blur', function () {
	inputn9.value = inputn9.value.split('.').reverse().join('-')
})

let inputn10 = document.querySelector('.n9inp')
let btn2 = document.querySelector('.n9btn')
let p1 = document.querySelector('.n9p')
btn2.addEventListener('click', function () {
	let word = inputn10.value.toLowerCase()

	if (rev(word)) {
		p1.textContent = 'да оно одинаковое с двух сторон'
	} else {
		p1.textContent = 'нееее'
	}

	function rev(word) {
		return word === word.split('').reverse().join('')
	}
})

let inputn11 = document.querySelector('.n10inp')
let p2 = document.querySelector('.n10p')
inputn11.addEventListener('blur', function () {
	let number = inputn11.value

	if (poisл(number)) {
		p2.textContent = 'тут есть число 3'
	} else {
		p2.textContent = 'нету тут числа 3'
	}

	function poisл(number) {
		let numberString = number.toString()
		return numberString.includes('3')
	}
})

let p3 = document.querySelectorAll('.n11p')
let btn3 = document.querySelector('.n11btn')
btn3.addEventListener('click', function () {
	p3.forEach(function (p, index) {
		p.textContent = p.textContent + (index + 1)
	})
})

let a1 = document.querySelectorAll('.n12a')
let btn4 = document.querySelector('.n12btn')
btn4.addEventListener('click', function () {
	a1.forEach(function (a) {
		a.textContent = a.textContent + '(' + a.href + ')'
	})
})

let alist = document.querySelectorAll('.n13 a')
let btn6 = document.querySelector('.n13btn')
btn6.addEventListener('click', function () {
	alist.forEach(function (link) {
		if (link.href.startsWith('http://')) {
			link.href = link.href + '&rarr;'
			link.textContent = 'сработало'
		}
	})
})

let p4 = document.querySelector('.n14p1')
let p5 = document.querySelector('.n14p2')
p4.addEventListener('click', function () {
	p4.textContent = Number(p4.textContent) ** 2
})

p5.addEventListener('click', function () {
	p5.textContent = Number(p5.textContent) ** 2
})

let inputnx = document.querySelector('.n15inp')
let px = document.querySelector('.n15p')
inputnx.addEventListener('blur', function () {
	let date = inputnx.value.split('.').reverse().join(',')
	let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб']

	let dater = new Date(date)
	let day = dater.getDay()
	let dayres = days[day]

	px.textContent = 'День недели: ' + dayres
})

let inputn12 = document.querySelector('.n17inp')
let p6 = document.querySelector('.n17p1')
let p7 = document.querySelector('.n17p2')
let clc = 0
p6.addEventListener('click', function () {
	clc++
	inputn12.value = clc
})

p7.addEventListener('click', function () {
	clc++
	inputn12.value = clc
})

let div = document.querySelectorAll('.n18 div')
let btn7 = document.querySelector('.n18btn')
btn7.addEventListener('click', function () {
	div.forEach(function (div) {
		if (div.textContent.length > 10) {
			div.textContent = div.textContent.slice(0, 10) + '...'
		}
	})
})

let inputn14 = document.querySelector('.n19inp')
let btn8 = document.querySelector('.n19btn')
btn8.addEventListener('click', function () {
	let result = ''
	let str = '0123456789qwertyuiopasdfghjklzxcvbnm'

	for (let i = 0; i < 8; i++) {
		result += str[getRandom(0, str.length - 1)]
	}
	inputn14.value = result
})
function getRandom(min, max) {
	return Math.floor(Math.random() * max - min + 1) + min
}

let inputn15 = document.querySelector('.n20inp')
let btn9 = document.querySelector('.n20btn')
btn9.addEventListener('click', function () {
	let result = ''
	let str = inputn15.value
	let num = inputn15.value.length

	for (let i = 0; i < num; i++) {
		result += str[getRandom(0, str.length - 1)]
	}
	inputn15.value = result
})
function getRandom(min, max) {
	return Math.floor(Math.random() * max - min + 1) + min
}

let inputn13 = document.querySelector('.n21inp')
let btn5 = document.querySelector('.n21btn')
let p8 = document.querySelector('.n21p')
btn5.addEventListener('click', function () {
	p8.textContent = ((Number(inputn13.value) - 32) * 5) / 9
})

let inputnx2 = document.querySelector('.n22inp')
let px2 = document.querySelector('.n22p')
inputnx2.addEventListener('blur', function () {
	num = inputnx2.value
	function factorial(num) {
		return num != 1 ? num * factorial(num - 1) : 1
	}

	px2.textContent = 'фактоииал вашего числа: ' + factorial(num)
})

let inputnx3 = document.querySelector('.n223inp1')
let inputnx4 = document.querySelector('.n223inp2')
let inputnx5 = document.querySelector('.n223inp3')
let px3 = document.querySelector('.n23p')
let btnx = document.querySelector('.n23b')
btnx.addEventListener('click', function () {
	let a = inputnx3.value
	let b = inputnx4.value
	let c = inputnx5.value

	d = b ** 2 - 4 * a * c

	if (d > 0) {
		x1 = (-b + Math.sqrt(d)) / (2 * a)
		x2 = (-b - Math.sqrt(d)) / (2 * a)
		px3.textContent = 'корни вашего уравнения: ' + x1 + ' и' + x1
	} else if (d == 0) {
		x = -b / (2 * a)
		px3.textContent = 'корень вашего уравнения: ' + x
	} else {
		px3.textContent = 'корни вашего уравнения: их нет('
	}
})
