const myEmployee = {
    lastname: "Doe",
    firstname: "John",
    birthday: "1981-11-12",
    salary: 2150
};

// Fonction d'affichage
function displayEmployee() {

    const email =
        `${myEmployee.firstname.toLowerCase()}.${myEmployee.lastname.toLowerCase()}@example.com`;

    document.getElementById("tdLastname").textContent =
        myEmployee.lastname;

    document.getElementById("tdFirstname").textContent =
        myEmployee.firstname;

    document.getElementById("tdBirthday").textContent =
        myEmployee.birthday;

    document.getElementById("tdSalary").textContent =
        myEmployee.salary + " €";

    document.getElementById("tdEmail").textContent =
        email;
}

// Pré-remplissage du formulaire
document.getElementById("lastname").value =
    myEmployee.lastname;

document.getElementById("firstname").value =
    myEmployee.firstname;

document.getElementById("birthday").value =
    myEmployee.birthday;

document.getElementById("salary").value =
    myEmployee.salary;

// Affichage initial
displayEmployee();

// Mise à jour de l'objet
document
    .getElementById("employeeForm")
    .addEventListener("submit", function (event) {

        event.preventDefault();

        myEmployee.lastname =
            document.getElementById("lastname").value;

        myEmployee.firstname =
            document.getElementById("firstname").value;

        myEmployee.birthday =
            document.getElementById("birthday").value;

        myEmployee.salary =
            document.getElementById("salary").value;

        displayEmployee();
    });