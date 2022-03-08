function MissingNumber(array){
    var missingNumber;
var x=array[0];
var j=0;
    for(var i=x;i<array.length+x;i++){
    if(array[j]==i){
    j++;
    }
    else {
    missingNumber=i;
    break;
    }
    }
    return missingNumber;
    }
    var array1=[2,3,4,5,6,8]
    console.log(MissingNumber(array1));
