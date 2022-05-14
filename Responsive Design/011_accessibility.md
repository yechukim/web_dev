## Accessibility
> 반응형 페이지는 웹사이트의 접근성을 최대한 높이기 위함임. 다른 요소는 무엇이 있을까용

### Color vision deficiency 
> 크롬 개발자 도구 렌더링 탭에서 vision deficiencies를 확인해볼 수 있다.\
> 이건 브라우저 레벨이고 시스템 레벨에서도 확인할 수 있다(맥의 경우 컬러필터가 그러함)

보통 색상에만 의존하는 건 좋은 방법은 아니다. 예로 링크가 있다면, 텍스트 색상을 주변 색상과 다르게 하되, 굵기나 줄 추가 등과 같이 변경을 해줘야 함

### Color contrast
> 색상 대비가 잘못되면 힘들죠....

텍스트와 백그라운드 대비 비율을 알 수 있는 유용한 도구들 
- totally
- VisBug
- [크롬 데브툴에서..](https://developers.google.com/codelabs/devtools-cvd#0)

`color`, `background-color`를 항상 같이 써주는 것이 좋은 방법이다.\
브라우저에 백그라운드 색상이 있을거라고 가정 x

### High contrast
> 참고: css 커스텀 속성을 사용하면 색상 그룹핑에 좋음!

`prefers-contrast` media feature를 써서 커스텀 속성 값을 업뎃
```css
@media (prefers-contrast: more) and (prefers-color-scheme: dark) {
  html {
    background-color: black;
  	color: white;
  }
}
```

### Font size
> px 이 아닌 rem, ch와 같은 상대적 유닛을 사용합시다

### keyboard navigation
> 다들 마우스나 트랙패드로 웹 페이지를 보지 않음. 키보드를 사용할 수도 있쬬

`:focus-visible` 을 사용해서 키보드 내비게이션 링크를 스타일링 할 수 있음\
tab 키를 눌러서 확인해보자

`order` 속성을 쓸 때는 조심 ! 키보드로 움직이는 경우 헷갈릴 수 있음\
tab 키로 움직이는 경우 순서가 지켜져야 하니깐(tabbing order 참고...)

### Reduced motion
> 모션 감소했을 때 어떻게 할건지 ?
>  no animation 을 의미하는 건 아님 
```
@media (prefers-reduced-motion: no-preference) {
  a {
    transition-duration: 0.4s;
    transition-property: transform;
  }
}
```
`prefers-reduced-motion` 는 화면의 움직임에 대한 것이기 떄문에, 요소 색상의 transiton 등에는 영향 x 

### Voice
> 스크린 리더와 웹 브라우저가 소통하려면 유용한 시멘틱 정보가 있어야 함!!!

Don't
```html
<div class="heading-main">Welcome to my page</div>
<div class="heading-secondary">About me</div>
<div class="heading-tertiary">My childhood</div>
<div class="heading-secondary">About this website</div>
<div class="heading-tertiary">How this site was built</div>
```

Do

```html
<h1>Welcome to my page</h1>
  <h2>About me</h2>
    <h3>My childhood</h3>
  <h2>About this website</h2>
    <h3>How this site was built</h3>
```

내가 잘 못지키는 부분 ㅠㅠ\
스크린 리더는 이런 heading을 이용해서 키보드 단축키로 이동할 수 있는 outline을 잡음

### Structure
> landmark element 인 `<main>, <nav>, <aside>, <header>, <footer>`를 사용하여 페이지 콘텐츠를 짤 것. 무성한 <div> 만 넣지 말고.

### Form
> 모든 폼은 <label> element가 있어야 한다. 

### Image
> 이미지를 설명할 수 있는 alt 넣기\
presentational 한 이미지의 경우 `alt=""`

### Link
> 링크 안에 `click me`가 아닌 링크를 설명할 수 있는 텍스트 넣기

### ARIA
> accessible Rich Internet Applications\
html element에 없는 인터페이스 element를 만들어야 한다면, ARIA를 알자
