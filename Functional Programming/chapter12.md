### 함수형 반복

#### map

> 전달하는 함수가 계산일때 사용하기 쉽다. (액션이 되면 map을 쓰는 함수 또한 액션이 됨)

```js
function map(array, f) {
	let newArray = []
	forEach(array, function (elem) {
		newArray.push(f(elem))
	})
	return newArray
}
```

```js
map(customers, function (customer) {
	return {
		firstName: customer.firstName,
		lastName: customer.lastName,
		address: customer.address,
	}
})
```

#### filter

> map과 마찬가지로 전달하는 함수가 계산일때 쓰기 쉬움

```js
function filter(array, f) {
	let newArray = []
	forEach(array, function (elem) {
		if (f(elem)) newArray.push(elem)
	})
	return newArray
}
```

✅ true or false 를 리턴하는 함수를 보통 술어 predicate 이라고 함

```js
let testGroup = filter(customers, function (customer) {
	return customer.id % 3 === 0
})
let nonTestGroup = filter(customers, function (customer) {
	return customer.id % 3 !== 0
})
```

#### reduce

> 주의할 점 - 1. 인자의 순서, 2. 초기값 결정 방법

- 초기값 결정 방법

1. 계산이 어떤 값에서 시작하는가?
2. 빈 배열을 사용하는 경우, 어떤 값을 리턴할 것인가?
3. 비즈니스 규칙이 있는가?

```js
function reduce(array, init, f) {
	//배열, 초깃값, 누적함수
	let accum = init
	forEach(array, function (elem) {
		accum = f(accum, elem)
	})
	return accum
}
```

```js
function sum(numbers){
    return reduce(numbers, 0, function(total, number){
        return total + number
    }))
}

function product(numbers){
    return reduce(numbers, 1, function(total, number){
        return total * number
    }))
}

function min(numbers){
    return reduce(numbers, Number.MAX_VALUE, function(a,b){
        if(a > b) return b
        return a
    })
}

function max(numbers){
    return reduce(numbers, Number.MIN_VALUE, function(a,b){
        if(a > b) return a
        return b
    })
}

```

✅ reduce는 map, filter를 만들 수 있을만큼 강력

1. 실행 취소, 실행 복귀 가능
2. 테스트시 사용자 입력 다시 실행 가능
3. 시간 여행 디버깅
4. 회계 감사 추적

- 다른 언어에서 fold()와 같은 함수와 비슷

```js
//mine
function map(array, f){
    return reduce(array, [], function(arr, elem){
         arr.push(f(elem))
         return arr
    })
}
funcion filter(array, f){
    return reduce(array, [], function (arr, elem){
        if(f(elem)) arr.push(elem)
        return arr
    })
}
//another way by book
function map(array, f){
    return reduce(array, [], function(ret, item){
        return ret.concat(f([item]))
    })
}
function filter(array, f){
    return reduce(array, [], function(ret, item){
        if(f(item)) return ret.concat([item])
        return ret
    })
}
```

#### 3가지 함수 비교

1. map

> x 를 받아서 y를 리턴

2. filter

> true or false를 리턴

3. reduce

> 조합된 함수 리턴
