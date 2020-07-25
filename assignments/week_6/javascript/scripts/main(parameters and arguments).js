function addNumber() {
    var number1 = 10;
    var numbeer2 = 100;

    var sum = number1 + numbeer2;

    return sum;
}


var myNumber = addNumber();
var myNumber2 = addNumber();

addNumber();


// Function Arguments and Parameters
// Parameters are Function variables.



var myFunctionVariable = 100;     //this wouldnt used because its not in the scope but 5 is

function myFunction(myFunctionVariable, mySecondFunctionVariable) {

    console.log(myFunctionVariable);

    return
}


// ARGUMENTS ARE THE VALUES FOR THE PARAMETERS. AND PROVIDED WITHIN THE PARENTHESIS JUST LIKE PARAMETERS.

//myFunction(1000, "hello");
//myFunction(10);
//myFunction("hello");
//myFunction(true);

//PARAMETERS
function mathify(num1, num2) {
    var sum = num1 + num2;
    var difference = nuum1 - num2;
    var product = num1 + num2;
    var quotient = num1 / num2;

    console.log(sum, difference, product, quotient); // 4 argumennts

    return "done!";
}

mathify(90, 100);
mathify(8, 10);
mathify(1, 70);


function caTax(priceTotal) {
    var tax = priceTotal * .085;
    var totalExpense = priceTotal

    return totalExpense;
}


function writeSentence(priceTotal) {

    console.log("The total for a $ " + priceTotal + " purchase is $ " + caTax(priceTotal));

}

var myOtherNumber = 100;

writeSentence(myOtherNumber);
writeSentence(1100);
writeSentence(13);


function excited(writeSentence) {
    console.log(sentence + "!!!");


}

excited("hello");


