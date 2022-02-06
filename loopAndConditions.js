// Larger Number from two Numbers
function largerNum(a,b){
    if(a > b){
        return `${a} is largar than ${b}`;
    }else if(a < b){
        return `${b} is largar than ${a}`;
    }else{
        return `${a} and ${b} is same`;
    };
};
console.log(largerNum(45, 54));

//2. Full Stack Class Dates in 2022
function classDates(){
    let classNum = 0
    for(let month = 0; month < 12; month++){
        for(let date = 0; date <= 31; date++){
            let d = new Date(2022, month, date);
            if(d.getDay() == 0 || d.getDay() == 6){
                classNum++
                console.log(`${classNum}. ${d.toDateString()}`)
            };
        };
    };
}
classDates()


// Stars by loop
let chr = ''
for(let i = 0; i < 6; i++){
    for(let j = 0; j < i; j++){
        chr += '*'
    }
    console.log(chr)
    chr = ''
}

//Generane Hexadesimal random color code
const hexavalues = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']

function generateColor(){
    let colorCode = '';
    for(let i = 0; i < 6; i++){
        let randnum = Math.floor(Math.random() * hexavalues.length);
        colorCode += hexavalues[randnum];
    }
    return colorCode;
}

console.log(generateColor())

// password genarator
function passGennarate(length){
    const chars = "0123456789~!@#$%^&*()_+}{[]|abcdefghikjlmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let pass = '';
    const arr = chars.split('');

    for(let i = 0; i < length; i++){
        let randnum = Math.floor(Math.random() * chars.length)
        pass += arr[randnum]
    }
    
    return pass;
}
console.log(passGennarate(10))


//leep years
function isLeepyear(year){
    if(year % 4 === 0 && year % 100 != 0 || year % 400 == 0){
        console.log(`The year ${year} is a leap year (it has 366 days)`);
    }else{
        console.log(`The year ${year} is not a leap year (it has 365 days)`);
    }
}

isLeepyear(2022);



//say good morning, afternoon and evening
let time = new Date().getHours();

if(time >= 5 && time < 12){
    console.log('Good Morning')
}else if(time >= 12 && time < 17){
    console.log('Good Afternoon');
}else if(time >= 17 && time < 24){
    console.log('Good Evening');
}else{
    console.log('Good Evening');
};



// Number guess between 1 to 10

function guessNum(n){
    let r = Math.round(Math.random() * 11)
    n == r ? console.log('Matched') : console.log('Not matched, the number was '+ r);
}

guessNum(5)


// largest number of array
let numbers = [22, 35, 100, 24, 56]

function largestNum(arr){
    let ln = 0 
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > ln){
            ln = arr[i]
        }
    }
    console.log(ln + ' is the largest number of array')
}
largestNum(numbers)

// largest string of array
let strings = ['apple', 'banana', 'mango', 'pineapple', 'graps']

function largestStr(str){
    let ls = ''
    for(let i = 0; i < str.length; i++){
        if(str[i].length > ls.length){
            ls = str[i]
        }
    }
    console.log(ls + ' is the largest string of array')
}

largestStr(strings)

//Capitalize string words

const words = 'my name is jahid hasan'

function toCapitalize(val) {
    let arr = val.split(' ');
    let result = '';

    for(let i = 0; i < arr.length; i++){
        let w  =  arr[i].charAt(0).toUpperCase();
        let capWords = arr[i].split('');
        capWords.splice(0,1);
        let n = capWords.join('');

        result += w + n + ' '
    }
    return result;
}

console.log(toCapitalize(words))


