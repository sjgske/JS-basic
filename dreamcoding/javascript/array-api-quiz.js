// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    for (let i = 0; i < fruits.length; i++) {
        console.log(fruits[i]);
    }

    for (let fruit of fruits) {
        console.log(fruit);
    }

    // fruits.forEach(fruit)

}

// Q2. make an array out of a string
{
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const arr = [fruits];
    console.log(arr);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];
    array.shift();
    array.shift();
    array.shift();
    array.shift();
    array.push(4, 3, 2, 1);
    console.log(array);
}

// Q4. make new array without the first two elements
{
    const array = [1, 2, 3, 4, 5];
    const array1 = array;
    array1.splice(0, 2);
    console.log(array1);
}

// ☆★
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
    for (let i = 0; i < students.length; i++) {
        if (students[i].score = 90) {
            console.log(students[i].name);
        }
    }
}

// Q6. make an array of enrolled students
{   
    for (let i = 0; i < students.length; i++) {
        if (students[i].enrolled = true) {
            console.log(students[i].name);
        }
    }    
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
}

// Q8. check if there is a student with the score lower than 50
{
    if (Student.score < 50) {
        console.log(Student.name);
    }
}

// Q9. compute students' average score
{
    for (let i = 0; i < students.length; i++) {
        console.log(Student.score[i]);
    }
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    for (let i = 0; i < students.length; i++) {
        console.log(Student.score[i]);
    }
}

    // Bonus! do Q10 sorted in ascending order
    // result should be: '45, 66, 80, 88, 90'
    {
    }