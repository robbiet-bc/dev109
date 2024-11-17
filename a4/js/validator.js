document.getElementById("myform").addEventListener("submit", validateForm);

// FirstName VALIDATION ////////////////////////////////////////////////////////
function validateFirstName() {
    var firstname = document.getElementById("FirstName").value;
    if (!firstname || firstname.length > 20 || firstname == "") {
        showError("FirstName", "First Name is required and cannot be greater than 20 characters");
        return false;
    }

    // regular expression to match only alphanumeric characters and spaces
    var re = /^[\w ]+$/;
    // validation fails if the input doesn't match our regular expression
    if (!re.test(firstname)) {
        alert("Error: Input contains invalid characters: " + firstname);
        showError("FirstName", "Firstname contains invalid Characters.");
        return false;
    }
    // validation was success

    return true;
}

// LastName VALIDATION /////////////////////////////////////////////////////////
function validateLastName() {
    var lastname = document.getElementById("LastName").value;
    if (!lastname || lastname.length > 50 || lastname == "") {
        showError("LastName", "Last Name is required and cannot be greater than 50 characters");
        return false;
    }
    // regular expression to match only alphanumeric characters and spaces
    var re = /^[\w ]+$/;
    // validation fails if the input doesn't match our regular expression
    if (!re.test(firstname)) {
        alert("Error: Input contains invalid characters: " + firstname);
        showError("FirstName", "Firstname contains invalid Characters.");
        return false;
    }
    // validation was success
    return true;
}

// Email VALIDATION ////////////////////////////////////////////////////////////
function validateEmail() {
    var userEmail = document.getElementById("Email").value;
    var atpos = userEmail.indexOf("@");
    var dotpos = userEmail.lastIndexOf(".");

    if (!userEmail || atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= userEmail.length) {
        showError("Email", "Invalid email");
        return false;
    }
    return true;
}

// PhoneNumber VALIDATION //////////////////////////////////////////////////////
var numbers = /^[0-9]+$/;
function validatePhone() {
    var phone = document.getElementById("Phone").value;

    if (isNaN(phone) || phone.length > 15 || phone.length < 10
        || phone === 'null' || phone === "" || !phone.match(numbers)) {
        showError("Phone", "Invalid phone number");
        return false;
    }
    return true;
}

// Username VALIDATION /////////////////////////////////////////////////////////
function validateUsername() {
    var username = document.getElementById("Username").value;

    if (!username || username == "null" || username == "" || username.length > 12) {
        showError("Username", "Username is required and cannot be greater than 12 characters");
        return false;
    }
    return true;
}

// Password VALIDATION /////////////////////////////////////////////////////////
function validatePassword() {
    var password = document.getElementById("Password").value;

    if (!password || password == "null" || password == "" || password.length > 7) {
        showError("Password", "Password is required and cannot be greater than 7 characters");
        return false;
    }
    return true;
}

// Address VALIDATION //////////////////////////////////////////////////////////
function validateAddress() {
    var address = document.getElementById("Address").value;

    if (!address || address == "null" || address == "") {
        showError("Address", "Address is required");
        return false;
    }
    return true;
}

// City VALIDATION /////////////////////////////////////////////////////////////
function validateCity() {
    var city = document.getElementById("City").value;

    if (!city || city == "null" || city == "") {
        showError("City", "City is required");
        return false;
    }
    return true;
}

// Locks Zip & State based on Country //////////////////////////////////////////
function toggleUSAFields() {
    var country = document.getElementById('Country').value;

    // If the selected country is "USA", enable the ZipCode field
    // Otherwise, disable and blank the fields
    var zipCodeField = document.getElementById('ZipCode');
    var stateDropdown = document.getElementById('state-dropdown');

    if (country === "USA") {
        // Enable the fields
        zipCodeField.disabled = false;
        stateDropdown.disabled = false;
    } else {
        // Disable the fields
        zipCodeField.disabled = true;
        stateDropdown.disabled = true;

        // Clear their values
        zipCodeField.value = ""; 
        stateDropdown.value = ""; 
    }
}

