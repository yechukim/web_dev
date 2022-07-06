### 일급함수

#### 리팩터링으로 얻게되는 것

- 표준화된 원칙
- 새로운 동작에 원칙 적용 가능
- 여러개 변경시 최적화

```js
//mine
function push(array, elem) {
	return withArrayCopy(array, function (copy) {
		copy.push(elem)
	})
}

function drop_last(array) {
	return withArrayCopy(array, function (copy) {
		copy.pop()
	})
}

function drop_first(array) {
	return withArrayCopy(array, function (copy) {
		copy.shift()
	})
}

function withObjectCopy(object, fn) {
	let copy = Object.assign({}, object)
	fn(copy)
	return copy
}

function objectSet(objet, key, value) {
	return withObjectCopy(object, function (copy) {
		copy[key] = value
	})
}

function objectDelete(object, key) {
	return withObjectCopty(object, function (copy) {
		delete copy[key]
	})
}
// ✅ return 빼먹었었음
function tryCatch(action, logging) {
	try {
		return action()
	} catch (error) {
		return logging(error)
	}
}
function when(condition, fn) {
	if (condition) return fn()
}
function IF(condition, fn_one, fn_second) {
	if (condition) return fn_one()
	return fn_second()
}

function ignoreError(fn) {
	return function (a, b, c) {
		try {
			return fn(a, b, c)
		} catch (error) {
			return null
		}
	}
}

function makeAdder(number_first) {
	return function (number_second) {
		return number_first + number_second
	}
}
```

- 고차함수는 강력한 기능이지만 비용이 따른다. 능숙하게 쓸 줄 알아야 하지만, 더 좋은 콘드를 만드는데 써야 하는게 뽀인트 💫
