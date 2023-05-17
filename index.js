function distanceFromHqInBlocks(street){
    return Math.abs(42 - street);
}

function distanceFromHqInFeet(street){
    return Math.abs(42 - street) * 264;
}

function distanceTravelledInFeet(s1, s2){
    return Math.abs(s1 - s2) *264;
}

function calculatesFarePrice(s1, s2){
    if ((Math.abs(s1 - s2) * 264) <= 400) {
        return 0;
    }
    else if ((Math.abs(s1 - s2) * 264) <= 2000){
        return parseFloat(((Math.abs(s1 - s2) * 264) * 0.02 - 8).toFixed(2));
    }
    else if ((Math.abs(s1 - s2) * 264) <= 2500){
        return 25
    }
    else return "cannot travel that far"
}