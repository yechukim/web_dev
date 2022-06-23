### 액션에서 계산 빼내기

### MegaMart 장바구니 관련

- DOM : HTML 페이지를 메모리상에 표현한 것
- 액션은 코드 전체로 퍼진다 !! 🥲
- 함수에 암묵적 입출력이 있으면 그 함수는 액션이 된다
- refactoring - 서브루틴 추출하기 : 함수에서 함수를 빼내 새로운 이름으로 붙임(동작은 변하지 x)
- 전역변수 바꾸기 : 출력, 전역변수 읽기 : 입력
- 전역변수 배열을 바꾸는 것은 출력(액션) => 복사본을 만들고 복사본에서 작업하고 이를 리턴해보자 `copy-on-write`
- 불변값은 생성된 다음 변하지 않아야 하지만, 생성시에는 초기화가 필요함

##### ✨암묵적 입출력 : 부수효과 ; 함수가 하려고 하는 주요 기능이 아님

#### ✅ 계산 추출의 단계

1. 계산 코드 찾아서 빼내기
2. 새 함수에 암묵적 입력과 출력 찾기
3. 암묵적 입력은 인자로, 암묵적 출력은 리턴값으로 바꿈

mine

```js
function update_shipping_icons() {
	// ..생략
	if (checkIfTotalIsTwenty(item.price, shipping_cart_total)) {
		//show
	} else {
		//hide
	}
}
function checkIfTotalIsTwenty(price, total) {
	if (price + total >= 20) return true
	return false
}
```

answer

```js
function update_shipping_icons() {
	// ..생략
	if (gets_free_shipping(shipping_cart_total, item.price)) {
		//show
	} else {
		//hide
	}
}
function gets_free_shippin(total, price) {
	return price + shipping_cart_total >= 20 // 여기 이런식으로 좀더 간단하게 써볼 것
}
```
