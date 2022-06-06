## media features
> 미디어 쿼리없이는 반응형 디자인을 만들 수 없다.

미디어 타입에는 4가지 값만 가능하다.
```css
@media all
@media screen
@media print
@media speech

```

### viewport dimension
> 가장 많이 쓰이는 미디어 쿼리는 뷰포트에 따른 너비. 하지만 여기서도 선택할 수 있지\
min-width or max-width? 

```css
@media (min-aspect-ratio: 16/9) {
  // The ratio of width to height is at least 16 by 9.
}
```
`min-aspect-ratio`를 써서 비율에 따른 선택권을 줄 수도 있다.\
정교한 작업이 필요하지 않다면 `orienttion`을 써서, 가로일때, 세로일떄 정도로만 나눌 수도 있음


### display
> 디스플레이마다 픽셀 밀도가 다르다(dpi = dots per inch 가 다르다)

`resolution` 미디어 피쳐를 활용해서 다른 dpi마다 스타일을 정할 수 있음
```css
@media (min-resolution: 300dpi) {
  // The display has a pixel density of at least 300 dots per inch.
}
@media (max-resolution: 300dpi) {
  // The display has a pixel density less than 300 dots per inch.
}
@media (resolution: 300dpi) {
  // The display has a pixel density of exactly 300 dots per inch.
}
```

픽셀 밀도는 보통 미지에 이슈가 있기 때문에 resolution 미디어 쿼리랑 쓸일은 거의 없을듯.. html에서 바로 픽셀 밀도를 조절하는 방법이 있음(전에 공부했던 responsive images) 부분

`update` 미디어 피쳐를 사용해서 애니메이션과 트랜지션에 다른 refresh rate을 줄 수 있음


### color
> monochrome, color..\
> color-gamut, color-index, dynamic-range

### interactiion
> hover, any-hover, pointer, any-pointer

### preferences
> prefers-* 

