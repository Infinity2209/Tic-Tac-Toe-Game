console.log("this is the console");
name = "Tony Stark";
age = 22;
work = "genius"
console.log("Name: ", name + " Age: ", age + " Work: ", work);
const data = {
    Name: "Ananta Nag",
    RgdNo: "2101110079",
    College: "GCEK",
};

data["College"] = "Government College of Engineering Kalahandi, Bhawanipatna";

const product = {
    title: "Ball Pen",
    ratring: 4,
    offer: 5,
    price: 550,
};

const profile = {
    id: "shradhakhapra",
    isfollow: true,
    post: 195,
    followers: 569,
    following: 4,
    name: "Shradha Khapra",
    degignatiuon: "Enterpenuer Apna College | Ex-Microsoft , DRDo",
    passion: "to educate someone is the higest privillage",
};

let Name = "Government College of Enginering";
let charCount = 0;
for (let i of Name) {
    // console.log(i);
    charCount++;
};

console.log("Number of Characters = ", charCount);

for (let i in profile) {
    console.log(i, " : ", profile[i], "\n");
}

let gameNumber = 56;

// let guess = prompt("Guess the Number between 50 - 100");

// while (guess != gameNumber) {
//     guess = prompt("You guess the wrong number Try Again!!");
// };

console.log("Congratulation you gussed the right number");

let output = `My id is ${profile.id} and my name is ${profile.name}`;
console.log(output);
console.log(Name.length);
console.log(Name.toUpperCase());
console.log(Name.toLowerCase());
console.log(Name.trim()); //remove the white space from the starting and ending point

function vowelCount(mess) {
    console.log("The message is : ", mess);
    let str = mess.toLowerCase();
    console.log("The message is : ", str);
    let count = 0;
    for (const char of str) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++;
        }
    }
    console.log("number of vowels in the given message are = ", count);
};

const countVowel = (mess) => {
    console.log("The message is : ", mess);
    let str = mess.toLowerCase();
    console.log("The message is : ", str);
    let count = 0;
    for (const char of str) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++;
        }
    }
    console.log("number of vowels in the given message are = ", count);
};


let arr = [1,2,24,42,15,65,0,23,56];

arr.forEach((val) => {
    console.log(val**2);//square of every item of the array
});

let newArr = arr.map((val) => {//used when we need the new array to store updated values
    return val**2;
});

console.log("The actual Array : ",arr);
console.log("The updated Array : ",newArr);
let marks = [52,85,75,99,65,91,90,92]
let arr2 = [2,5,4,36,5,8,1,24,6,7,84];
let evenArr = marks.filter((val) => {//used to filter out all the need data and amke new array
    // return val%2==0;
    return val > 90;
});

console.log("The actual Array : ",arr2);
console.log("The updated Array : ",evenArr);

let n = prompt("Enter your number");
let arr3 = [];
for (let index = 1; index <= n ; index++){
    arr3[index-1] = index;
}

const sumOfArray = arr3.reduce((result, currentValue) =>{
    // return result + currentValue;//to return the sum 
    return result * currentValue;//to return the Factorial
    // return result < currentValue ? result : currentValue;//to return the largest
});

console.log(sumOfArray);
