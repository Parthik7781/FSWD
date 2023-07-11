
let a = 5;
let b = 10;

function sum(a,b)
{
  console.log(a+b);
}

function diff(a,b)
{
    console.log(a-b);
}

function mul(a,b)
{
    console.log(a*b);
}

function quo(a,b)
{
    console.log(a/b);
}
let num = prompt("Enter 1 for addition 2 for subtraction 3 for multiplication 4 for quotient");
if(num==1){
    sum(a,b);
}
else if(num==2){
    diff(a,b);
}
else if(num==3){
    mul(a,b);
}
else if(num==4){
    quo(a,b);
}
else{
    ("Enter correct number");
}