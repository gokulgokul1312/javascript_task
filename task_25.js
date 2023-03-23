let arr=[];
function array(rows,columns){
for(let i=0;i<rows;i++){
    arr[i]=[]
    for(let j=0;j<columns;j++){
        arr[i][j]="*"
    }
}
console.log(arr);
}
array(3,4);