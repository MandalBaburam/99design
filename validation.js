const isEmpty = (value) =>
  value === "" || value === undefined || value === null;

const validateInput = (value, fieldName) =>
  isEmpty(value) ? `${fieldName} cannot be left blank` : "";

const validateName = (name) => {
  let nameErr = validateInput(name, "Name");
  return nameErr !== "" ? nameErr : name.length < 3 ? "Name is too Short" : "";
};

const validateEmail = (email) => {
  let emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let emailErr = validateInput(email, "Email");
  return emailErr !== ""
    ? emailErr
    : !email.match(emailRegex)
    ? "Invalid Email: Email Format eg. abc@def.xyz"
    : "";
};

const validateContact = (contact) => {
  let validRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  let contactErr = validateInput(contact, "Contact No.");

  if (contactErr == "") {
    if (!validNumber(contact)) {
      contactErr = `Contact No. only should only contains digit.`;
    } else if (contact.length < 10) {
      contactErr = `Contact No. can't be less than 10 characters `;
    } else if (contact.length > 10) {
      contactErr = `Contact No. can't be more than 10 characters `;
    }
  }

  return contactErr !== ""
    ? contactErr
    : !contact.match(validRegex)
    ? "Invalid Contact No."
    : "";
};

function validNumber(num) {
  return /^[0-9]+$/.test(num);
}

const checkName = (name) => {
  let nameErr = validateName(name);
  if (isEmpty(nameErr)) {
    document.getElementById("name_error0").innerHTML = "";
    return true;
  } else {
    document.getElementById("name_error0").innerHTML = nameErr;
    return false;
  }
};

const checkEmail = (email) => {
  let emailErr = validateEmail(email);
  if (isEmpty(emailErr)) {
    document.getElementById("email_error0").innerHTML = "";
    return true;
  } else {
    document.getElementById("email_error0").innerHTML = emailErr;
    return false;
  }
};

const checkContact = (contact) => {
  let contactErr = validateContact(contact);
  if (isEmpty(contactErr)) {
    document.getElementById("contact_error0").innerHTML = "";
    return true;
  } else {
    document.getElementById("contact_error0").innerHTML = contactErr;
    return false;
  }
};

document.getElementById("query_form").addEventListener("submit", (e) => {
  e.preventDefault();

  let form_values = document.getElementById("query_form");
  let form_data = Object.fromEntries(new FormData(form_values));

  let isValidName = checkName(form_data.san_name);
  let isValidEmail = checkEmail(form_data.san_email);
  let isValidContact = checkContact(form_data.san_contact);

  if (isValidName && isValidEmail && isValidContact) {
    alert("Verification Done Successfully");
    document.getElementById("query_form").reset();
  } else {
    alert("Verification Failed");
  }
});

const checkName2 = (name) => {
  let nameErr = validateName(name);
  if (isEmpty(nameErr)) {
    document.getElementById("name_error1").innerHTML = "";
    return true;
  } else {
    document.getElementById("name_error1").innerHTML = nameErr;
    return false;
  }
};

// Check Email Validation
const checkEmail2 = (email) => {
  let emailErr = validateEmail(email);
  if (isEmpty(emailErr)) {
    document.getElementById("email_error1").innerHTML = "";
    return true;
  } else {
    document.getElementById("email_error1").innerHTML = emailErr;
    return false;
  }
};

// Check Contact Validation
const checkContact2 = (contact) => {
  let contactErr = validateContact(contact);
  if (isEmpty(contactErr)) {
    document.getElementById("contact_error1").innerHTML = "";
    return true;
  } else {
    document.getElementById("contact_error1").innerHTML = contactErr;
    return false;
  }
};

// Onsubmit for Form 2
document.getElementById("query_form2").addEventListener("submit", (e) => {
  e.preventDefault();

  let form_values = document.getElementById("query_form2");
  let form_data = Object.fromEntries(new FormData(form_values));
  let isValidName = checkName2(form_data.san_name1);
  let isValidEmail = checkEmail2(form_data.san_email1);
  let isValidContact = checkContact2(form_data.san_contact1);

  if (isValidName && isValidEmail && isValidContact) {
    alert("verification Done Successfully");
    document.getElementById("query_form2").reset();
  } else {
    alert("Verification Failed");
  }
});
