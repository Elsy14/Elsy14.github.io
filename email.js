var shown = false;
//encoded input
function encodeInput(input) {
    const encoded = document.createElement('div');
    encoded.innerText = input;
    return encoded.innerHTML;
}
//Validate email input
function validateEmail(email) {
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return pattern.test(email);
}
//function to show/hide emaoll on click
function showhideEmail() {
    if (shown) {
        document.getElementById('email').innerHTML = "Show my email";
        shown = false;
    } else {
        var emailAddress = "prempeea@mail.uc.edu";
        if (validateEmail(emailAddress)) {
          var encodedEmail = encodeInput(emailAddress);
          var myemail = "<a href='mailto:" + encodedEmail + "'>" + emailAddress + "</a>";
          document.getElementById('email').innerHTML = myemail;
          shown = true;
        } else {
          console.log("Invalid email address");
        }
    }
}
