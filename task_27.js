let arr=[];
function deleteElements(array,elements){
    for(i=0;i<array.length;i++){
        if(array[i]!=elements){
            arr.push(array[i])
        }
    }
    console.log(arr);
}
deleteElements([1,2,3,4,3,5,6,3,7],3);