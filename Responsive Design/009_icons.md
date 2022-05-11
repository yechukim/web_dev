## ICONS
> 대부분의 이미지는 콘텐츠에 포함되지만, 아이콘은 사용자 인터페이스의 한 부분.\텍스트가 UI 스케일에 따라 변경되듯 아이콘도 마찬가지.

### SVG
> 사진 이미지가 아닌 경우 png, svg에서 고를 수 있다.
> png: Portable Network Graphics
> svg: Scalable Vector Graphics

PNG의 경우 `srcset`을 사용해서 같은 이미지를 여러가지 버전으로 만들어야 이미지를 반응형으로 사용할 수 있지만 SVG를 사용하면 기본으로 responsive 함
```
✏️ PNGs (and JPGs, WebP, and AVIF) are bitmap images.
=> 비트엡 이미지는 픽셀로 정보를 저장함
SVG는 그림그리는 방법을 저장함 (쉽게 이렇게 생각허자)
브라우저가 SVG를 읽을 떄 그림그리는 방법을 픽셀로 변환.
가장 좋은 점은 이 그림 그리기 방법은 상대적이라는 점 ! 

```
### 아이콘, 텍스트
> 버튼이나 링크가 텍스트와 아이콘과 같이 있다면, 아이콘은 presentational(notional)\
즉 중요한 것은 테스트다. `img` elemen 사용시 alt attribute이 없으면 해당 이미지는 presentational 한 것을 의미함

✏️ An empty alt attribute is not the same as a missing alt attribute. Always provide an alt attribute even if an image is presentational and the alt attribute has no content.

```html
<button>
  <img src="https://web-dev.imgix.net/image/KT4TDYaWOHYfN59zz6Rc0X4k4MH3/m3SyrfBz8GAe3Aifg9k0.svg" alt="" width="16" height="16">
  Menu
</button>
```
css is for presentation, 그렇기 때문에 백그라운드 이미지로 아이콘을 넣을 수 있다.
```html
<button class="menu">
Menu
</button>
```
```css
.menu {
  background-image: url(hamburger.svg);
  background-position: 0.5em;
  background-repeat: no-repeat;
  background-size: 1em;
  padding-inline-start: 2em;
}
```

svg를 HTML안에 넣으면 `area-hidden` attribute을 사용해서 assistive tech에서 숨길 수 있음(스크린 리더같은에서 아마 읽히지 않게?)
```html
<button class="menu">
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 80" width="16" height="16">
    <rect width="100" height="20" />
    <rect y="30" width="100" height="20"/>
    <rect y="60" width="100" height="20"/>
  </svg>
  Menu
</button>
```
✏️ 똑같은 svg를 여러번 쓰는 경우 `use` element를 사용하면 svg를 클론할 수 있음

### standalone icons(아이콘만 있을 때)
> 텍스트나 링크 없이 아이콘만 있을 때는 icon은 더이상 notional 하지 않음\
즉, 이 경우 css에서 백그라운드 이미지로 보여주는 것은 적합하지 x\
HTML에 아이콘이 있어야 함\

standalone icon 의 경우 alt는 이미지의 뜻을 담음
```html
<button>
<img src="hamburger.svg" alt="Menu"" width="16" height="16">
</button>
```
아니면 링크나 버튼에 `aria-label`을 사용하여 이름을 줄 수도 있다.
```html
<button aria-label="Menu">
<img src="hamburger.svg" alt="" width="16" height="16">
</button>
```
svg가 HTML 안에 있는 경우, button에 aria-label을 사용하고, 아이콘에 aria-hidden을 사용

### 아이콘 스타일링
> svg 를 html에 바로 넣는 경우, 다른 element와 마찬가지로 스타일링 할 수 있다.\
`img`element를 사용하면 불가능

```css
button:hover, 
button:focus{
    color:red;
}
button:hover rect, 
button:focus rect{
    fill:red;
}
```
```html
<button class="menu">
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 80" width="16" height="16">
    <rect width="100" height="20" />
    <rect y="30" width="100" height="20"/>
    <rect y="60" width="100" height="20"/>
  </svg>
  Menu
</button>
```

[리소스에 참고할 수 있는 글이 되게 많군..? 클릭 후 밑에 리소스로 이동해보쟛 ](https://web.dev/learn/design/icons/)