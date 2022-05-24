## Interaction
> 데스크탑, 노트북의 경우에도 터치할 수 있는 경우가 있다.\
> 화면 크기에 따라 input을 다르게 하기 보다는 css media feature를 사용할 것


### pointer
> 포인터 미디어 쿼리 feature:`none, coarse, fine`

`none`: 키보드로 웹사이트 이용

`coarse`: 주요 인풋이 아주 정확하지 x, 터치스크린을 손가락으로 터치 => coarse pointer

`fine`: 주요 인풋이 마우스나, 스타일러스와 같은 fine pointer  

```css
button {
  padding: 0.5em 1em;
}
@media (pointer: coarse) {
  button {
    padding: 1em 2em;
  }
}
```
coarse pointer 의 경우 버튼을 더 크게 만든다.

### any-pointer
> pointer 는 주요 인풋 메커니즘, 하나 이상을 이용할 수 있다.\
pointing device가 뭐든 다 report 함.

디바이스가 fine, coarse 인풋이 다 있다면 결국 coarse 스타일이 적용된다
```css
@media (any-pointer: fine) {
  button {
    padding: 0.5em 1em;
  }
}
@media (any-pointer: coarse) {
  button {
    padding: 1em 2em;
  }
}
```

### hover
```css
button .extra {
  visibility: visible;
}
@media (hover: hover) {
  button .extra {
    visibility: hidden;
  }
  button:is(:hover, :focus) .extra {
    visibility: visible;
  }
}
```

### any-hover
> 아까 any-pointer와 비슷하게, hover는 주요 인풋 메커니즘만 인식하는 반면, `any-hover`는 인풋 메커니즘이 hover 할수 있다면 true가 됨

### input types
> input type을 줘서 가장 적합한 키보드를 쓸 수 있도록 하자.\
> url, tel, email etc

### input modes
> 디테일한 것 까지 적어줄 수 있음 \
```html
<label for="age">Age</label>
<input type="number" id="age" inputmode="numeric">
```

### autocomplete
```html
<label for="name">Name</label>
<input type="text" id="name" autocomplete="name">


```