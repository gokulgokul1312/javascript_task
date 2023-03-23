function deleteElements(array,elements){
    for(i=0;i<array.length;i++){
        if(array[i]==elements){
            array.splice(i,1)
        }
    }
    console.log(array);
}
deleteElements([1,2,3,4,3,5,6,3,7],3);