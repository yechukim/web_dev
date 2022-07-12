### 함수형 도구 체이닝

> 체인으로 복합적인 계산을 표현하는 방식을 알아보자

#### 체이닝

> 여러 딘계를 하나로 조합하는 것

- 함수 시그니처를 정의하는 것으로 시작

✅ 인자로 받은 값을 그대로 리턴하는 함수 :항등 함수 identify function

> 아무일도 하지 않지만, 아무것도 하지 않아야 할 때 유용하게 쓸 수 있음

##### 체인을 명확하게 만들기

1. 단계에 이름 붙이기
2. 콜백에 이름을 붙이기
3. 위의 두 방법을 비교하기

일반적으로는 2번이 더 명확함

```js
function average(numbers) {
	let sum = reduce(numbers, 0, sum)
	return sum / numbers.length
}
function sum(total, num) {
	return total + num
}

function averagePurchaseTotals(customers) {
	let totals = map(customers, getTotals)
	return average(totals)
}
function getTotals(customer) {
	return map(customer.purchases, function (purchase) {
		return purchase.total
	})
}
```

✅ filter, map 은 모두 새로운 배열을 만들어 함수가 호출될 때마다 새로운 배열이 생겨서 크기가 클 수 있음\
만들어진 배열이 필요없을 때 가비지 컬렉터라 빠르게 처리하기 때문에 대부분 문제되지 x

💫 map, filter, reduce는 쉽게 최적화 할 수 있음.
최적화는 병목이 생겼을 때만 쓰는게 좋고, 대부분의 경우 여러 단계를 사용하는 것이 더 명확

> 이를 스트림 결합 stream fusin 이라고 함

```js
// 값 하나에 두번 map
let names = map(customers, getFullName)
let nameLengths = map(names, stringLength)

// map 한번
let nameLengths = map(customers, function (customer) {
	return stringLength(getFullName(customer))
})
```

#### 반복문을 함수형 도구로 리팩터링

1. 데이터 만들기
2. 배열 전체 다루기
3. 작은 단계로 나누기
