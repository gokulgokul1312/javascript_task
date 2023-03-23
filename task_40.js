let array=[1,2,3,4,5,6,7,8,9];
function chunk(array,size){
    console.log(array);
    let new_array=[];
    for(i=0;i<=array.length;i++){
        new_array.push(array.splice(0,size))
    }
    console.log(new_array);
}
chunk(array,3);