var myDiv=document.querySelector(".cookies");
function dismissMSG(){
myDiv.remove();
}
var morning1=document.querySelector("#Morning1");
var morning2=document.querySelector("#Morning2");
var morning3=document.querySelector("#Morning3");
var morning4=document.querySelector("#Morning4");
var evening1=document.querySelector("#Evening1");
var evening2=document.querySelector("#Evening2");
var evening3=document.querySelector("#Evening3");
var evening4=document.querySelector("#Evening4");
var arr1=["24°","18°","27°","19°","21°","16°","26°","21°"];
var arr2=["75°","65°","80°","66°","69°","61°","78°","70°"]
function convertTemp(element){
    console.log(" "+"°C")
  var value= element.value;
  console.log(value);
  
if(value ==" "+"°C"){
    console.log("dffffff");
morning1.innerHTML=arr1[0];
evening1.innerHTML=arr1[1];
morning2.innerHTML=arr1[2];
evening2.innerHTML=arr1[3];
morning3.innerHTML=arr1[4];
evening3.innerHTML=arr1[5];
morning4.innerHTML=arr1[6];
evening4.innerHTML=arr1[7];

}
else if(value ==" "+"°F"){
 
morning1.innerHTML=arr2[0];
evening1.innerHTML=arr2[1];
morning2.innerHTML=arr2[2];
evening2.innerHTML=arr2[3];
morning3.innerHTML=arr2[4];
evening3.innerHTML=arr2[5];
morning4.innerHTML=arr2[6];
evening4.innerHTML=arr2[7];
}
}