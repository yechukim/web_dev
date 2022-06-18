##### 그리드 연습장

> 그리드 안은 grid item, tracks라고 부르기도 함\
> 그리드는 항상 컨테이너가 있음

### 01 basic

> 그리드 컨테이너

```css
.grid-container {
	display: grid;
	/*repeat(column 개수, 1fr)
    1fr(fraction)을 넣으면 너비를 개수에 맞게 균등하게 나눠줌*/
	grid-template-columns: repeat(6, 1fr);
	grid-template-rows: 100px 200px 300px;
	gap: 10px;
	/* 그리드 아이템은 기본으로 꽉 채움 - stretch */
	justify-items: stretch;
	align-items: stretch;
}
```

> 그리드 아이템

```css
.grid-item1 {
	/* 1에서 시작해서 2만큼 차지해
    시작포인트 생략 가능, 알아서 가능한 부분부터 설정됨
    너비가 부족하면 알아서 다음 row로 넘어감
    */
	grid-column: 1 / span 2;
	/* 컨테이너에서 준 것 말고, 따로 설정하고 싶을 때 쓰기
  justify-self 또한 마찬가지 
  */
	align-self: end;
}
```

### 02 multi column

```css
/* 그리드 아이템이지만 그리드 컨테이너도 될 수 있음 */

article.featured {
	grid-column: span 3;
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 60px;
	align-items: center;
	border-bottom: 1px solid #bbc7c7;
	padding-bottom: 40px;
}
```

> 미디어 쿼리를 이용해서 브라우저 창 크기에 맞게 사이즈 조절

- 미디어 쿼리에 `max-inline-size`가 안먹는다. `max-width`만 먹는듯

### 03 holy grail

> 전체를 그리드 컨테이너로 잡고, 안의 헤더, 아티클, 푸터 등 다 span 으로 영역을 지정해줬음

### 04 mansory style

> js 없이 css 만으로 만들어야 하기 때문에, tall, short 클래스를 주어서 길고 짧은 박스들을 임의로 사이즈를 지정해줌
> letter-spacing을 타이틀 h1 div에 각각 줘서 너비를 맞게 조정해줌

```css
/* 앞으로 row가 몇개되는지는 모르지만 사이즈를 주고 싶을 때 ! */
main {
	grid-auto-rows: 250px;
}

/* 오버플로우로 처음에는 잘리지만, tall, short 클래스로 row를 주었기 때문에 그만큼 줄이 늘어난다. */
main div {
	overflow: hidden;
	background: #fff;
	box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
	border-radius: 6px;
}
main > .short {
	grid-row: span 1;
}

main > .tall {
	grid-row: span 2;
}
```

```css
/* 미디어 쿼리로 화면이 작아질떄 nav를 span4 만큼 차지하게 되서 row에는 자리가 없어서 밀려남
하지만 다시 row를 첫번째로 지정해주면 스타일이 override 되어 맨 첫쨰줄 가운데에 위치하게 된다.*/
nav {
	grid-template-columns: repeat(4, 1fr);
}

nav h1 {
	grid-column: 1 / span 4;
	grid-row: 1;
}
```

### 05 portfolio

[참고 dribble design](https://dribbble.com/shots/6676866-Photographer-Portfolio/attachments)
