// Code your solution in this file!
function distanceFromHqInBlocks(street) {
    const hqstreet = 42;
    const distance = Math.abs(street - hqstreet);
    return distance;
}

function distanceFromHqInFeet(feet) {
    return distanceFromHqInBlocks(feet) * 264;
}

function distanceTravelledInFeet(start, destination) {
    const distance = Math.abs(start - destination);
    return distance * 264;
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);

    if (distance <= 400) {
        return 0;
    }
    else if (distance <= 2000) {
        return (distance -400) * 0.02;
    }
    else if (distance <= 2500) {
        return 25;
    }
    else {
        return 'cannot travel that far';
    }
}