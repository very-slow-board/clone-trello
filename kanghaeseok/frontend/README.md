# clone trello yo man

- react
- class component
- styled component
- redux pattern
- do not use hook

### src/App.js

- router 역할

### src/pages

- router로 인해 이동되는 곳의 page
- 가장 큰 단위

### src/container

- 조각조각 나뉘어진 큰 컨테이너 영역
- ex) 로그인 페이지의 이메일 로그인 영역
- data fetching이 이루어짐
- 내부에 또 컨테이너가 있을수 있음 ex) LeftContainer, PriceContainer
- atomic한 엘리먼트는 components에 두기 ex) Span, Icon

### components

- 2번 이상 사용되는 모든 컴포넌트
