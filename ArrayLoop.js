//for of 

const arr = [1,2,3,4,5]

for(const num of  arr){
      // console.log(num);
}

//string
const greetings = "Hello world"
for(const greet of greetings){
    console.log(`Each char is , ${greet} `);
}

//Maps -- it a object to store data in key value pair and it is unique value store only
 
const map = new Map();
map.set('IN' , 'India');
map.set('US' , 'United State');
map.set('FR' , 'France');
//map.set('IN' , 'India');

for(const [key , value] of map){
    console.log(key ,":-"  , value)
}

//using for of loop -> object to print -- it gives a error --> myobject is not iterable
/*const myObject = {
    "game1" : 'NFS',
    GAME2 : "sPIDERmAN"
}  

for(const e of myObject){
    console.log(e);
} */



//for in loop --> use for object to print key value pair 
const obj = {
    js : "javascript",
    cpp : "c++",
    rb : "ruby"
}

for(const key in obj){
   // console.log(obj[key]);
   console.log(`${key} shortcut is for ${obj[key]}`);
}

const programming = ["js" , "c++" , "ruby" , "java"];


//in for of loop to iterate arr it return value direct bt in for in loop it return index
for(const k in programming){
   // console.log(k);
   console.log(programming[k]);
}

const m = new Map();
m.set('IN' , 'India');
m.set('US' , 'United State');
m.set('FR' , 'France');
//map.set('IN' , 'India');

for(const [key , value] in m){
    console.log(key ,":-"  , value)
}  // here we no output 



//for-each --> ke sth cllback function lgana hi prta hai 
 
const coding = ["js", "ruby" , "C++" , "JAVA"];
coding.forEach((item) => {
    console.log(item);
})

coding.forEach((item , index , arr) => {
    console.log(item , index, arr);
})

//Method -2 --> 
 function print(item){
    console.log(item);
 }

 coding.forEach(print);


 //using for each loop --> easily access to array object value  (it mainly use to fetch data from database or api data)
 const myCoding = [
    {
        langaugeName : "javaScript",
        langaugeFileName : "js"
    },
    {
        langaugeName : "java",
        langaugeFileName : "javac"
    },
    {
        langaugeName : "Ruby",
        langaugeFileName : "rb"
    },
 ]

 myCoding.forEach((item) => {
    console.log(item.langaugeFileName);
 })