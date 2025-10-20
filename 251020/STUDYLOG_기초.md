### Destrurig

```jsx

let persin = {
    name: "eunhye",
    age: 20
}

let name = person.name
let age = person['age']

console.log(name, age)
```
위 표현을 아래와 같이 간결하게 표현할 수 있다

```jsx

let {name, age} = person
```
Destrurig은 person이란 객체에서 name, age 를 분해한다

```jsx
let array = [1,2,3,4]
let [a] = array
console.log(a,b)
let [a,b, ...rest]=array
```
a 1 배열 순으로 들어김 b 2
let [a,b, ...rest]=array 앞에 2개를 제외한 나머지를 의미한다


### spread

```jsx
let person={
    name: "eunhye",
    age:12
}

let person2 = {...person}
// 위 person을 그래도 복사(깊은복사)한다
// 복사를 해서 또다른 객체를 생성한다는 의미이다
// 위 person 하고 완전히 다른 존재
let person2 = {...person, address:"Osan"}
let person2 = {...person, name:"eunji"}

let person3 = person
// 위 내용과  출력값은 같으나 다르다
// 같은 주소값을 가르킨다 주소값 복사한 존재 person을 참조하고 있다

```
배열의 형태
```jsx

let a = [1,2]
let b = [...a,3] 
// 기존객체값을 복사한 새로운객체에 3을 추가

```


