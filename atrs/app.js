let elem = document.querySelector('#elem')
let evalue = elem.value
let eclass = elem.classList

console.log(evalue)
console.log(eclass)

let elem2 = document.querySelector('#elem2')
elem2.setAttribute('value', 'text')
elem2.classList = 'valid'
console.log(elem2.hasAttribute('value'))

let elem3 = document.querySelector('#elem3')
elem3.removeAttribute('value')

let elem4 = document.querySelector('#elem4')
elem4.addEventListener('click', function () {
	elem4.textContent = elem4.textContent + elem4.dataset.text
})

let btn1 = document.querySelector('.btn1')
let btn2 = document.querySelector('.btn2')
let p1 = document.querySelector('.p1')

btn1.setAttribute('data-num', '0')

btn1.addEventListener('click', function () {
	let i = Number(btn1.dataset.num)
	btn1.dataset.num = i + 1
})

btn2.addEventListener('click', function () {
	p1.textContent = btn1.dataset.num
})

let elem5 = document.querySelector('#elem5')
let p2 = document.querySelector('.p2')

elem5.addEventListener('blur', function () {
	let t = Number(elem5.dataset.length)
	let g = elem5.value.split('').length

	if (t != g) {
		p2.textContent = 'не равно пяти'
	} else {
		p2.textContent = 'равно пяти'
	}
})

let elem6 = document.querySelector('#elem6')
let p3 = document.querySelector('.p3')

elem6.addEventListener('blur', function () {
	let t = Number(elem6.dataset.min)
	let c = Number(elem6.dataset.max)
	let g = elem6.value.split('').length

	if (g < t || g > c) {
		p3.textContent = 'не входит в диапозон'
	} else {
		p3.textContent = 'входит в диапозон'
	}
})

let elem7 = document.querySelector('#elem7')

elem7.addEventListener('click', function () {
	let j = Number(elem7.dataset.productprice)
	let f = Number(elem7.dataset.productamount)

	elem7.textContent = elem7.textContent + j * f
})

let elem8 = document.querySelector('#elem8')
console.log(elem8.classList.length)

let classNames = elem8.classList
for (let className of classNames) {
	console.log(className)
}

elem8.classList.add('xxx')
elem8.classList.remove('zzz')
console.log(elem8.classList.contains('ggg'))
elem8.classList.toggle('www')
