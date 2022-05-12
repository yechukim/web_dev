## Theming
> 사용자의 기호를 디자인에 적용해봅시다 ex) 다크모드

### 브라우저 인터페이스 커스터마이징 
> 브라우저 중에는 웹사이트 팔레트에 맞게 테마 색상을 제안해줌

페이지 상단의 `meta` element에 `theme-color` 넣기
```html
<meta name="theme-color" content="#00D494">
```
스타일 정보를 HTML에 넣는게 이상하게 느껴질 수 있지만, 이렇게 하면 브라우저가 css를 기다리지 않고 로딩되자마자 인터페이스를 업데이트 한다.

js, web app manifest 파일로도 테마 색상을 정할 수 있음

[article: more about web app manifest](https://web.dev/add-manifest/)

### 다크모드

> media feature 에서 `prefers-color-scheme` 를 사용하면 접근할 수 있다.
```css
@media(prefers-color-scheme:dark){
    //dark mode styling 
}
```
✏️ 현재 맥북에서 설정한 다크모드, 라이트모드에 따라 위 스타일이 바뀜...와우

`meta` element 에서도 media feature를 사용하여 색상을 지정할 수 있다

```html
<meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)">

```
[SVG 안에서도 사용가능함(참고글)](https://blog.tomayac.com/2019/09/21/prefers-color-scheme-in-svg-favicons-for-dark-mode-icons/)

### 커스텀 프로퍼티 사용하기
> 똑같은 색상을 css에서 여러번 사용한다면 반복적으로 `prefers-color-scheme` 미디어 쿼리를 쓰는건 지루함

커스텀 프로퍼티를 사용하면 반복해서 쓸 걸 줄일 수 있다.

```css
html {
  --page-color: white;
  --ink-color: black;
}
@media (prefers-color-scheme: dark) {
  html {
    --page-color: black;
    --ink-color: white;
  }
}
body {
  background-color: var(--page-color);
  color: var(--ink-color);
}
```

[article: build color scheme](https://web.dev/building-a-color-scheme/)

### 이미지 
> svg를 사용하는 경우에도 커스텀 프로퍼티 적용가능
```css
svg {
    stroke: var(--ink-color);
    fill:var(--page-color);
}
```
밝기 조절도 할 수 있음
```css
@media (prefers-color-scheme: dark) {
  img {
    filter: brightness(.8) contrast(1.2);
  }
}
```
다크모드에서 아예 이미지를 바꾸고 싶다면?
```html
<picture>
  <source srcset="darkimage.png" media="(prefers-color-scheme: dark)">
  <img src="lightimage.png" alt="A description of the image.">
</picture>
```
### form 
> 브라우저는 form field에 기본으로 컬러 팔레트를 제공함\
브라우저에 알려주자
```css
html {
  color-scheme: light;
  accent-color:red;
}
@media (prefers-color-scheme: dark) {
  html {
    color-scheme: dark;
    accent-color:pink;
  }
}

```
`accent-color` 로 체크박스, 라디오 버튼 등 스타일링! 

html에 추가할 수도 있다.
```html
<meta name="supported-color-schemes" content="light dark">
```