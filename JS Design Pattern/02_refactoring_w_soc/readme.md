## cat clicker

### model, view 알아내기
1. 선택할 수 있는 고양이 리스트들 -> view
2. 선택한 고양이 -> view
3. 고양이 객체 -> model

### octopus 알아내기

-  앱 로드
-  목록 만들어짐
-  뷰 리스트 만들어짐

--> 뷰한테 처음에 렌더링 되라고 말하는 것 : octopus 
--> 모델에서 current cat 변경 :octopus

> 즉, 렌더링하는 거 자체는 octopus 일 x , BUT, octopus가 뷰한테 언제 렌더링 할건지 말함

1. 앱 로딩 
2. 래리 tell -> 모델 init
3. 래리 tell -> 뷰 render  

### 구조 나누기
> 앱을 먼저 구동하고 어떤 함수가 필요한지 확인해보기 