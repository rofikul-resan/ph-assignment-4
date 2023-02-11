//1. Making a function called mindGame.

function mindGame(number){
    if(typeof number!= "number" ){
        return "Please input a number value."
    }else{
        let functionResult = ((((number*3)+10)/2)-5);
        return functionResult
    }
}

//2. Making a function which take a string  and give the output string.length is even or odd

function evenOdd(string){
    if (typeof string != "string"){
        return "Please input a string not number.";
    }else{
        if(string.length % 2 === 0){
            return "Even" ;
        }else{
            return "Odd" ;
        }
    }
}

// 3.Making a function called isLGSeven . which take a number and return output if number - 7 equal to  small then seven return the subtraction . or subtraction is greater than or equal to  seven return the drabble of subtraction . 

function isLGSeven(number){
    if(typeof number != "number"){
        return "Please input a number value."
    }else{
        const checkNumber = number - 7 ;
        if(checkNumber < 7){
            return checkNumber ;
        }else{
            return checkNumber*2 ;
        }
    }
}


// 4. Making a function  called findingBadData . It take a Array and give the output  of the number of negative value

function findingBadData( array){
    const isArray = Array.isArray(array);
    let counter = 0;
    if(isArray){
        for(let i = 0; i < array.length; i++){
            if(array[i] < 0){
                counter ++
            }
        }
        return counter ;
    }else{
        return "Please input an array. This function is only work on array."
    }
}


// 5. Making a function is called gemsToDiamond. which take three parameter and that is the gems number of my three friend . and function convert gems number to diamond. 

function gemsToDiamond(friend1, friend2, friend3){
    if(friend1 === undefined || friend2 === undefined || friend3 === undefined){
        if(friend1 === undefined){
            return "Please input a valid number in first friend."
        }else if (friend2 === undefined){
            return "Please input a valid number in scend friend."
        }else{
            return "Please input a valid number in thread friend"
        }
    }else if (typeof friend1 != "number" || typeof friend2 != "number" || typeof friend3 != "number"){
        if(typeof friend1 != "number"){
            return "Your input is : " + (typeof friend1) + ". Please input a number in first friend."
        }else if (typeof friend2 != "number"){
            return "Your input is : " + (typeof friend2) + ". Please input a number in scend friend."
        }else{
            return "Your input is : " + (typeof friend3) + ". Please input a number in thread friend"
        }

    }else{
        const friend1Diamond = friend1 * 21;
        const friend2Diamond = friend2 * 32;
        const friend3Diamond = friend3 * 43;
        const totalDiamond = friend1Diamond + friend2Diamond + friend3Diamond ;
        if(totalDiamond > 1000*2){
            return totalDiamond - 2000;
        }else{
            return totalDiamond
        }
    }
}

let para ;
let result = evenOdd(para);
console.log(result);
