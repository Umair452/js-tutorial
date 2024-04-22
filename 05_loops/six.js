//for each wont return anything 


// let arrayOne = [1,2,3,4,5];

// let values = arrayOne.forEach( (item) =>{
//     console.log(item);
// } )

// console.log(values); this line will give undefined results

let myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(myNums.filter ( (num)=> num > 4)); 

//Filter will return the values but for each wont

let newNums = [];

myNums.forEach( (num) => {
    if(num > 4){
        newNums.push(num);
    }
});

//for each will require another array to store array in it

// console.log(newNums);


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

  let courseBooks = books.filter( (bk) =>
   {return bk.publish > 1990 && bk.genre === "History"}
)

//   console.log(courseBooks);
