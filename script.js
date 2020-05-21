


let prev = document.querySelector('#prev'),
	next = document.querySelector('#next')

//блок с кнопками
let myBtns = document.querySelector('#btns')

//массив всех кнопок
let arr = []
//номер текущей кнопки
let current = 1
//количество страниц
let num = 21

//показываемые кнопки
let start = 0,
	end = 9

//выгружаем кнопки на страницу
for(let i = 1; i <= num; i++) {

	let btn = document.createElement('button')
	btn.textContent = i
	btn.classList.add('btnNum')
	next.before(btn)
	arr.push(btn)

}
//активная первая
activeBtn()

//листаем вперед
next.addEventListener('click', function() {

	//если последняя, тогда не листаем
	if(current == arr.length) return

	//после каждой 10 кнопки, меняем очередную десятку кнопок
	if(current%10 == 0) {
		start += 10
		end += 10

		tenBtns(arr)
	}

	current++
	activeBtn()
})

//листаем назад
prev.addEventListener('click', function() {

	//если первая, тогда не листаем
	if(current == 1) return

	//меняем при каждой (11, 21, 31 и т.д)
	if(current%10 == 1) {
		start -= 10
		end -= 10

		tenBtns(arr)
	}

	current--
	activeBtn(
})

//делаем активную текущую кнопку страницы
function activeBtn() {

	let btns = document.querySelectorAll('.btnNum')

	for(let i = 0; i < btns.length; i++) {

		btns[i].classList.remove('active')

	}
	btns[current-1].classList.add('active')

}

//делигирование на кнопки с номерами страниц
myBtns.addEventListener('click', function(event) {

	let target = event.target
	//если не кнопка - игнорируем
	if(!target.classList.contains('btnNum')) return

	current = +target.textContent
	activeBtn()
	console.log(current)

})



//показываем очередную дусятку кнопок, находящихся в интервале (start-end)
function tenBtns(arr) {
	//делаем все кнопки видимые
	for(let i = 0; i < arr.length; i++) {
		arr[i].style.display = 'block'
	}
	//и тут же скрываем все кроме нужных в интервале
	for(let i = 0; i < arr.length; i++) {

		if(i >= start && i <= end) continue

		arr[i].style.display = 'none'
	}
}

tenBtns(arr)