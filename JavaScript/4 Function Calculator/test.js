function PushFront  (array1 , value){
    var array2=[];
    array2.push(value);
    for(var i=0 ; i< array1.length ; i++){
          array2.push(array1[i]);
    }
    return array2;
    }
    var arr=[2,3,4,5,6]
    console.log(PushFront (arr,1) );
function RemoveAt(array, index){
        var array2=[]
        for(var i=0 ; i< array.length ; i++){
              if(index != i){
                  array2.push(array[i]);
              }
     }
     return array2;
     }
     var arr=[1,2,3,4,5,6,7];
     console.log(RemoveAt(arr,3))
     
    