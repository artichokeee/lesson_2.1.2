const VALUE1 = 10;
let value2 = Math.floor(Math.random() * 20);

console.log(value2);

result = VALUE1 + value2 / 5 + 17;

console.log(result);

/* В нашем случае приоритет операторов будет следующий:
1. Оператор / (деление)
2. Оператор + (сложение)
3. Оператор = (присваивание)
*/