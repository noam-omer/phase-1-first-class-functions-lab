// Code your solution in this file!
const returnFirstTwoDrivers = (function(array){
    return array.slice(0,2);
})

const returnLastTwoDrivers = (function(array){
    return array.slice(-2);
})

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer){
    return (fare) => fare*integer;
} 

const fareDoubler =  function(fare){
    return createFareMultiplier(2)(fare)
}

const fareTripler = function(fare){
    return createFareMultiplier(3)(fare)
}    

const selectDifferentDrivers = function(array, inputFunction){
    if (inputFunction === returnFirstTwoDrivers) return returnFirstTwoDrivers(array);
    else return returnLastTwoDrivers(array);
}

const testArray = (['a', 'b', 'c', 'd']);
console.log(testArray);
console.log(returnFirstTwoDrivers(testArray));
console.log(returnLastTwoDrivers(testArray));