function validateZipCode() {
    var zipcode = document.getElementById("Zipcode").value;
    var country = document.getElementById("Country").value;

    if (country == "USA") {
        if (zipcode.length > 5 || !zipcode || zipcode == "null" || zipcode == "") {
            showError("Zipcode", "Required. Max length for Zipcode is 5");
            return false;
        }
        else {
            return true;
        }
    }
    else {
        return true;
    }
}


// Country VALIDATION //////////////////////////////////////////////////////////
function validateCountry() {
    var country = document.getElementById("Country").value;

    if (!country || country == "null" || country == "") {
        showError("Country", "Country is required");
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
    removeElementsByClass(document.getElementById('myform'), 'error');
}


// STATE VALIDATION ////////////////////////////////////////////////////////////
// Array of US states
const states = [
    { code: "AL", name: "Alabama" },
    { code: "AK", name: "Alaska" },
    { code: "AZ", name: "Arizona" },
    { code: "AR", name: "Arkansas" },
    { code: "CA", name: "California" },
    { code: "CO", name: "Colorado" },
    { code: "CT", name: "Connecticut" },
    { code: "DE", name: "Delaware" },
    { code: "DC", name: "District of Colombia" }, // Washington DC
    { code: "FL", name: "Florida" },
    { code: "GA", name: "Georgia" },
    { code: "HI", name: "Hawaii" },
    { code: "ID", name: "Idaho" },
    { code: "IL", name: "Illinois" },
    { code: "IN", name: "Indiana" },
    { code: "IA", name: "Iowa" },
    { code: "KS", name: "Kansas" },
    { code: "KY", name: "Kentucky" },
    { code: "LA", name: "Louisiana" },
    { code: "ME", name: "Maine" },
    { code: "MD", name: "Maryland" },
    { code: "MA", name: "Massachusetts" },
    { code: "MI", name: "Michigan" },
    { code: "MN", name: "Minnesota" },
    { code: "MS", name: "Mississippi" },
    { code: "MO", name: "Missouri" },
    { code: "MT", name: "Montana" },
    { code: "NE", name: "Nebraska" },
    { code: "NV", name: "Nevada" },
    { code: "NH", name: "New Hampshire" },
    { code: "NJ", name: "New Jersey" },
    { code: "NM", name: "New Mexico" },
    { code: "NY", name: "New York" },
    { code: "NC", name: "North Carolina" },
    { code: "ND", name: "North Dakota" },
    { code: "OH", name: "Ohio" },
    { code: "OK", name: "Oklahoma" },
    { code: "OR", name: "Oregon" },
    { code: "PA", name: "Pennsylvania" },
    { code: "RI", name: "Rhode Island" },
    { code: "SC", name: "South Carolina" },
    { code: "SD", name: "South Dakota" },
    { code: "TN", name: "Tennessee" },
    { code: "TX", name: "Texas" },
    { code: "UT", name: "Utah" },
    { code: "VT", name: "Vermont" },
    { code: "VA", name: "Virginia" },
    { code: "WA", name: "Washington" },
    { code: "WV", name: "West Virginia" },
    { code: "WI", name: "Wisconsin" },
    { code: "WY", name: "Wyoming" }
];

// This builds HTML for each state in const states and injects it into
// my dropdown list.
function populateStates() {
    const selectElement = document.getElementById("state-dropdown");
    states.forEach(state => {
        const option = document.createElement("option");
        option.value = state.code;
        option.textContent = state.name;
        selectElement.appendChild(option);
    });
}

// Call the function to populate the dropdown
populateStates();



// ALL VALIDATION //////////////////////////////////////////////////////////////
function validateForm(event) {
    removeErrorMessages();
    if (validateFirstName()
        // && validateFirstName() // rt.rt testing purposes
        && validateLastName()
        && validateEmail()
        && validatePhone()
        && validateUsername()
        && validatePassword()
        && validateAddress()
        && validateCity()
        && validateCountry()
        && validateZipCode()
    ) {
        return true;
    }
    else {
        event.preventDefault();
        return false;
    }
};