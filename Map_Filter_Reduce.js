// FILTER  
   const arr1 = [12,23,34,45,67,78]

   //if you print only thoses value that greater than 45
 //  const filt = arr1.filter( (num) =>{
  //   return num > 45 
 //  });

   //json data 
   const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
   
  let filt = books.filter((item) => item.genre == 'History');
       filt = books.filter((item) =>{
        return item.genre == 'History' && item.publish == 1986;
       } )
   console.log(filt);

   //Map  --> it iterate the array and return updated or modify the array 
const arr2 = [1,2,3,4,5,6,7,8,9,10];

//const maps = arr2.map((num) => num + 10 ) ;

//Nested map nd filter appply
const maps = arr2.map((num) => num + 10 ) 
                 .map((num) => num*10)
                 .filter((num) => num >= 140);
console.log(maps);



//Reduce --> it  reduce the array 
const  myNums = [1,2,3];
const redu = myNums.reduce((acc , curr) => acc + curr , 0);
console.log(redu);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc , item) => acc + item.price , 0);
console.log(priceToPay);


