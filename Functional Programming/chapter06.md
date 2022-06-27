### 변경 가능한 데이터 구조를 가진 언어에서 불변성 유지하기

- 동작을 읽기 or 쓰기 or 둘다로 분류
  - 읽기 : 데이터를 바꾸지 않고 정보를 꺼냄
  - 쓰기 : 데이터를 바꿈 (=> 어디서 사용될지 몰라서 바뀌지 않도록 하는 원칙이 필요)

💫 불변성 원칙 : copy-on-write

```bash
불변형 데이터 구조를 기본으로 지원하는 언어
e.g) 하스켈, 클로저, 엘름, 얼랭, 퓨어스크립트, 엘릭서 ..

```

#### 카피-온-라이트 원칙 3단계

1. 복사본 만들기
2. 복사본 변경
3. 복사본 리턴

데이터를 바꾸지 않았고 정보를 리턴하면 `읽기` 임

```js
let mailing_list = []
function add_contac(email) {
	mailing_list.push(email)
}
function submit_form_handler(event) {
	let form = event.target
	let email = form.elements['email'].value
	add_contact(email)
}
//to copy-on-write
//mine
let mailing_list = []

function add_contact(email, mail_list) {
	let updated_mail_list = mail_list.slice().push(email)
	return updated_mail_list
}

function submit_form_handler(event) {
	let form = event.target
	let email = form.elements['email'].value

	mailing_list = add_contact(email, mailing_list)
}
//👌
```

#### 읽기/쓰기 동시 동작

> shift()가 좋은 예시\
> 카피-온-라이트로 쓰기를 읽기로 바꿀때 리턴했지만 이미 shift()는 읽기다(값 리턴함)

이럴때는..

1. 읽기, 쓰기 함수 각각 분리
2. 함수에서 값 두개 리턴

- 선택할 수 있다면 1번이 더 좋음 (책임의 분리 측면)

```js
let a = [1, 2, 3, 4]
let b = a.pop()
console.log(b) // 4
console.log(a) // [1,2,3]

//mine
//write
function remove_last(array) {
	let copied = array.slice().pop
	return copied
}
//read
function get_last(array) {
	return array[array.length - 1]
}

//return two values
function pop(array) {
	let copied_array = array.slice()
	let last = copied_array.pop()
	return {
		last,
		array: copied_array,
	}
}
```

```js
//mine
function push(array, elem) {
	return array.slice().push(elem)
}

function add_contact(mailing_list, email) {
	let list_copy = push(mailing_list, email)
	return list_copy
}

function arraySet(array, idx, value) {
	let copied_array = array.slice()
	copied_array[idx] = value
	return copied_array
}
```

#### 불변 데이터 구조를 읽는 것은 계산이다

- 변경 가능한 데이터 읽기 : 액션
- 쓰기 -> 데이터를 변경 가능한 구조로 만들기
- 쓰기 없음 -> 데이터는 변경 불가능한 데이터
- 불변 데이터 구조 읽기 : 계산
- 쓰기를 읽기로 바꾸면 계산이 많아짐

#### ✨ 당연히 변경가능한 데이터는 필요하다

#### 🤔 데이터 구조의 최상위 단계만 복사하는 것은 `얕은 복사`, 얕은 복사는 같은 메모리를 가리키는 참조에 대한 복사본을 만든다. = 구조적 공유 structural sharing

객체 또한 똑같이 카피-온-라이트 구현 가능

> 배열의 slice() 처럼 Object.assgin()을 활용!

```js
//mine
function objectSet(object, key, value) {
	const copied_object = Object.assign({}, object)
	copied_object[key] = value
	return copied_object
}

function setPrice(item, new_price) {
	return objectSet(item, 'price', new_price)

	function setQuantity(item, new_quantity) {
		return objectSet(item, 'quantity', new_quantity)
	}
	function objectDelete(object, key) {
		const copy = Object.assing({}, object)
		delete copy[key]
		return copy
	}
}
```

### 용어정리

- `중첩 데이터 nested data`: 데이터 구조 안에 데이터 구조가 있는 것, inner, top-level 이라는 용어 나옴
- `얕은 복사 shallow copy`: 중첩 데이터에서 최상위 데이터 구조만 복사
- `구조적 공유 structural sharing`: 두 중첩된 데이터 구조에서 안쪽 데이터가 같은 데이터를 참조

```js
function setQuantityByName(cart, name, quantity) {
	for (let i = 0; i < cart.length; i++) {
		if (cart[i].name === name) {
			cart[i].quantity = quantity
		}
	}
}

function setQuantityByName(cart, name, quantity) {
	const copied_cart = cart.slice()
	for (let i = 0; i < copied_cart.length; i++) {
		if (copied_cart[i].name === name) {
			copied_cart[i] = objectSet(copied_cart, 'quantity', quantity)
		}
	}
	return copied_cart
}
```
