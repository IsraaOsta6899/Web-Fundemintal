
// Sigma
// Write code that will add all of the values from 1-100 onto some variable sum and at the end console.log the result 1 + 2 + 3 + ... + 98 + 99 + 100. We should get back 5050 at the end.
// Factorial
// Write code that will multiply all of the values from 1-12 onto some variable product and at the end console.log the result 1 * 2 * 3 * ... * 10 * 11 * 12. We should get back 479001600 at the end.
function printOdds(){
    for(var i=1;i<=20;i++){
        if(i%2==1){
            console.log(i);
        }
    }
}
console.log("these are odd number from 1-20");
printOdds();
function Multiples3(){
    for(var i=1;i<=100;i++){
        if(i%3==0){
            console.log(i);
        }
    }
}
 console.log("these numbers multiple by 3" ) ;
 Multiples3();
function decreaseOneAndHalf(){
    for(var i=4;i>=-3.5;i=i-1.5){
        console.log(i);
    }
}
console.log("-----------------------");
decreaseOneAndHalf();
function Sigma(){
    var sum=0;
    for(var i=1;i<=100;i++){
        sum+=i;
    }
    console.log("summation ="+sum);
}
Sigma();
function Factorial(){
    var pro =1;
    for(var i=1; i<=12;i++){
        pro *=i;
    }
    console.log("product ="+pro);
}
Factorial();