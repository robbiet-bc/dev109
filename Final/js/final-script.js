if (window.location.pathname.endsWith("validated.html")) {
  document.getElementById("myContact").addEventListener("submit", validateForm);
}

// fullName VALIDATION ////////////////////////////////////////////////////////
function validateFullName() {
    var fullName = document.getElementById("FullName").value;
    if (!fullName || fullName.length > 50 || fullName == "") {
        showError("FullName", "Name is required and cannot be greater than 50 characters");
        return false;
    }

    // regular expression to match only alphanumeric characters and spaces
    var re = /^[\w ]+$/;
    // validation fails if the input doesn't match our regular expression
    if (!re.test(fullName)) {
        alert("Error: Input contains invalid characters: " + fullName);
        showError("FullName", "fullName contains invalid Characters.");
        return false;
    }
    // validation was success

    return true;
}
// Email VALIDATION ////////////////////////////////////////////////////////////
function validateEmail() {
    var userEmail = document.getElementById("email").value;
    var atpos = userEmail.indexOf("@");
    var dotpos = userEmail.lastIndexOf(".");

    if (!userEmail || atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= userEmail.length) {
        showError("email", "Invalid email");
        return false;
    }
    return true;
}

// subject VALIDATION /////////////////////////////////////////////////////////
function validatesubject() {
    var subject = document.getElementById("subject").value;

    if (!subject || subject == "null" || subject == "" || subject.length <= 1) {
        showError("subject", "Subject is required and should have context.");
        return false;
    }
    return true;
}

// Display Errors //////////////////////////////////////////////////////////////
function showError(element_id, message) {
    var element = document.getElementById(element_id);
    var error_div = document.createElement('div');
    error_div.id = element_id + '_error';
    error_div.className = 'error';
    error_div.innerHTML = message;
    element.parentNode.insertBefore(error_div, element.nextSibling);

}

// Part of eliminating each error message  /////////////////////////////////////
function removeElementsByClass(rootElement, className) {
    var elements = rootElement.getElementsByClassName(className);
    while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    }
}

// Clear Errors on Submit  /////////////////////////////////////////////////////
function removeErrorMessages() {
    removeElementsByClass(document.getElementById('myContact'), 'error');
}

// ALL VALIDATION //////////////////////////////////////////////////////////////
function validateForm(event) {
    removeErrorMessages();
    if (validateFullName()
        // && validatefullName() // rt.rt testing purposes
        && validateEmail()
        && validatesubject()
    ) {
        return true;
    }
    else {
        event.preventDefault();
        return false;
    }
};