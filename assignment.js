// 


/*This is about kilometerToMeter*/
function kilometerToMeter(kilometer) {
    if (kilometer < 0) {
        return "write here positive number."
    }
    else {
        var meter = kilometer * 1000;
    }
    return meter;
}
var searchMeter = kilometerToMeter(7);
console.log(searchMeter);


/*This is about budgetCalculator*/
function budgetCalculator(watch, phone, laptop) {
    if (watch < 0) {
        return "Write correct value of watch."
    }
    else if (phone < 0) {
        return "Write correct value of phone."
    }
    else if (laptop < 0) {
        return "Write correct value of laptop."
    }
    else {
        var total = (watch * 50) + (phone * 100) + (laptop * 500);
    }
    return total;
}
var result = budgetCalculator(1, 3, 1);
console.log(result);


/* This is about hotelCost */
function hotelCost(time) {
    var cost = 0;
    if (time < 0) {
        return "Time is won't be Negative."
    }
    //This is about staying 10 days in hotelCost.
    else if (time <= 10) {
        cost = time * 100;
    }
    // This is about staying 20 days in hotelCost.
    else if (time <= 20) {
        var firstStay = 10 * 100;
        var countTime = time - 10;
        var secondStay = countTime * 80;
        cost = firstStay + secondStay;
    }
    // This is about staying 21 days or more in hotelCost.
    else {
        var firstStay = 10 * 100;
        var secondStay = 10 * 80;
        var countTime = time - 20;
        var thirdStay = countTime * 50;
        cost = firstStay + secondStay + thirdStay;
    }
    return cost;
}
var result = hotelCost(25);
console.log(result);


/* This is about megaFriend */
function megaFriend(name) {
    var friendName = name[0];
    for (var i = 0; i < name.length; i++) {
        var element = name[i];
        if (name[i] == 0) {
            return "input name here."
        }
        else if (element.length > friendName.length) {
            friendName = element;
        }
    }
    return friendName;
}
var result = ['Kamal', 'Jamal', 'Salam', 'Balam', 'Alom', 'Abdullah'];
console.log(megaFriend(result));