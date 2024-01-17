const books = [
    {
        item :"This was our pact",
        numberOf : 0,
        cost : 7.49
    },
    {
        item :"The famous five",
        numberOf : 0,
        cost : 4.50
    } ,{
        item :"Matlida",
        numberOf : 0,
        cost : 6.80
    } ,{
        item :"Harry Potter",
        numberOf : 0,
        cost : 10
    } ,{
        item :"For Young Readers",
        numberOf : 0,
        cost : 7.29
    }, {
        item :"Wimpy Kid-DIY",
        numberOf : 0,
        cost : 4.99
    } ,{
        item :"Dart Board",
        numberOf : 0,
        cost : 17.49
    } ,{
        item :"Connect 4",
        numberOf : 0,
        cost : 19.99
    }, {
        item :"Jenga",
        numberOf : 0,
        cost : 20.99
    } ,{
        item :"Monopoly",
        numberOf : 0,
        cost : 19.49
    } ,{
        item :"Bookmarks",
        numberOf : 0,
        cost : 12.49
    } ,{
        item :"Birthday card",
        numberOf : 0,
        cost : 19.99
    } ,{
        item :"Stuffed toys",
        numberOf : 0,
        cost : 15.99
    }, {
        item :"Dream catcher drawing",
        numberOf : 0,
        cost : 18.49
    }
]

var s = document.getElementById("cart");
var cartvalue = document.getElementById("cart-value");
var space = document.querySelectorAll(".space-evenly");
let val = 0
let list1 = []
space.forEach((add,i)=>{
    add.onclick=()=>{
        console.log("clicked")
        val++;
        cartvalue.innerHTML=val;
        if(books[i].numberOf==0){
            list1.push(books[i]);
        }
        books[i].numberOf++;
    }
})

var t=0;
cart.onclick=()=>{
    list1.map((s,j)=>{
        console.log(j+1+".","Name: "+s.item,"quantity: "+s.numberOf)
        t+=s.numberOf*s.cost
    })
    console.log("total bill: $"+Math.floor(t)+"round offer applied!")
}