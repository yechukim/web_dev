const navi_counter = document.querySelector('.navi')
const ody_counter = document.querySelector('.ody')

const navi = document.querySelector('.navi-img')
const ody = document.querySelector('.ody-img')

let num = 0

navi.addEventListener(
	'click',
	(function (numCopy) {
		return function () {
			numCopy++
			navi_counter.innerText = numCopy
		}
	})(num)
)

ody.addEventListener(
	'click',
	(function (numCopy) {
		return function () {
			numCopy++
			ody_counter.innerText = numCopy
		}
	})(num)
)
