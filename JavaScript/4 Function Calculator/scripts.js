 var displayDiv = document.querySelector("#display");
 var operator1="";
 var operator2="";
 var MathOperator="";
 var flag=0;
function press(num){
    if(flag==0){
      
    operator1=operator1+num
    displayDiv.innerHTML=operator1;
    }
    else if(flag==1){
       
        operator2=operator2+num
        displayDiv.innerHTML=operator2;
    }
}
function setOP(operator){
    MathOperator=operator;
    flag=1;
}
function clr(){
operator1="";
operator2="";
displayDiv.innerHTML="0";
}
function calculate(){

if(MathOperator=='+'){
   

    var op1=parseFloat(operator1);
    var op2=parseFloat(operator2);
    
    
    displayDiv.innerHTML=op1+op2 ;
    flag=0;
}
else if(MathOperator=='-'){
    var op1=parseFloat(operator1);
    var op2=parseFloat(operator2);
var result=op1-op2;
    displayDiv.innerHTML=op1-op2;
    flag=0;
    
}
else if(MathOperator=='*'){
    var op1=parseFloat(operator1);
    var op2=parseFloat(operator2);
    var result=op1*op2;
    displayDiv.innerHTML=op1*op2;
    flag=0;
   
}
else {
    var op1=parseFloat(operator1);
    var op2=parseFloat(operator2);
    var result=op1/op2;
    displayDiv.innerHTML=op1/op2;
   
 
}
flag=0;
operator1="";
operator2="";

}