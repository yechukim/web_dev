### 신뢰할 수 없는 코드를 쓰면서 불변성 지키기 🤔

> 카피-온-라이트를 적용할 수 없을때는 어떻게 불변데이터를 전달할 수 있을까?

#### ✨ 카피-온-라이트 원칙을 지키면서 안전하게 함수를 사용할 수 있는 다른 원칙 : 방어적 복사

> 들어오고 나가는 데이터의 복사본을 만든는 것.

#### 방어적 복사의 규칙

1. 데이터가 안전한 코드에서 나갈 때 복사한다.
2. 안전한 코드로 데이터가 들어올 때 복사한다.

✏️ 깊은 복사 deep copy 는 위에서 아래로, 모든 계층에 있는 중첩된 데이터 구조를 복사함

```js
function payrollCalc(employees) {
	return payrollCheckes
}
//mine
function payrollCalcSafe(employees) {
	const copied = deepCopy(employees)
	const checks = payrollCalc(copied)
	return deepCopy(checks)
}

userChanges.susbscribe(function (user) {
	const copied = deepCopy(user)
	processUser(copied)
})
```

#### 복사본 2개라면 어떤 것이 진짜 사용자일까?

> 함수형 프로그래밍에서는 유일한 객체로 사용자를 표현하지 x\
> 데이터는 이벤트에 대한 사실일뿐, 필요할때마다 여러본 복사할 수 있다.

- 깊은 복사본은 원본과 어떤 데이터 구조도 공유하지 않는다.
- 깊은 복사가 필요한 경우 lodash 라이브러리의 `cloneDeep()` 함수를 사용해보자.
