// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join(' seperator ');
    console.log(result);
}

// Q2. make an array out of a string
{
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const result = fruits.split();
    console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse(); // 배열 자체를 reverse 시킴
    console.log(result);
    console.log(array);
}

// Q4. make new array without the first two elements
{
    const array = [1, 2, 3, 4, 5];
    const result = array.slice(2, 5); // 2번째부터 4번째까지 받아와야 함
    console.log(result);
    console.log(array);
}

class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
    const result = students.find((student) => student.score === 90);
    console.log(result);
    // find: predicate가 true인 첫번째 함수를 return한다.
    // predicate: 배열 내의 요소 하나씩 호출하는 callback 함수
}

// Q6. make an array of enrolled students
{
    const result = students.filter((student) => student.enrolled);
    console.log(result);
    // filter: true인 모든 요소들을 array로 만든다.
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
    const result = students.map((student) => student.score);
    console.log(result);
    // map: 배열 내의 요소를 callback 함수를 거쳐서 다른 값으로 변환!
}

// Q8. check if there is a student with the score lower than 50
{
    const result = students.some((student) => student.score < 50);
    console.log(result);

    const result2 = !students.every((student) => student.score >= 50);
    console.log(result2);
    // some: 배열 내에 하나라도 조건을 만족시키는 요소가 있으면 true가 return됨
    // *every: 배열 내의 모든 요소가 조건을 만족시켜야 true가 return됨
}

// Q9. compute students' average score
{
    const result = students.reduce((prev, curr) => prev + curr.score, 0);
    console.log(result / students.length);
}
    // reduce: 배열의 요소들의 값을 누적할 때!
    // prev: callback 함수의 return 값이 전달된다.
    // curr: 배열의 요소들을 순차적으로 전달받는다.
    // initial 값 설정 가능
    // *reduceRight: 뒤에서부터 거꾸로 호출

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    const result = students
        .map((student) => student.score)  // 배열을 score로 변환
        .filter((score) => score > 50)  // true인 친구들만 가져온다.
        .join();  // string으로 만든다.
    console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
    const result = students
        .map((student) => student.score)
        .sort((a, b) => a - b)
        .join()
    console.log(result);
}
    // sort: (-)값을 return하면 첫번째가 두번째보다 작다고 간주되어 정렬됨