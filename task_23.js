function performArithmeticOperation(num1,num2,operator){
    if(operator == "+"){
        console.log(num1+num2);
    }
    else if(operator == "-"){
        console.log(num1-num2);
    }
    else if(operator == "*"){
        console.log(num1*num2);
    }
    else if(operator == "/"){
        console.log(num1/num2);
    }
    else{
        console.log("invalid operator");
    }
}
performArithmeticOperation(3,2,"+");
performArithmeticOperation(5,2,"-")
performArithmeticOperation(5,2,"*");
performArithmeticOperation(10,2,"/");
performArithmeticOperation(6,3,"%");