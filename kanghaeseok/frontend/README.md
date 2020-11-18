# Yes It's good.

---

# frontend

- react
- class component
- redux pattern
- api axios

### pages

- router로 인해 이동되는 곳의 page
- 가장 큰 단위
- 조금이지만 data fetching이 이루어진다.

### container

- 하나의 페이지에서 뚜렷하게 영역으로 나누어진 부분
- ex) 쇼핑몰의 신상품 영역
- data fetching이 주로 발생한다. 아마...도..?

### layout

- page, container 에 위치한다
- page에서는 container들의 layout을, container에서는 componenet들의 layout을 세팅해줌

### components

- 그 외에 모든것
- 반복되는 것이든 atomic한 것이든 전부
- 컴포넌트 안에 컴포넌트가 위치할수도 있다.

---

# backend

- django viewset
