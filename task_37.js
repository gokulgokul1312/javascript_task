function checkVariable(variable){
    if(variable == null){
        console.log("The variable is undefined or null");
    }
    else{
        console.log("The variable is neither undefined or null");
    }
}
let a;
checkVariable(6);
checkVariable('gokul');
checkVariable(null);
checkVariable(a);