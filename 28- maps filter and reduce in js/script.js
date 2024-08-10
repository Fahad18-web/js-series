// reduce method for sum of charts of shopping store

const ShoppingCart = [
    {
        coursename: "js course",
        price: 1999
    },

    {
        coursename: "python course",
        price: 999
    },

    {
        coursename: "mobile dev course",
        price: 12999
    },

    {
        coursename: "data science course",
        price: 2999
    },
]

const cartPrice = ShoppingCart.reduce((acc, items) => (acc + items.price), 0)

//  console.log(cartPrice);

//  maps for numbers addition

const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const sum = mynums.map((num) => {
    return num + 10
})

// console.log(sum);

// chaining ka matlab ke ap multiple map or filter and reduce method use kersakte ho or ye sabhi call back functions per kam kerte hai

const multiple = [1,2,3,4,5,6,7,8,9,10]

const  show =  multiple.map((num)=> {
    return num * 4
})

console.log(show);

