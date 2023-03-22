function assigngrade(num){
    if(num>=90){
        console.log("A");
    }
    else if(num>=80 && num<=89){
        console.log("B");
    }
    else if(num>=70 && num<=79){
        console.log("C");
    }
    else if(num>=60 && num<=69){
        console.log("D");
    }
    else if(num<60){
        console.log("E");
    }
}
assigngrade(90);