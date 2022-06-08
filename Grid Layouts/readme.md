##### 그리드 연습장 

> 그리드 안은 grid item, tracks라고 부르기도 함\
> 그리드는 항상 컨테이너가 있음

### 01 basic

> 그리드 컨테이너 

```css
.grid-container{

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
.grid-item1{
    /* 1에서 시작해서 2만큼 차지해
    시작포인트 생략 가능, 알아서 가능한 부분부터 설정됨
    너비가 부족하면 알아서 다음 row로 넘어감
    */
  grid-column: 1 / span 2 ;
  /* 컨테이너에서 준 것 말고, 따로 설정하고 싶을 때 쓰기
  justify-self 또한 마찬가지 
  */
  align-self:end;

}
```
