function calculator(num1, num2,option) {
    if (option=="add"){
        return num1+num2;
    }else if (option == "substract"){
        return math.abs(num1-num2);
    }else if (option == "multiply"){
        return num1*num2;
    }else if (option == "divide"){
        return num1/num2;
    }else if (option == "reminder"){
        return num1%num2;
    }

}

console.log(calculator(4,9,"add"));

