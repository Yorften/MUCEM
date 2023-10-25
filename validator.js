function printError(Id, Msg) {
  document.getElementById(Id).innerHTML = Msg;
}

function validateForm() {
  var name = document.Form.name.value;
  var lastname = document.Form.lastname.value;
  var email = document.Form.email.value;
  var number = document.Form.number.value;
  var cin = document.Form.cin.value;

  var nameErr = (lastErr = emailErr = phoneErr = cinErr = true);

  if ((name == "") | (name == null)) {
    printError("nameErr", "Veuillez entrez votre nom.");
    var elem = document.getElementById("name");
    elem.classList.add("input-2");
  } else {
    var regex = /^[a-zA-Z]+$/;
    if (regex.test(name) === false) {
      printError("nameErr", "Veuillez entrez un nom valide.");
      var elem = document.getElementById("name");
      elem.classList.add("input-2");
    } else {
      printError("nameErr", "");
      nameErr = false;
      var elem = document.getElementById("name");
      elem.classList.remove("input-2");
    }
  }

  if ((lastname == "") | (lastname == null)) {
    printError("lastErr", "Veuillez entrez votre prénom.");
    var elem = document.getElementById("lastname");
    elem.classList.add("input-2");
  } else {
    var regex = /^[a-zA-Z]+$/;
    if (regex.test(lastname) === false) {
      printError("lastErr", "Veuillez entrez un prénom valide.");
      var elem = document.getElementById("lastname");
      elem.classList.add("input-2");
    } else {
      printError("lastErr", "");
      nameErr = false;
      var elem = document.getElementById("lastname");
      elem.classList.remove("input-2");
    }
  }

  if ((email == "") | (email == null)) {
    printError("emailErr", "Veuillez entrez votre email.");
    var elem = document.getElementById("email");
    elem.classList.add("input-2");
  } else {
    var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;
    if (regex.test(email) === false) {
      printError(
        "emailErr",
        "Veuillez entrez un email valide (example@exmple.ma)."
      );
      var elem = document.getElementById("email");
      elem.classList.add("input-2");
    } else {
      printError("emailErr", "");
      nameErr = false;
      var elem = document.getElementById("email");
      elem.classList.remove("input-2");
    }
  }

  if ((number == "") | (number == null)) {
    printError("phoneErr", "Veuillez entrez votre nombre téléphone.");
    var elem = document.getElementById("number");
    elem.classList.add("input-2");
  } else {
    var regex = /^\d{10}$/;
    if (regex.test(number) === false) {
      printError("phoneErr", "Veuillez entrez un nombre valide. (10 nombres)");
      var elem = document.getElementById("number");
      elem.classList.add("input-2");
    } else {
      printError("phoneErr", "");
      nameErr = false;
      var elem = document.getElementById("number");
      elem.classList.remove("input-2");
    }
  }

  if ((cin == "") | (cin == null)) {
    printError("cinErr", "Veuillez entrez votre CIN.");
    var elem = document.getElementById("cin");
    elem.classList.add("input-2");
  } else {
    var regex = /^(?=[A-Z]{1,2}[0-9]{5,7}$).{1,8}$/;
    if (regex.test(cin) === false) {
      printError(
        "cinErr",
        "Veuillez entrez un CIN valide. (X1234567, XX123456, ...)"
      );
      var elem = document.getElementById("cin");
      elem.classList.add("input-2");
    } else {
      printError("cinErr", "");
      nameErr = false;
      var elem = document.getElementById("cin");
      elem.classList.remove("input-2");
    }
  }

  if ((nameErr || lastErr || emailErr || phoneErr || cinErr) == true) {
    return false;
  }
}
