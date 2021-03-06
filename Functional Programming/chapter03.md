### 액션, 계산, 데이터

- 액션, 계산, 데이터는 어디에나 적용할 수 있다
- 데이터를 먼저 찾아보자

#### ✅ 데이터에 대하여

> 데이터는 이벤트에 대한 사실, 일어난 일의 결과를 기록한다.

- 구현: 데이터 타입 이용
- 의미담기 : 데이터 구조로 (e.g 순서가 중요한 경우, 순서를 보장하는 데이터 구조의 사용)
- 불변 데이터 구조 원칙 2가지
  1. copy-on-write: 변경시 복사본 만들기
  2. defensive copy: 보관하려고 하는 데이터 복사본 만들기
- 유연하게 해석할 수 있지만, 해석이 반드시 필요함.

### 쿠폰 보내기 관련

- 계산으로 바꿀 수 있는 액션이 있다면 바꾸는 것이 좋다 (계산은 외부에 영향을 주지 않기 때문에 테스트가 용이)
- 계산을 더 나눌 수도 있지만, 구현하기 쉽다고 생각하는 시점에서 멈춰야 한다

```js
const subscriber = {
	email: 'sam@gmail.com',
	rec_count: 16,
}
const coupon = {
	code: '10percent',
	rank: 'bad',
}
const rank1 = 'best'
const rank2 = 'good'
const rank3 = 'bad'

//어떤 구독자가 어떤 등급의 쿠폰을 받을지 계산
function subCouponRank(subscriber) {
	if (subscriber.rec_count >= 10) return 'best'
	return 'good'
}
//
```

1. 테이블 행은 js 객체로 표현할 수 있음
2. 쿠폰 등급은 문자열로
3. js 에서 계산은 함수로
4. 액션도 계산처럼 함수로 구현(함수만 보고 계산 or 액션 구분하기 쉽지 x)

#### 일반적인 구현 순서: 데이터 -> 계산 -> 액션

#### ✅ 계산에 대하여

#### 💫 계산은 입력값으로 출력값을 만드는 것이다.

> 실행시점, 횟수에 관계 없이 항상 같은 입력값에 대해 같은 출력값을 리턴

- 구현: 함수
- 의미담기: 연산을 담는다. 입력값-> 출력값으로 표현
- 계산이 좋은 이유 1.테스트 용이, 2. 기계분석 용이, 3. 조합 용이 (high order 참고)
- 실행하기 전에 알 수 없음 :(
- = 순수함수, 수학 함수

#### 💫 액션은 코드 전체로 퍼진다. (함수 안에서의 액션함수 호출 -> 전체 함수가 액션함수)

JS에서의 액션 형태

- 함수, 메소드 호출
- 생성자, 표현식, 상태 ..

#### ✅ 액션에 대하여

> 실행시점, 횟수에 의존, 언제실행되는지(순서), 얼마나 실행되는지(반복)

- 구현: 함수
- 의미담기: 어떤 일을 하려는지 잘 알아야 함(외부세상에 영향)
- =순수하지 않은 함수, 부수효과가 있는 함수, 부수효과 함수
- 가능한 액션을 적게 사용하자
- 가능한 작게 만들자
- 액션이 호출시점, 횟수에 덜 의존하도록 만들자
