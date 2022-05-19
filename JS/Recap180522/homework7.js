const input = [
    {
        name: 'John',
        age: 13
    },
    {
        name: 'Mark',
        age: 56,
    },
    {
        name: 'Rachel',
        age: 45,
    },
    {
        name: 'Nate',
        age: 67,
    },
    {
        name: 'Jeniffer',
        age: 65,
    }
];

function minMaxDelta(array) {
    let max = 0;
    let min = array[0].age;
    for (let arr of array) {
        if (arr.age >= max) {
            max = arr.age
        }
        if (arr.age <= min) {
            min = arr.age
        }
    }
    let razlika = max - min;
    console.log('2. Najstariot ima ' + max + ' godini, najmladiot ima ' + min + ' godini, a razlikata e ' + razlika + '\n')
    let arrayResult = [min, max, razlika]
    console.log(arrayResult)
}

minMaxDelta(input)




function faktoriel(n) {
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial = factorial * i;
    }
    console.log(`3. Faktoriel od ${n} e ${factorial}`+'\n')
}

faktoriel(5)


const input2 = [
    ['a', 'b', 'c'],
    ['c', 'd', 'f'],
    ['d', 'f', 'g', 'h'],
];

function LengthOfArrays(array) {
    let newArr = [];
    for (let index = 0; index < array.length; index++) {
        newArr[index] = array[index].length

    }
    console.log('4. ',newArr + ' se dolzinite na nizite koi se lementi vo: ', array+'\n')
}

LengthOfArrays(input2)


function Initials(nameSurname) {
    let arrStrings = nameSurname.split(' ')
    let initials = arrStrings.map(arrStrings => {
        return arrStrings[0]
    })
    console.log(initials)
}

Initials('Aleksandar Ilijevski Ilijevski')