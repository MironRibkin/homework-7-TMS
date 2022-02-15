//Task 1
const numbers = [7, -4, 32, -90, 54, 32, -21]
const newNumbers = numbers.filter(item => item > 0)
console.log(newNumbers);


//Task 2
const mixedNumbers = [-14, 24, -89, 43, 0, -1, 412, 4]
const posNumbers = mixedNumbers.filter(item => item >= 0)
const negNumbers = mixedNumbers.filter(item => item < 0)
console.log(`Положительные числа: ` + posNumbers);
console.log(`Отрицательные числа: ` + negNumbers);


//Task 3
const persons = [
    {id: 10, name: 'Vasya', age: 28},
    {id: 11, name: 'Kolya', age: 16, parentId: 14},
    {id: 12, name: 'Anna', age: 37},
    {id: 13, name: 'Zoya', age: 9, parentId: 12},
    {id: 14, name: 'Arkadiy', age: 45},
];
const underage = persons.filter(item => item.age < 18)
console.log(`дети: ${underage.map(item => item.name)}`)

const adultPersons = persons.filter(item => item.age >= 18).map(item => {
    let learnProfession = prompt(`Укажите вашу профессию`);
    let children = persons.find(person => item.id === person.parentId);
    if (children !== undefined) {
        console.log(`Ваша профессия ${learnProfession} \n ${item.name} ваш ребенок ${children.name}`)
    } else {
        console.log(`Ваша профессия ${learnProfession} \n ${item.name} у вас нет детей`)
    }
})

//Task 4
const family = {
    amount: 5,
    familyMembers: [
        {name: 'Borya', age: 15},
        {name: 'Tolya', age: 54},
        {name: 'Anjela', age: 45},
        {name: 'Snejana', age: 14},
        {name: 'Gavriil', age: 24},
    ],
}
let old = family.familyMembers[0];
family.familyMembers.forEach(member => old = old.age < member.age ? member : old);
family.old = old;
console.log(family);


// Task 5
const NUMBERS = [];

function addNumbersMass(number, coeff, mass) {
    for (let i = 0; i <= number; i++) {
        let userNumber = parseInt(prompt("Введите число"));
        mass.push(userNumber);
    }
    console.log(mass)
    let coefficient = prompt("Введите + или -");
    if (coefficient === "+") {
        mass = mass.map(item => item + coeff)
        console.log(mass);
    } else if (coefficient === "-") {
        mass = mass.map(item => item - coeff)
        console.log(mass);
    } else {
        console.log("Не правильно введен кофициент")
    }
}

addNumbersMass(5, parseInt(prompt("Введите кофициент")), NUMBERS)

// Task 6
function creatObj() {
    let PERSON = {}
    PERSON.userName = prompt("Введите ваше имя")
    PERSON.userLastName = prompt("Введите вашу фамилию")
    PERSON.userAge = parseInt(prompt("Введите ваш возраст"))
    if (confirm("У вас есть супруг?")) {
        PERSON.spouse = {
            spouseName: prompt("Введите имя вашего супруга"),
            spouseLastName: prompt("Введите фамилию вашего супруга"),
        }
    }
    if (confirm("У вас есть дети?")) {
        PERSON.userChildren = addUserChildren()
    }
    function addUserChildren() {
        let userChildren = [];
        let childrenNumber = parseInt(prompt("Сколько у вас детей?"));
        for (let i = 0; i < childrenNumber; i++) {
            userChildren.push({
                childFirstName: prompt("Введите имя ребенка"),
                childLastName: prompt("Введите фамилию ребенка"),
                childAge: prompt("введите возраст ребенка")
            })
        }
        return userChildren
    }

    PERSON.userJob = prompt("Какая у вас професиия?")
    return PERSON
}

console.log(creatObj());



//ADVANCED level
//Task 1
// highAndLow("1 2 3 4 5"); // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"