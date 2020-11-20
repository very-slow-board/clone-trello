# clone trello yo man

- react
- class component
- styled component
- redux pattern
- do not use hook

### src/pages

- router로 인해 이동되는 곳의 page
- 가장 큰 단위

### src/container

- 하나의 페이지에서 뚜렷하게 영역으로 나누어진 부분, ex) 쇼핑몰의 신상품 영역
- page에 해당하는 폴더 경로에 위치한다. 내부에 이 container에 사용되는 component가 있다. ex) 신상품 영역의 상품 1개 영역
- 내부 component가 다른 곳에서 반복 사용되면 src/componenets 로 옮긴다.
- data fetching이 발생하기도 한다

### components

- 2번 이상 사용되는 모든 컴포넌트
