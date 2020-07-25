//ANY INNFORMATION THAT ENTERS JAVASCRIPT FROM HTML OR CSS WILL END THE DATATYPE OF STRING, REGARDLESS OF CONTENT.




funtion myFuntion() {
    var response = prommpt("How are you today?");

}

if (response === "") {
    alert("You did not type anything in!");
    return false;
} else {
    console.log(response);
    return true;
}

var didTheyRead = myFunction();

while (didTheyRead === false) {
    didTheyRead = myFunction();
}

