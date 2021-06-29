// Code your solution in this file!
function returnFirstTwoDrivers(drivers) {
    const foo = arr => {
        let newArr = [];
        newArr.push(arr[0]);
        newArr.push(arr[1]);
        return newArr;
    };
    return foo(drivers);
}

function returnLastTwoDrivers(drivers) {
    const foo = arr => {
        let newArr = [];
        newArr.push(arr[arr.length-2]);
        newArr.push(arr[arr.length-1]);
        return newArr;
    };
    return foo(drivers);
}

let selectingDrivers = [];
selectingDrivers.push(returnFirstTwoDrivers);
selectingDrivers.push(returnLastTwoDrivers);

function createFareMultiplier(num) {
    return function(fare) {
        return fare * num;
    }
}

function fareDoubler(fare) {
    const totalFare = () => {
        return createFareMultiplier(2)(fare);
    }
    return totalFare();
}

function fareTripler(fare) {
    const totalFare = () => {
        return createFareMultiplier(3)(fare);
    }
    return totalFare();
}

function selectDifferentDrivers(arrayOfDrivers, returnFirstOrLast) {
    if(returnFirstOrLast === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(arrayOfDrivers);
    }
    else {
        return returnLastTwoDrivers(arrayOfDrivers);
    }
}